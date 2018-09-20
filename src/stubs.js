//Provides: caml_print_hello
function caml_print_hello() {
    console.log("Hello!");
}

//Provides: caml_glfwInit
function caml_glfwInit() {
    // no-op
};

//Provides: caml_glfwCreateWindow
function caml_glfwCreateWindow(width, height, title) {
    var canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0px";
    canvas.style.bottom = "0px";
    canvas.style.width = width.toString() + "px";
    canvas.style.height = height.toString() + "px";
    canvas.width = width;
    canvas.height = height;

    document.body.appendChild(canvas);
    return {
        canvas: canvas,
        title: title,
    };
};

// Provides: caml_glfwMakeContextCurrent
function caml_glfwMakeContextCurrent(win) {
    var context = win.canvas.getContext('webgl');
    window.__glfw__gl__ = context;

    joo_global_object.gl = context;

    console.log("set context to: " + win.title)
}

// Provides: caml_glClearColor
function caml_glClearColor(r, g, b, a) {
    joo_global_object.gl.clearColor(r, g, b, a);
    joo_global_object.gl.clear(joo_global_object.gl.COLOR_BUFFER_BIT);
}

// Provides: caml_glClearDepth
function caml_glClearDepth(d) {
    joo_global_object.gl.clearDepth(d);
    joo_global_object.gl.clear(joo_global_object.gl.DEPTH_BUFFER_BIT);
}

// Provides: caml_glfwWindowShouldClose
var i = 0;
function caml_glfwWindowShouldClose() {
    i++
    if (i > 1) {
        return true
    } else {
        return false
    }
}

// Provides: caml_glAttachShader
function caml_glAttachShader(program, shader) {
    joo_global_object.gl.attachShader(program, shader);
}

// Provides: caml_glBindBuffer
function caml_glBindBuffer(target, buffer) {
    // TODO: target param
    joo_global_object.gl.bindBuffer(joo_global_object.gl.ARRAY_BUFFER, buffer)
}

// Provides: caml_glBufferData
function caml_glBufferData(target, data, usage) {
    // TODO: Remove size
    joo_global_object.gl.bufferData(joo_global_object.gl.ARRAY_BUFFER, data.data,  joo_global_object.gl.STATIC_DRAW)
}

// Provides: caml_glCompileShader
function caml_glCompileShader(shader) {
    joo_global_object.gl.compileShader(shader);
}

// Provides: caml_glCreateBuffer
function caml_glCreateBuffer() {
    return joo_global_object.gl.createBuffer();
}

// Provides: caml_glCreateProgram
function caml_glCreateProgram() {
    return joo_global_object.gl.createProgram();
}

// Provides: caml_glCreateShader
function caml_glCreateShader(type) {
    console.log("create shader: " + type);
    var glType;
    switch (type) {
        case 0:
            glType = joo_global_object.gl.VERTEX_SHADER;
            break;
        case 1:
            glType = joo_global_object.gl.FRAGMENT_SHADER;
            break;
        default:
            throw "Unrecognized shader type";
    }
    return joo_global_object.gl.createShader(glType);
}

// Provides: caml_glDepthFunc
function caml_glDepthFunc(df) {
    // TODO: Use df parameter
    joo_global_object.gl.depthFunc(joo_global_object.gl.LEQUAL);
}

// Provides: caml_glDrawArrays
function caml_glDrawArrays(drawMode, first, count) {
    // TODO: Use params
    joo_global_object.gl.drawArrays(joo_global_object.gl.TRIANGLES, 0, 3);
}

// Provides: caml_glEnable
function caml_glEnable(option) {
    // TODO: Use params
    joo_global_object.gl.enable(joo_global_object.gl.DEPTH_TEST)
}

// Provides: caml_glGetShaderIsCompiled
function caml_glGetShaderIsCompiled() {
    // TODO: Refactor this
    return true;
}

// Provides: caml_stb_image_load
function caml_stb_image_load() {
    return null;
}

// Provides: caml_stb_image_debug_print
function caml_stb_image_debug_print() {
    return null;
}

// Provides: caml_glLinkProgram
function caml_glLinkProgram(program) {
    joo_global_object.gl.linkProgram(program);
}

// Provides: caml_glGetAttribLocation
function caml_glGetAttribLocation(program, attribName) {
    return joo_global_object.gl.getAttribLocation(program, attribName)
}

// Provides: caml_glGetUniformLocation
function caml_glGetUniformLocation(program, uniformName) {
    return joo_global_object.gl.getUniformLocation(program, uniformName)
}

// Provides: caml_glUniformMatrix4fv
function caml_glUniformMatrix4fv(uniformLocation, uniformValue) {
    console.log("TODO: Remove hardcoding caml_glUniformMatrix4fv")
    return joo_global_object.gl.uniformMatrix4fv(uniformLocation, false, new Float32Array([2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
}

// Provides: caml_glShaderSource
function caml_glShaderSource(shader, src) {
    joo_global_object.gl.shaderSource(shader, src);
}

// Provides: caml_glUseProgram
function caml_glUseProgram(program) {
    joo_global_object.gl.useProgram(program);
}

// Provides: caml_glVertexAttribPointer
function caml_glVertexAttribPointer(attributeLocation, numComponents) {
    // TODO: PARAMS!
    joo_global_object.gl.vertexAttribPointer(attributeLocation, numComponents, joo_global_object.gl.FLOAT, false, 0, 0);
}

// Provides: caml_glEnableVertexAttribArray
function caml_glEnableVertexAttribArray(attributeLocation) {
    joo_global_object.gl.enableVertexAttribArray(attributeLocation);
}

// Provides: caml_glfwPollEvents
function caml_glfwPollEvents() {
    // no op
}

// Provides: caml_glfwSwapBuffers
function caml_glfwSwapBuffers() {
    // no op
}

// Provides: caml_glfwTerminate
function caml_glfwTerminate() {
    // no op
}
