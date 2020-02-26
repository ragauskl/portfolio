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
varying vec4 worldPosition;

// chunk(common);

// chunk(packing);

// chunk(bsdfs);

// chunk(shadowmap_pars_fragment);
// chunk(fog_pars_fragment);
// chunk(lights_pars_begin);
// chunk(shadowmask_pars_fragment);


void main(void) {
  vec3 lightDirection = normalize(lightPosition - vWorldPosition);

  vec3 outgoingLight = vec3(1.0);

  float mask = getShadowMask();
  float c = 0.35 + max(0.0, dot(vNormal, lightDirection)) * 0.4 * getShadowMask();

  vec4 tx = texture2D(texture, vUv);

  float r = 0.35 + max(0.0, dot(tx.x, c)) * 0.4 * getShadowMask();
  float g = 0.35 + max(0.0, dot(tx.y, c)) * 0.4 * getShadowMask();
  float b = 0.35 + max(0.0, dot(tx.z, c)) * 0.4 * getShadowMask();

  gl_FragColor = vec4(r, g, b, tx.w);
}
