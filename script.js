function appendImage() {    // creating a new sphere
        // var positionX = Math.floor(Math.random() * 6);
        // var positionY = Math.floor(Math.random() * 6);
        // var positionZ = Math.floor(Math.random() * -6);
        var position = choosePoint();
        var frankBall = document.createElement("a-sphere");
        frankBall.setAttribute("src", "#frank");
        frankBall.setAttribute("position", position);
        // frankBall.setAttribute("display", "true");
        frankBall.addEventListener("click", function(){
            this.setAttribute("visible", false)
            var winMessage = document.createElement("a-text");
            winMessage.setAttribute("value", "YOU WIN!");
            winMessage.setAttribute("position", this.getAttribute("position"));
            document.getElementById("scene").appendChild(winMessage);
        })
        document.getElementById("scene").appendChild(frankBall);
        
}

function choosePoint(){
    var index = Math.floor(Math.random() * (points.length));
    return points[index];
}

//create text that displays winning message
//set text to be over frankBall's position in giant font
// function win(position) {
//     console.log("hey");
    
//     // element.setAttribute("display", "false");
    
// }

//create timer that displays under winning message in format "time: [time]"

var points = ["0 2 -7", "0 2 7", "7 2 0", "-7 2 0"];