## Installation
```
npm install -D webgl-strict-types
````
## Usage 
You need to explicitly include the types in your compilation. Use a triple slash statement:
```ts
/// <reference path="node_modules/webgl-strict-types/index.d.ts" />
``` 
Alternatively, include them in your tsconfig:
```json
// tsconfig.json
{
    includes: [
        'node_modules/webgl-strict-types/index.d.ts'
    ]
}
```


WebGL2 works without any further changes, for WebGL1, this doesn't override the existing typings, so you need to cast the context explicitly:

```ts
const gl = canvas.getContext('webgl') as any as WebGLRenderingContextStrict;

// arrayBufferBinding is inferred to be a WebGLBuffer
const arrayBufferBinding = gl.getParameter(gl.ARRAY_BUFFER_BINDING);

// ERROR: Argument of type 'GLenum<"ARRAY_BUFFER">' is not assignable to parameter of type 'GLenum<"FRAMEBUFFER">'.
gl.bindFramebuffer(gl.ARRAY_BUFFER, null)

```


## License
MIT