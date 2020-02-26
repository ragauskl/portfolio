import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core'
import * as THREE from 'three'
import { Subscription, fromEvent } from 'rxjs'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements AfterViewInit, OnDestroy {
  private _subscriptions = new Subscription()

  @Input() src: string

  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  light: THREE.SpotLight
  planeGeometry: THREE.PlaneGeometry | THREE.PlaneBufferGeometry
  backPlane: THREE.Mesh
  material: THREE.MeshLambertMaterial | THREE.ShaderMaterial
  meshArray: THREE.Mesh[] = []
  renderer: THREE.WebGLRenderer

  raycaster: THREE.Raycaster
  rendererMouse: THREE.Vector2

  // Mouse position relative to element
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    relativeX: 0,
    relativeY: 0,
    updatePosition: function (x: number, y: number) {
      this.x = x - this._x
      this.y = y - this._y

      this.relativeX = x
      this.relativeY = y
    },
    setOrigin: function (el: HTMLElement) {
      this._x = Math.floor(el.clientWidth / 2)
      this._y = Math.floor(el.clientHeight / 2)
    }
  }

  get element (): HTMLElement {
    return this._el.nativeElement
  }

  vertexShader: string
  fragmentShader: string
  constructor (
    private _el: ElementRef<HTMLElement>,
    private _http: HttpClient
  ) {

  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  async ngAfterViewInit () {
    let shader = THREE.ShaderChunk.shadowmap_pars_fragment

    // shader = shader.replace(
		// 			'#ifdef USE_SHADOWMAP',
		// 			'#ifdef USE_SHADOWMAP' +
		// 			document.getElementById('PCSS').textContent
		// 		)

    // shader = shader.replace(
		// 			'#if defined( SHADOWMAP_TYPE_PCF )',
		// 			document.getElementById('PCSSGetShadow').textContent +
		// 			'#if defined( SHADOWMAP_TYPE_PCF )'
		// 		)

    // THREE.ShaderChunk.shadowmap_pars_fragment = shader

    this.vertexShader = await this._http.get(`assets/shaders/vertex-shader.vs`, { responseType: 'text' }).toPromise()
    this.fragmentShader = await this._http.get(`assets/shaders/fragment-shader.fs`, { responseType: 'text' }).toPromise()
    this.mouse.setOrigin(this.element)
    this.init()

    this._subscriptions.add(
      fromEvent(this.element, 'mouseleave').subscribe(e => {
        const event = e as MouseEvent
        // this.rotateMesh(0, 0)
        this.resetAnimation()
        this.RenderImageAs('plane')
      })
    )

    this._subscriptions.add(
      fromEvent(window, 'keydown').subscribe(e => {
        if ((e as KeyboardEvent).key === 'Escape') {
          this.updateLight(true)
        }
      })
    )

    this._subscriptions.add(
      fromEvent(this.element, 'mousemove').subscribe(e => {
        const event = e as MouseEvent

        // Calculate location on image from position on page
        const rect = this.element.getBoundingClientRect()
        this.updateMousePosition(event.clientX - rect.left, event.clientY - rect.top)

        const { clientHeight, clientWidth } = this.element
        this.rendererMouse.x = (this.mouse.relativeX / clientWidth) * 2 - 1
        this.rendererMouse.y = -(this.mouse.relativeY / clientHeight) * 2 + 1

        this.raycaster.setFromCamera(this.rendererMouse, this.camera)

        const [intersection] = this.raycaster.intersectObjects(this.meshArray)
        // // if (intersection && !this.bufferGeometry) this.RenderImageAs('buffer')
        this.RenderImageAs('buffer')
        // this.rotateMesh()
      })
    )

    this._subscriptions.add(
      fromEvent(window, 'resize').subscribe(() => this.updateCamera())
    )
  }

  updateCamera () {
    const { clientHeight, clientWidth } = this.element
    this.renderer.setSize(clientWidth, clientHeight)

    this.camera.aspect = clientWidth / clientHeight
    this.camera.updateProjectionMatrix()
    this.updateRenderer()
  }

  updateRenderer () {
    this.renderer.render(this.scene, this.camera)
  }

  init () {
    const { clientHeight, clientWidth } = this.element
    this.camera = new THREE.PerspectiveCamera(50, clientWidth / clientHeight, 0.01, 10000)
    this.camera.position.z = 500

    this.scene = new THREE.Scene()

    const material = new THREE.MeshPhongMaterial({
      color: '#cccccc',
      side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      material
    )
    mesh.position.y += 30
    mesh.castShadow = true
    // this.scene.add(mesh)

    this.backPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(clientWidth, clientHeight),
      material
    )
    this.backPlane.position.y = -100
    this.backPlane.receiveShadow = true
    window['floor'] = this.backPlane
    this.scene.add(this.backPlane)

    const ambient = new THREE.AmbientLight('white', 0.3)
    this.scene.add(ambient)

    this.light = new THREE.SpotLight('white') as any
    this.light.position.set(0, 90, 100)
    this.light.castShadow = true

    this.scene.add(this.light)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    // this.renderer.setClearColor('#6e6e6e') // 0xffffff
    this.renderer.setSize(clientWidth, clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.element.appendChild(this.renderer.domElement)

    this.raycaster = new THREE.Raycaster()
    this.rendererMouse = new THREE.Vector2()

    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.enablePan = true
    const animate = () => {
      requestAnimationFrame(animate.bind(this))
      controls.update()

      this.renderer.render(this.scene, this.camera)
      this.updateCamera()
    }
    animate()

    this.setupShadow()

    this.RenderImageAs('plane')

    setTimeout(() => this.updateRenderer(), 500)

    window['obj'] = this
  }

  updateLight (pos = false) {
    if (pos) {
      this.light.position.set(
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z
    )

      this.light.rotation.set(
      this.camera.rotation.x,
      this.camera.rotation.y,
      this.camera.rotation.z
    )
    }

    if (this.lightHelper) this.lightHelper.update()
    if (this.shadowCameraHelper) this.shadowCameraHelper.update()

    this.updateRenderer()
  }

  lightHelper
  shadowCameraHelper

  setupShadow () {

    // this.light.shadow.mapSize.width = 512 * 2
    // this.light.shadow.mapSize.height = 512 * 2
    this.light.shadow.camera.near = 1
    this.light.shadow.camera.far = 4000
    this.light.shadow.camera.fov = 30

    this.lightHelper = new THREE.SpotLightHelper(this.light)
    this.scene.add(this.lightHelper)

    this.shadowCameraHelper = new THREE.CameraHelper(this.light.shadow.camera)
    this.scene.add(this.shadowCameraHelper)

    this.scene.add(new THREE.AxesHelper(10))
  }

  lastGeom
  private async RenderImageAs (geom?: 'plane' | 'buffer') {
    if (this.lastGeom && this.lastGeom === geom) return
    this.lastGeom = geom
    if (this.meshArray.length) {
      for (const mesh of this.meshArray) {
        this.scene.remove(mesh)
      }
      this.meshArray = []
      this.planeGeometry = undefined
    }

    if (!this.material) {

      const loader = new THREE.TextureLoader()
      // this.material = new THREE.ShaderMaterial(THREE.ShaderLib.shadow)
      // THREE.ShaderChunk.shadow_frag

      this.material = new THREE.ShaderMaterial({
        uniforms: // THREE.ShaderLib.shadow.uniforms,
        {
          // ...THREE.UniformsLib.fog,
          // ...THREE.UniformsLib.lights,
          texture: {
            type: 't',
            value: loader.load(this.src)
          },
          lightPosition: {
            type: 'v3',
            value: this.light.position
          }
        },
        vertexShader: shaderParse(this.vertexShader),
        fragmentShader: shaderParse(this.fragmentShader),
        side: THREE.DoubleSide
      })
    }

    const imageSize = { width: 70, height: 42 }
    const coords = { x: -(imageSize.width / 2), y: -(imageSize.height / 2), z: 0 }

    const addMesh = (geom: THREE.Geometry | THREE.BufferGeometry) => {
      const mesh = new THREE.Mesh(geom, this.material)
      mesh.position.set(0,0,10)
      this.scene.add(mesh)
      mesh.castShadow = true
      mesh.receiveShadow = true
      this.meshArray.push(mesh)
    }
    if (geom === 'plane') {
      this.planeGeometry = new THREE.PlaneGeometry(imageSize.width, imageSize.height)
      addMesh(this.planeGeometry)

    } else if (geom === 'buffer') {
      const geom1 = new THREE.BufferGeometry()
      const geom2 = new THREE.BufferGeometry()
      const vertices1 = new Float32Array([
        coords.x, coords.y, coords.z, // bottom left
        coords.x + imageSize.width, coords.y, coords.z, // bottom right
        coords.x + imageSize.width, coords.y + imageSize.height, coords.z // upper right
      ])
      const vertices2 = new Float32Array([
        coords.x + imageSize.width, coords.y + imageSize.height, coords.z + 10, // upper right
        coords.x, coords.y + imageSize.height, coords.z + 10, // upper left
        coords.x, coords.y, coords.z + 10 // bottom left
      ])

      // set the uvs for this box; these identify the following corners:
      // lower-left, lower-right, upper-right, upper-left
      const uvs1 = new Float32Array([
        0.0, 0.0, // bottom left
        1.0, 0.0, // bottom right
        1.0, 1.0 // upper right
      ])
      const uvs2 = new Float32Array([
        1.0, 1.0, // upper right
        0.0, 1.0, // upper left
        0.0, 0.0 // bottom left
      ])

      geom1.setAttribute('position', new THREE.BufferAttribute(vertices1, 3))
      geom1.setAttribute('uv', new THREE.BufferAttribute(uvs1, 2))
      addMesh(geom1)

      geom2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3))
      geom2.setAttribute('uv', new THREE.BufferAttribute(uvs2, 2))
      addMesh(geom2)
    }

    this.updateRenderer()
  }

  private _resetAnimation
  resetAnimation () {
    // let rx = 0
    // let ry = 0
    // for (const mesh of this.meshArray) {
    //   const { x, y } = mesh.rotation
    //   if (y > 0.1) {
    //     mesh.rotation.y -= 0.05
    //   } else if (y < -0.1) {
    //     mesh.rotation.y += 0.05
    //   } else {
    //     mesh.rotation.y = 0
    //   }

    //   if (x > 0.1) {
    //     mesh.rotation.x -= 0.05
    //   } else if (x < -0.1) {
    //     mesh.rotation.x += 0.05
    //   } else {
    //     mesh.rotation.x = 0
    //   }

    //   rx += mesh.rotation.x
    //   ry += mesh.rotation.y
    // }
    this.renderer.render(this.scene, this.camera)

    // if (rx !== 0 || ry !== 0) {
    //   this._resetAnimation = requestAnimationFrame(this.resetAnimation.bind(this))
    // }
  }

  rotateMesh () {
    // const rotateX = (this.mouse.y / this.element.offsetHeight / 0.5).toFixed(2)
    // const rotateY = (this.mouse.x / this.element.offsetWidth / 0.5).toFixed(2)

    // for (const mesh of this.meshArray) {
    //   mesh.rotation.x = +rotateX
    //   mesh.rotation.y = +rotateY
    // }

    this.renderer.render(this.scene, this.camera)
  }

  updateMousePosition (x: number, y: number) {
    // if (this._resetAnimation) cancelAnimationFrame(this._resetAnimation)
    this.mouse.updatePosition(x, y)

  }

}

function replaceThreeChunkFn (_: any, b: any) {
  // if (b === 'shadowmap_pars_fragment') console.log(THREE.ShaderChunk[b])
  console.warn(b, !!THREE.ShaderChunk[b])
  return THREE.ShaderChunk[b] + '\n'
}

function shaderParse (glsl: string) {
  return glsl.replace(/\/\/\s?chunk\(\s?(\w+)\s?\);/g, replaceThreeChunkFn)
}
