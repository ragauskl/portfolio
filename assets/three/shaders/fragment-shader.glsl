/**
* The fragment shader's main() function must define `gl_FragColor`,
* which describes the pixel color of each pixel on the screen.
*
* To do so, we can use uniforms passed into the shader and varyings
* passed from the vertex shader
**/

// precision highp float; // set float precision (optional)

uniform sampler2D texture; // identify the texture as a uniform argument
varying vec2 vUv; // identify the uv values as a varying attribute
uniform float bWidth; // Width in %
uniform vec3 bColor;
// chunk(common);
// chunk(packing);
// chunk(bsdfs);

// chunk(fog_pars_fragment);
// chunk(lights_pars_begin);

// chunk(shadowmap_pars_fragment);
// chunk(shadowmask_pars_fragment);

void main(void) {
  float mask = min(1.0, getShadowMask() + 0.5);
  vec4 tx = texture2D(texture, vUv) * mask;
  vec3 border = bColor / 255.0;

  if (vUv.x < bWidth || vUv.x > 1.0 - bWidth) {
    gl_FragColor = vec4(border.xyz, 1.0);
  } else if (vUv.y < bWidth || vUv.y > 1.0 - bWidth) {
    gl_FragColor = vec4(border.xyz, 1.0);
  } else {
    gl_FragColor = vec4(tx.rgb, 1.0);
  }
}
