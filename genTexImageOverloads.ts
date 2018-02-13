// tslint:disable
const formats = [
	{ internalFormat: "RGB", format: "RGB", type: ["UNSIGNED_BYTE", "UNSIGNED_SHORT_5_6_5"] },
	{ internalFormat: "RGBA", format: "RGBA", type: ["UNSIGNED_BYTE", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1"] },
	{ internalFormat: "LUMINANCE_ALPHA", format: "LUMINANCE_ALPHA", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "LUMINANCE", format: "LUMINANCE", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "ALPHA", format: "ALPHA", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "R8", format: "RED", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "R16F", format: "RED", type: ["HALF_FLOAT", "FLOAT"] },
	{ internalFormat: "R32F", format: "RED", type: ["FLOAT"] },
	{ internalFormat: "R8UI", format: "RED_INTEGER", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "RG8", format: "RG", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "RG16F", format: "RG", type: ["HALF_FLOAT", "FLOAT"] },
	{ internalFormat: "RG32F", format: "RG", type: ["FLOAT"] },
	{ internalFormat: "RG8UI", format: "RG_INTEGER", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "RGB8", format: "RGB", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "SRGB8", format: "RGB", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "RGB565", format: "RGB", type: ["UNSIGNED_BYTE", "UNSIGNED_SHORT_5_6_5"] },
	{ internalFormat: "R11F_G11F_B10F", format: "RGB", type: ["UNSIGNED_INT_10F_11F_11F_REV", "HALF_FLOAT", "FLOAT"] },
	{ internalFormat: "RGB9_E5", format: "RGB", type: ["HALF_FLOAT", "FLOAT"] },
	{ internalFormat: "RGB16F", format: "RGB", type: ["HALF_FLOAT", "FLOAT"] },
	{ internalFormat: "RGB32F", format: "RGB", type: ["FLOAT"] },
	{ internalFormat: "RGB8UI", format: "RGB_INTEGER", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "RGBA8", format: "RGBA", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "SRGB8_ALPHA8", format: "RGBA", type: ["UNSIGNED_BYTE"] },
	{ internalFormat: "RGB5_A1", format: "RGBA", type: ["UNSIGNED_BYTE", "UNSIGNED_SHORT_5_5_5_1"] },
	{ internalFormat: "RGB10_A2", format: "RGBA", type: ["UNSIGNED_INT_2_10_10_10_REV"] },
	{ internalFormat: "RGBA4", format: "RGBA", type: ["UNSIGNED_BYTE", "UNSIGNED_SHORT_4_4_4_4"] },
	{ internalFormat: "RGBA16F", format: "RGBA", type: ["HALF_FLOAT", "FLOAT"] },
	{ internalFormat: "RGBA32F", format: "RGBA", type: ["FLOAT"] },
	{ internalFormat: "RGBA8UI", format: "RGBA_INTEGER", type: ["UNSIGNED_BYTE"] },
];
const formatArrays = {
	BYTE: "Int8Array",
	UNSIGNED_BYTE: "Uint8Array",
	SHORT: "Int16Array",
	UNSIGNED_SHORT: "Uint16Array",
	UNSIGNED_SHORT_5_6_5: "Uint16Array",
	UNSIGNED_SHORT_5_5_5_1: "Uint16Array",
	UNSIGNED_SHORT_4_4_4_4: "Uint16Array",
	INT: "Int32Array",
	UNSIGNED_INT: "Uint32Array",
	UNSIGNED_INT_5_9_9_9_REV: "Uint32Array",
	UNSIGNED_INT_2_10_10_10_REV: "Uint32Array",
	UNSIGNED_INT_10F_11F_11F_REV: "Uint32Array",
	UNSIGNED_INT_24_8: "Uint32Array",
	HALF_FLOAT: "Uint16Array",
	FLOAT: "Float32Array",
};

const gen = `
		// WebGL1 legacy entrypoints:
		texImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, border: 0, format: FORMAT, type: TYPE, /* [AllowShared] */ pixels: ArrayBufferView | null): void;
		texImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, internalformat: INTERNALFORMAT, format: FORMAT, type: TYPE, source: TexImageSource): void; // May throw DOMException

		texSubImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: FORMAT, type: TYPE, /* [AllowShared] */ pixels: ArrayBufferView | null): void;
		texSubImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, format: FORMAT, type: TYPE, source: TexImageSource): void; // May throw DOMException

		// WebGL2 entrypoints:
		texImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, border: 0, format: FORMAT, type: TYPE, pboOffset: GLintptr): void;
		texImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, border: 0, format: FORMAT, type: TYPE, source: TexImageSource): void; // May throw DOMException
		texImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, border: 0, format: FORMAT, type: TYPE, /* [AllowShared] */ srcData: ArrayBufferView, srcOffset: GLuint): void;

		texImage3D(target: TexImage3DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, depth: GLsizei, border: 0, format: FORMAT, type: TYPE, pboOffset: GLintptr): void;
		texImage3D(target: TexImage3DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, depth: GLsizei, border: 0, format: FORMAT, type: TYPE, source: TexImageSource): void; // May throw DOMException
		texImage3D(target: TexImage3DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, depth: GLsizei, border: 0, format: FORMAT, type: TYPE, /* [AllowShared] */ srcData: ArrayBufferView | null): void;
		texImage3D(target: TexImage3DTarget, level: GLint, internalformat: INTERNALFORMAT, width: GLsizei, height: GLsizei, depth: GLsizei, border: 0, format: FORMAT, type: TYPE, /* [AllowShared] */ srcData: ArrayBufferView, srcOffset: GLuint): void;

		texSubImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: FORMAT, type: TYPE, pboOffset: GLintptr): void;
		texSubImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: FORMAT, type: TYPE, source: TexImageSource): void; // May throw DOMException
		texSubImage2D(target: WebGLRenderingContext.TexImage2DTarget, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: FORMAT, type: TYPE, /* [AllowShared] */ srcData: ArrayBufferView, srcOffset: GLuint): void;

		texSubImage3D(target: TexImage3DTarget, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: FORMAT, type: TYPE, pboOffset: GLintptr): void;
		texSubImage3D(target: TexImage3DTarget, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: FORMAT, type: TYPE, source: TexImageSource): void; // May throw DOMException
		texSubImage3D(target: TexImage3DTarget, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: FORMAT, type: TYPE, /* [AllowShared] */ srcData: ArrayBufferView | null, srcOffset?: GLuint /* = 0 */): void;
`

const result = gen.replace(/^.*;.*$/gm, (substr, ...args) => {
	// console.log(substr);
	function f (substr) {

		const if_ = substr.includes('INTERNALFORMAT')
		const f = substr.includes('FORMAT')
		const t = substr.includes('TYPE')
		const pixels = substr.includes('ArrayBufferView')
		if (if_ && t && f && pixels) {
			return formats.map(format => {
				const necessaryPixelFormats = {}
				format.type.forEach(t => (necessaryPixelFormats[formatArrays[t]] = true))
				return Object.keys(necessaryPixelFormats).sort().map(npf => {
					return substr
						.replace('INTERNALFORMAT', "GL2['" + format.internalFormat + "']")
						.replace('FORMAT', "GL2['" + format.format + "']")
						.replace('TYPE', format.type.filter(t => formatArrays[t] == npf).map(t => "GL2['" + t + "']").join(" | "))
						.replace('ArrayBufferView', npf)
				}).join('\n')
			}).join('\n')
		}
		if (if_ && t && f) {
			return formats.map(format => {
				return substr
					.replace('INTERNALFORMAT', "GL2['" + format.internalFormat + "']")
					.replace('FORMAT', "GL2['" + format.format + "']")
					.replace('TYPE', format.type.map(t => "GL2['" + t + "']").join(" | "))
			}).join('\n')
		}
		if (f && t && !pixels && !if_) {
			const formatTypes = {}
			formats.forEach(f => {
				if (!formatTypes[f.format]) {
					formatTypes[f.format] = {}
				}
				f.type.forEach(t => formatTypes[f.format][t] = true)
			})
			return Object.keys(formatTypes).map(format => {
				const type = Object.keys(formatTypes[format]).map(t => "GL2['" + t + "']").join(" | ")
				return substr
					.replace('FORMAT', "GL2['" + format + "']")
					.replace('TYPE', type)
			}).join('\n')
		}
		if (f && t && pixels && !if_) {
			const formatTypes = {}
			formats.forEach(f => {
				if (!formatTypes[f.format]) {
					formatTypes[f.format] = {}
				}
				f.type.forEach(t => formatTypes[f.format][t] = true)
			})
			return Object.keys(formatTypes).map(format => {
				const types = Object.keys(formatTypes[format])
				const necessaryPixelFormats = {}
				types.forEach(t => (necessaryPixelFormats[formatArrays[t]] = true))
				return Object.keys(necessaryPixelFormats).sort().map(npf => {
					return substr
						.replace('FORMAT', "GL2['" + format + "']")
						.replace('TYPE', types.filter(t => formatArrays[t] == npf).map(t => "GL2['" + t + "']").join(" | "))
						.replace('ArrayBufferView', npf)
				}).join('\n')
			}).join('\n')
		}
		return "missing"
	}
	return "\t\t//#region " + substr.trim() + "\n" + f(substr) + "\n\t\t//#endregion"
});
console.log(result)