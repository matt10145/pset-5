window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    const canvas = document.getElementById('student-canvas-1');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    let terminate;
    do {
        var input = prompt("Message: ");
        if (input == null) {
            terminate = true;
        }
        else if (input.length > 50) {
            alert("Your message is too long. Keep it under 50 characters.");
            terminate = false;
        }
        else {
            terminate = true;
        }
    } while (terminate == false);

    if (input != null) {
        context.font = ("48px sans-serif");
        context.strokeText(input, 30, 70, 994);
    }
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    const canvas = document.getElementById('student-canvas-2');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    let terminate;
    do {
        var width = prompt("Width: ");
        var height = prompt("Height: ");
        var x = prompt("X: ");
        var y = prompt("Y: ");

        var widthNum = Number(width);
        var heightNum = Number(height);
        var xNum = Number(x);
        var yNum = Number(y);

        if (width == null && height == null && x == null && y == null) {
            terminate = true;
        } else if (widthNum < 1 || widthNum > canvas.width) {
            alert("Your width must be between 1 and 1024.");
            terminate = false;
        } else if (heightNum < 1 || heightNum > canvas.height) {
            alert("Your height must be between 1 and 512.");
            terminate = false;
        } else if (xNum < 1 || xNum > canvas.width) {
            alert("Your x-coordinate must be between 1 and 1024.");
            terminate = false;
        } else if (yNum < 1 || yNum > canvas.height) {
            alert("Your y-coordinate must be between 1 and 512.");
            terminate = false;
        } else if (((xNum + widthNum) > canvas.width) || ((yNum + heightNum) > canvas.height)) {
            alert("Your rectangle won't fit on the canvas.");
            terminate = false;
        } else if (isNaN(widthNum) || isNaN(heightNum) || isNaN(xNum) || isNaN(yNum)) {
            alert("One of your values is not a number.");
            terminate = false;
        } else {
            terminate = true;
        }
    } while (terminate == false);

    context.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    const canvas = document.getElementById('student-canvas-3');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    let terminate;
    do {
        var color = prompt("Color: ");
        if (color == null) {
            terminate = true;
            break;
        } else {
            color = color.toLowerCase();
            terminate = false;
        }

        if (color !== "black" && color !== "blue" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow") {
            alert(`${color} is not a supported color.`);
            context.clearRect(0, 0, canvas.width, canvas.height);
            terminate = false;
        } else {
            terminate = true;
        }
    } while (terminate == false);

    if (color !== null) {
        context.fillStyle = color;
        context.fillRect(10, 10, 100, 50);
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    const canvas = document.getElementById('student-canvas-4');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const HYPOTENUSE_THRESHOLD = 1131;
    let terminate;
    do {
        var side1 = prompt("Side 1: ");
        var side2 = prompt("Side 2: ");
        var side3 = prompt("Side 3: ");

        var side1_num = Number(side1);
        var side2_num = Number(side2);
        var side3_num = Number(side3);
        var sum = side1_num + side2_num + side3_num;

        var height = Math.min(side1_num, side2_num, side3_num);
        var hypotenuse = Math.max(side1_num, side2_num, side3_num);
        var base = sum - (height + hypotenuse);

        if (side1 == null|| side2 == null || side3 == null) {
            terminate = true;
        } else if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            alert("One of your sides is not a number.");
            terminate = false;
        } else if ((Math.hypot(height, base)) != hypotenuse) {
            alert("That's not a valid right triangle.");
            terminate = false;
        } else if (height > canvas.height || height < 0) {
            alert("Your triangle won't fit on the canvas.");
            terminate = false;
        } else if (base > canvas.width || base < 0) {
            alert("Your triangle won't fit on the canvas.");
            terminate = false;
        } else if (hypotenuse > HYPOTENUSE_THRESHOLD || hypotenuse < 0) {
            alert("Your triangle won't fit on the canvas.");
            terminate = false;
        } else {
            terminate = true;
        }
    } while (terminate == false);

    if (Math.hypot(height, base) == hypotenuse) {
        context.beginPath();
        context.moveTo(25, 25);
        context.lineTo(25, (25 + height));
        context.lineTo((25 + base), (25 + height));
        context.closePath();
        context.stroke();
    }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    const canvas = document.getElementById('student-canvas-5');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const PI = Math.PI;
    let centerEye;
    let terminate;
    do {
        var radius = prompt("Radius: ");
        radius1 = Number(radius);

        if (radius == null) {
            terminate = true;
        } else if (isNaN(radius)) {
            alert("Your radius is not a number.");
            terminate = false;
        } else if (radius1 > 256) {
            alert("Your smiley face won't fit on the canvas.");
            terminate = false;
        } else if (radius1 < 32) {
            alert("Your radius must be at least 32.");
            terminate = false;
        } else {
            terminate = true;
        }
    } while (terminate == false);

    radiusEye = radius1 * 0.15;
    radiusMouth = radius1 * 0.70;
    centerEye = radius1 * 0.40;

    if (radius1 !== 0) {
        context.beginPath();
        context.arc(512, 256, radius1, 0, (2*PI));
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc((512 - centerEye), (256 - centerEye), radiusEye, 0, (2*PI));
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc((512 + centerEye), (256 - centerEye), radiusEye, 0, (2*PI));
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(512, 256, radiusMouth, 0, PI);
        context.stroke();
        context.closePath();
    }
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    const canvas = document.getElementById('student-canvas-6');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const SIZE_UPPER_THRESHOLD = 100.4; // in pixels
    let side;
    let terminate;
    do {
        side = prompt("Side: ");
        var sideNum = Number(side);

        if (side == null) {
            terminate = true;
        } else if (isNaN(sideNum)) {
            alert("Your block size is not a number.");
            terminate = false;
        } else if (sideNum < 1) {
            alert("Your block size must be at least 1.");
            terminate = false;
        } else if (sideNum > SIZE_UPPER_THRESHOLD) {
            alert("Your pyramid won't fit on the canvas.");
            terminate = false;
        } else {
            terminate = true;
        }
    } while (terminate == false);

    /**
     * bottom left origin is 10, 502
     * height upper threshold is 502/5 = 100.4
     *
     * bash out squares:
     * draw base line and then draw upwards at intervals of the side length
     * connect the two points
     * rinse, repeat
     * (for loop for the upward lines)
     *
     * apply #4d4d4d as needed
     *
     */

    context.beginPath();
    context.strokeStyle = "#4d4d4d";
    context.moveTo(10, 502);
    context.lineTo(10 + (sideNum * 5), 502);
    context.stroke();
    context.closePath();

    for (let i = 0; i <= 5; i++) {
        if (i > 0 && i < 5) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (sideNum * (5 - i)), 502);
        context.lineTo(10 + (sideNum * (5 - i)), (502 - sideNum));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.moveTo(10, (502 - sideNum));
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (sideNum * 0.5), (502 - sideNum));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (sideNum * (0.5 + 4)), (502 - sideNum));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (sideNum * 5), (502 - sideNum));
    context.stroke();
    context.moveTo(10 + (sideNum * 4.5), (502 - sideNum));
    context.closePath();

    for (let i = 0; i <= 4; i++) {
        if (i > 0 && i < 4) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (sideNum * (4.5 - i)), (502 - sideNum));
        context.lineTo(10 + (sideNum * (4.5 - i)), (502 - (sideNum * 2)));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.moveTo(10 + (sideNum * 0.5), (502 - (sideNum * 2)));
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + sideNum, (502 - (sideNum * 2)));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (sideNum * 4), (502 - (sideNum * 2)));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (sideNum * 4.5), (502 - (sideNum * 2)));
    context.stroke();
    context.moveTo(10 + (sideNum * 4), (502 - (sideNum * 2)));
    context.closePath();

    for (let i = 0; i <= 3; i++) {
        if (i > 0 && i < 3) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (sideNum * (4 - i)), (502 - (sideNum * 2)));
        context.lineTo(10 + (sideNum * (4 - i)), (502 - (sideNum * 3)));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.strokeStyle = "#4d4d4d";
    context.moveTo(10 + sideNum, (502 - (sideNum * 3)));
    context.lineTo(10 + (sideNum * 1.5), (502 - (sideNum * 3)));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (sideNum * 3.5), (502 - (sideNum * 3)));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (sideNum * 4), (502 - (sideNum * 3)));
    context.stroke();
    context.moveTo(10 + (sideNum * 3.5), (502 - (sideNum * 3)));
    context.closePath();

    for (let i = 0; i <= 2; i++) {
        if (i == 1) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (sideNum * (3.5 - i)), (502 - (sideNum * 3)));
        context.lineTo(10 + (sideNum * (3.5 - i)), (502 - (sideNum * 4)));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.strokeStyle = "#4d4d4d";
    context.moveTo(10 + (sideNum * 1.5), (502 - (sideNum * 4)));
    context.lineTo(10 + (sideNum * 2), (502 - (sideNum * 4)));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (sideNum * 3), (502 - (sideNum * 4)));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (sideNum * 3.5), (502 - (sideNum * 4)));
    context.stroke();
    context.moveTo(10 + (sideNum * 3), (502 - (sideNum * 4)));
    context.lineTo(10 + (sideNum * 3), (502 - (sideNum * 5)));
    context.stroke();
    context.moveTo(10 + (sideNum * 2), (502 - (sideNum * 4)));
    context.lineTo(10 + (sideNum * 2), (502 - (sideNum * 5)));
    context.stroke();
    context.moveTo(10 + (sideNum * 2), (502 - (sideNum * 5)));
    context.lineTo(10 + (sideNum * 3), (502 - (sideNum * 5)));
    context.stroke();
    context.closePath();
};
