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
    print(`Geolocaion (${pos.coords.latitude}, ${pos.coords.longitude}`);
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
if (typeof(window.ActiveXObject) != "undefined") {
    print("ActiveX enabled");
}
if (navigator.javaEnabled && navigator.javaEnabled()){
    print("Java enabled");
}
