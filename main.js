async function runPyodideScript() {
    // Load Pyodide
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");

    //await micropip.install('pyinstaller');

    // Run Python code
    var name = prompt("What is your name?");
    let pythonCode = `
        name1 = str("${name}")
        print("Hello, World, it's me, Pyodide! You are " + name1)

    `; /*                PyInstaller.__main__.run([
            'my_script.py',
            '--onefile',
            '--windowed'
        ])*/ //USE WEBSOCKETS TO COMMUNICATE FROM PY TO TAB, ALSO MOVE PY CODE TO SEPERATE FILE AND HAVE JS LOAD FROM THERE.

    try {
        let result = pyodide.runPython(pythonCode);
        console.log(result);
    } catch (error) {
        console.error('Error executing Python code:', error);
    }
}

// Call the function to run Pyodide script
runPyodideScript();