// Code taken from https://github.com/CesiumGS/webglreport/blob/master/webglreport.js

class WebGLStats {
  readonly webglVersion = window.location.search.indexOf('v=2') > 0 ? 2 : 1
  possibleNames = (this.webglVersion === 2) ? ['webgl2', 'experimental-webgl2'] : ['webgl', 'experimental-webgl']

  private _canvas = document.createElement('canvas')
  private readonly _contextName = this.possibleNames.find(name => {
    const gl = this._canvas.getContext(name, { stencil: true })
    return !!gl
  })

  // private _gl = this._canvas.getContext(this._contextName)

  majorPerformanceCaveat: boolean

  constructor () {
    this.majorPerformanceCaveat = this.GetMajorPerformanceCaveat()
  }

  private GetMajorPerformanceCaveat () {
    // Does context creation fail to do a major performance caveat?
    document.body.appendChild(this._canvas)

    const gl = this._canvas.getContext(this._contextName, { failIfMajorPerformanceCaveat : true }) as WebGLRenderingContext
    this._canvas.remove()

    if (!gl) {
      // Our original context creation passed.  This did not.
      return true
    }

    if (typeof gl.getContextAttributes().failIfMajorPerformanceCaveat === 'undefined') {
      // If getContextAttributes() doesn't include the failIfMajorPerformanceCaveat
      // property, assume the browser doesn't implement it yet.
      return true
    }

    return false
  }
}

export default new WebGLStats()
