/**
* The vertex shader's main() function must define `gl_Position`,
* which describes the position of each vertex in the space.
*
* To do so, we can use the following variables defined by Three.js:
*
*   uniform mat4 modelViewMatrix - combines:
*     model matrix: maps a point's local coordinate space into world space
*     view matrix: maps world space into camera space
*
*   uniform mat4 projectionMatrix - maps camera space into screen space
*
*   attribute vec3 position - sets the position of each vertex
*
*   attribute vec2 uv - determines the relationship between vertices and textures
*
* `uniforms` are constant across all vertices
*
* `attributes` can vary from vertex to vertex and are defined as arrays
* with length equal to the number of vertices. Each index in the array
* is an attribute for the corresponding vertex
*
* `varyings` are values passed from the vertex to the fragment shader
**/

varying vec2 vUv; // pass the uv coordinates of each pixel to the frag shader
varying vec3 vWorldPosition;
varying vec3 vNormal;

// chunk(shadowmap_pars_vertex);

void main() {
  vUv = uv;
  vNormal = normalMatrix * vec3(normal + normalize(position) * 0.2);

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  // chunk(shadowmap_vertex);

  vWorldPosition = worldPosition.xyz;


  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
