/**
* The fragment shader's main() function must define `gl_FragColor`,
* which describes the pixel color of each pixel on the screen.
*
* To do so, we can use uniforms passed into the shader and varyings
* passed from the vertex shader
**/



precision highp float; // set float precision (optional)

uniform sampler2D texture; // identify the texture as a uniform argument
varying vec2 vUv; // identify the uv values as a varying attribute

varying vec3 vWorldPosition;
uniform vec3 lightPosition;

varying vec3 vNormal;

// chunk(common);
// chunk(packing);
// chunk(bsdfs);

// chunk(fog_pars_fragment);
// chunk(lights_pars_begin);

// chunk(shadowmap_pars_fragment);
// chunk(shadowmask_pars_fragment);


void main(void) {

  vec3 lightDirection = normalize(lightPosition - vWorldPosition);

  vec3 outgoingLight = vec3(1.0);

  float mask = min(1.0, getShadowMask() + 0.7);
  vec4 tx = texture2D(texture, vUv) * mask;

  float r = tx.r * mask;
  float g = tx.g * mask;
  float b = tx.b * mask;


  gl_FragColor = vec4(r, g, b, 1.0);
}
