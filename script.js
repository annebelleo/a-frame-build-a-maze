function appendSphere() {
    // creating a new sphere
    for (var i = 0; i < 50; i++) {
        var size=Math.random()
        var positionX = Math.floor(Math.random() * 5);
        var positionY = Math.floor(Math.random() * 5);
        var positionZ = Math.floor(Math.random() * -5);
        var newSphere = document.createElement("a-sphere");
        newSphere.setAttribute("color", "black");
        newSphere.setAttribute("radius", `${size}`);
        newSphere.setAttribute("position", `${positionX} ${positionY} ${positionZ}`);
        document.getElementById("scene").appendChild(newSphere);
    }
}
