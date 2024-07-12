// This file is generated AUTOMATICALLY

if (navigator.getBattery){
    navigator.getBattery().then((battery) => {
        print(`Battery: ${battery.level*100}% ${battery.charging ? "charging" : "not charging"}`)
    });
} else {
    print("Battery unavailable");
}
navigator.permissions.query({name: "bluetooth"}).then((result)=>{
    print(`Bluetooth is ${result}`);
}, ()=>{
    print("Bluetooth unavailable");
});
if(navigator.doNotTrack == 1) {
    print("Do Not Track enabled");
}
navigator.geolocation.getCurrentPosition((pos) => {
    print(`Geolocaion: (${pos.coords.latitude}, ${pos.coords.longitude}`);
}, (err)=>{
	if (err.PERMISSION_DENIED) {
        print("Geolocation is denied");
    } else {
        print(`Geolocation error`);
    }
});
if (history.length > 1){
    print(`History: ${history.length} entries`);
}
print(`Main language: ${navigator.language}`);
print(`Other languages: ${navigator.languages.join(", ")}.`);
Notification.requestPermission().then(result => {
    print(`Notifications are ${result}`)
});
if (document.referrer){
	print(`Referrer: ${document.referrer}`);
} else {
	print("Referrer unavailable");
}
print(`Screen: ${screen.width}x${screen.height} ${screen.orientation.type} ${screen.pixelDepth} bit`);

screen.orientation.addEventListener("change", () => {
    print(`Screen: ${screen.orientation.type}`);
});
let isFirefox = 0, isWebkit = 0;
let isIE = !!window.document.documentMode || /*@cc_on!@*/false;
let isSafari = !!window.safari || /Constructor/.test(window.HTMLElement);

function assertFirefox (assert){
	if (assert) isFirefox++;
}

function assertWebkit (assert){
	if (assert) isWebkit++;
}
assertFirefox(CSS.supports("-moz-user-focus", "normal"));
assertFirefox(CSS.supports("-moz-box-sizing", "content-box"));
assertWebkit(CSS.supports("-webkit-border-vertical-spacing", 0));
assertFirefox(Math.hypot(-24.42, -50.519999999999925) === 56.11244781686139);
assertWebkit(Math.hypot(-24.42, -50.519999999999925) === 56.1124478168614);
assertFirefox(window.mozInnerScreenX !== undefined);
assertWebkit(window.webkitCancelAnimationFrame !== undefined);
assertWebkit(window.PERSISTENT !== undefined);
assertWebkit(window.chrome !== undefined);
if (isIE) {
	print("Browser: IE detected");
} else if (isFirefox > isWebkit) {
	print("Browser: Firefox detected");
} else if (isWebkit > isFirefox) {
	if (isSafari) {
		print("Browser: Safari detected");
	} else {
		print("Browser: Chromium detected");
	}
} else {
	print("Browser: Unknown");
}
if (typeof(window.ActiveXObject) != "undefined") {
    print("ActiveX enabled");
}
if (navigator.javaEnabled && navigator.javaEnabled()){
    print("Java enabled");
}
