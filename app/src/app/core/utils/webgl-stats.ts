// Code taken from https://github.com/CesiumGS/webglreport/blob/master/webglreport.js

class WebGLStats {
  readonly contextName = this.GetContextName()

  readonly majorPerformanceCaveat = this.HasMajorPerformanceCaveat()

  private get newCanvas () {
    // Create new canvas on purpose, if getContext is called twice on same
    // canvas, it returns false negative on majorPerformanceCaveat
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 1
    return canvas
  }

  private HasMajorPerformanceCaveat () {
    const canvas = this.newCanvas
    // Does context creation fail to do a major performance caveat?
    document.body.appendChild(canvas)

    const gl = canvas.getContext(this.contextName, { failIfMajorPerformanceCaveat : true }) as WebGLRenderingContext
    canvas.remove()

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

  private GetContextName (): 'webgl2' | 'experimental-webgl2' | 'webgl' | 'experimental-webgl' {
    const canvas = this.newCanvas
    const webglVersion = window.location.search.indexOf('v=2') > 0 ? 2 : 1
    const possibleNames = (webglVersion === 2) ? ['webgl2', 'experimental-webgl2'] : ['webgl', 'experimental-webgl']
    const contextName = possibleNames.find(name => {
      const gl = canvas.getContext(name, { stencil: true })
      return !!gl
    })

    return contextName as any
  }

}

export default new WebGLStats()
