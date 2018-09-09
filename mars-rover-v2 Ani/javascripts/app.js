// Rover Object Goes Here
// ======================
var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

var grid = [];

// ======================
function turnLeft() {
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
        break;
        case "W":
            rover.direction = "S";
        break;
        case "S":
            rover.direction = "E";
        break;
        case "E":
            rover.direction = "N";
        break;
    }

}

function turnRight() {
    console.log("turnRight was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
        break;
        case "E":
            rover.direction = "S";
        break;
        case "S":
            rover.direction = "W";
        break;
        case "W":
            rover.direction = "N";
        break;
    }
}

function moveForward() {
    console.log("moveForward was called");
    if (rover.direction === "N" && rover.y > 0) {
        rover.y -= 1;
    }
    if (rover.direction === "S" && rover.y < 9) {
        rover.y += 1;
    }
    if (rover.direction === "E" && rover.x < 9) {
        rover.x += 1;
    }
    if (rover.direction === "W" && rover.x > 0) {
        rover.x -= 1;
    }
}

function moveBackward() {
    console.log("moveBackward was called");
    if (rover.direction === "N" && rover.y < 9) {
        rover.y += 1;
    }
    if (rover.direction === "S" && rover.y > 0) {
        rover.y -= 1;
    }
    if (rover.direction === "W" && rover.x < 9) {
        rover.x += 1;
    }
    if (rover.direction === "E" && rover.x > 0) {
        rover.x -= 1;
    }
}


function moveTo(commands = "rffrfflfrffjaasbb") {

    var command;
    console.log("Commands: " + commands);
    for (i = 0; i < commands.length; i++) {
        command = commands[i];
        switch (command) {
            case "r":
                trackPosition(command);
                turnRight();
            break;
            case "l":
                trackPosition(command);
                turnLeft();
            break;
            case "f":
                trackPosition(command);
                moveForward();
            break;
            case "b":
                trackPosition(command);
                moveBackward();
            break;
            default:
               console.log("Command " +  command + " not valid. Skipping");
        }
    }
    console.log(rover);
}

function trackPosition(command) {
    rover.travelLog.push([rover.x, rover.y]);
}

