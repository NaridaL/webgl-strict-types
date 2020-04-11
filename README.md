# webgl-strict-types
Strict types for WebGL and WebGL 2.0.

The included TypeScript typings for WebGL type all enum parameters as generic `GLenum = number`, as indeed does the specification.
This is too broad in basically all cases, for example, `bindRenderbuffer(target: GLenum, buffer: WebGLRenderbuffer | null)`
accepts any number as target when in fact `gl.RENDERBUFFER` is the only valid value.

A number of other cases can also
be modelled more accurately, such as literal number types for some parameters, as well as preventing `WebGLObject` types
(such as `WebGLBuffer` and `WebGLRenderbuffer`) from being assignable to each other.


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


As TypeScript already comes with (less strict) typings for WebGL/WebGL2, and this can't override
the existing typings, you need to cast the context explicitly:

```ts
const gl = canvas.getContext('webgl') as any as WebGLRenderingContextStrict;

// arrayBufferBinding is correctly inferred to be a WebGLBuffer
const arrayBufferBinding = gl.getParameter(gl.ARRAY_BUFFER_BINDING);

// ERROR: Argument of type 'GLenum<"ARRAY_BUFFER">' is not assignable to parameter of type 'GLenum<"FRAMEBUFFER">'.
gl.bindFramebuffer(gl.ARRAY_BUFFER, null)

// You can use the defined types as follows:
import GL = WebGLRenderingContextStrict;
const WGL = WebGLRenderingContext as any as WebGLRenderingContextStrict.Constants;
const bufferTarget: GL.BufferTarget = gl.ARRAY_BUFFER;
const framebufferTarget: GL['FRAMEBUFFER'] = WGL.FRAMEBUFFER;

// Without this lib, not an error:
const webGLBuffer: WebGLBuffer = gl.createRenderbuffer();
```

See the definition files [webgl.d.ts](./webgl.d.ts) and [webgl2.d.ts](./webgl2.d.ts) for all available types.

## License
MIT