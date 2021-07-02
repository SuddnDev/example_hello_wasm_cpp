# README

**Note:** Tested on Windows 10. Steps will probably be similar on other OSs.

## Steps

1. Install Emscripten and compile hello.cpp to hello.wasm using the following command:

        em++ hello.cpp -Os -s WASM=1 -s SIDE_MODULE=1 -o hello.wasm

2. Run index.html with a web server, e.g. Live Server plugin for Visual Studio Code.

3. If using Chrome, hit CTRL+SHIFT+J to view console output.

4. Outputs should be:

        4
        12
        #2: 12

## Resources

- https://emscripten.org/
- https://community.chocolatey.org/packages/emscripten
- https://webassembly.studio/
- https://ihsavru.medium.com/calling-javascript-code-from-c-c-using-webassembly-a9445c11bc6d
- https://stackoverflow.com/questions/52239924/webassembly-instantiatestreaming-wrong-mime-type