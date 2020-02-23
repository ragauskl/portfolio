import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core'
import * as Three from 'three'

@Component({
  selector: 'app-image-shatter',
  templateUrl: './image-shatter.component.html',
  styleUrls: ['./image-shatter.component.scss']
})
export class ImageShatterComponent implements AfterViewInit {
  camera: Three.PerspectiveCamera
  scene: Three.Scene
  geometry: Three.BoxGeometry
  material: Three.MeshNormalMaterial
  mesh: Three.Mesh
  renderer: Three.WebGLRenderer

  constructor (
    private _el: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit () {
    this.init()
  }

  init () {
    const { clientHeight, clientWidth } = this._el.nativeElement
    this.camera = new Three.PerspectiveCamera(50, clientWidth / clientHeight, 0.01, 10)
    this.camera.position.z = 1

    this.scene = new Three.Scene()
    this.geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
    this.material = new Three.MeshNormalMaterial()
    this.mesh = new Three.Mesh(this.geometry, this.material)

    this.scene.add(this.mesh)
    this.renderer = new Three.WebGLRenderer({ antialias: true })
    this.renderer.setSize(clientWidth, clientHeight)
    this._el.nativeElement.appendChild(this.renderer.domElement)
    this.animate()
  }

  animate () {
    requestAnimationFrame(this.animate.bind(this))
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.02
    this.renderer.render(this.scene, this.camera)
  }
}
