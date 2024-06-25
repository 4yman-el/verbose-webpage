print(`Screen: ${screen.width}x${screen.height} ${screen.orientation.type} ${screen.pixelDepth} bit`);

screen.orientation.addEventListener("change", (event) => {
    const type = event.target.type;
    print(`Screen ${type}`);
});
