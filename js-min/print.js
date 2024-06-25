const print = function (text){
    const logs = document.getElementById("logs");
    const textNode = document.createTextNode("[LOG] " + text);
    const br = document.createElement("br");

    logs.appendChild(textNode);
    logs.appendChild(br);
}
