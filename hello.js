const importObject = {
    env: {
        print: console.log,
    },
};

async function fetchAndInstantiate() {
    const response = await fetch('./hello.wasm');
    const buffer = await response.arrayBuffer();
    const obj = await WebAssembly.instantiate(buffer, importObject);
    const sum = obj.instance.exports.sum;
    // Adds and prints.
    sum(1, 3);
    // Adds and prints twice.
    console.log("#2: " + sum(3, 9));
}

fetchAndInstantiate();