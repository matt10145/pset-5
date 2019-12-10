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

    do {
        var input = prompt("Message: ");
        if (input.length > 50) {
            alert("Your message is too long. Keep it under 50 characters.");
        }
    } while (input.length > 50);
    context.font = ("48px sans-serif");
    context.strokeText(input, 30, 70, 994);
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
        var width = Number(prompt("Width: "));
        var height = Number(prompt("Height: "));
        var x = Number(prompt("X: "));
        var y = Number(prompt("Y: "));

        if (width == 0 && height == 0 && x == 0 && y == 0) {
            terminate = true;
        } else if (width < 1 || width > canvas.width) {
            alert("Your width must be between 1 and 1024.");
            terminate = false;
        } else if (height < 1 || height > canvas.height) {
            alert("Your height must be between 1 and 512.");
            terminate = false;
        } else if (x < 1 || x > canvas.width) {
            alert("Your x-coordinate must be between 1 and 1024.");
            terminate = false;
        } else if (y < 1 || y > canvas.height) {
            alert("Your y-coordinate must be between 1 and 512.");
            terminate = false;
        } else if (((x + width) > canvas.width) || ((y + height) > canvas.height)) {
            alert("Your rectangle won't fit on the canvas.");
            terminate = false;
        } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
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
        color = color.toLowerCase();

        if (color === 0) {
            terminate = true;
        } else if (color !== "black" && color !== "blue" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow") {
            alert(`${color} is not a supported color.`);
            context.clearRect(0, 0, canvas.width, canvas.height);
            terminate = false;
        } else {
            terminate = true;
        }
    } while (terminate == false);

    context.fillStyle = color;
    context.fillRect(10, 10, 100, 50);
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

        console.log(height);
        console.log(hypotenuse);
        console.log(base);

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

    const SIZE_UPPER_THRESHOLD = 100.4;
    let side;
    let terminate;
    do {
        side = Number(prompt("Side: "));

        if (side == 0) {
            terminate = true;
        } else if (isNaN(side)) {
            alert("Your block size is not a number.");
            terminate = false;
        } else if (side < 1) {
            alert("Your block size must be at least 1.");
            terminate = false;
        } else if (side > SIZE_UPPER_THRESHOLD) {
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
    context.lineTo(10 + (side * 5), 502);
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
        context.moveTo(10 + (side * (5 - i)), 502);
        context.lineTo(10 + (side * (5 - i)), (502 - side));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.moveTo(10, (502 - side));
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (side * 0.5), (502 - side));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (side * (0.5 + 4)), (502 - side));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (side * 5), (502 - side));
    context.stroke();
    context.moveTo(10 + (side * 4.5), (502 - side));
    context.closePath();

    for (let i = 0; i <= 4; i++) {
        if (i > 0 && i < 4) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (side * (4.5 - i)), (502 - side));
        context.lineTo(10 + (side * (4.5 - i)), (502 - (side * 2)));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.moveTo(10 + (side * 0.5), (502 - (side * 2)));
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + side, (502 - (side * 2)));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (side * 4), (502 - (side * 2)));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (side * 4.5), (502 - (side * 2)));
    context.stroke();
    context.moveTo(10 + (side * 4), (502 - (side * 2)));
    context.closePath();

    for (let i = 0; i <= 3; i++) {
        if (i > 0 && i < 3) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (side * (4 - i)), (502 - (side * 2)));
        context.lineTo(10 + (side * (4 - i)), (502 - (side * 3)));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.strokeStyle = "#4d4d4d";
    context.moveTo(10 + side, (502 - (side * 3)));
    context.lineTo(10 + (side * 1.5), (502 - (side * 3)));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (side * 3.5), (502 - (side * 3)));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (side * 4), (502 - (side * 3)));
    context.stroke();
    context.moveTo(10 + (side * 3.5), (502 - (side * 3)));
    context.closePath();

    for (let i = 0; i <= 2; i++) {
        if (i == 1) {
            context.strokeStyle = "#000000";
        }
        else {
            context.strokeStyle = "#4d4d4d";
        }
        context.beginPath();
        context.moveTo(10 + (side * (3.5 - i)), (502 - (side * 3)));
        context.lineTo(10 + (side * (3.5 - i)), (502 - (side * 4)));
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.strokeStyle = "#4d4d4d";
    context.moveTo(10 + (side * 1.5), (502 - (side * 4)));
    context.lineTo(10 + (side * 2), (502 - (side * 4)));
    context.stroke();
    context.strokeStyle = "#000000";
    context.lineTo(10 + (side * 3), (502 - (side * 4)));
    context.stroke();
    context.strokeStyle = "#4d4d4d";
    context.lineTo(10 + (side * 3.5), (502 - (side * 4)));
    context.stroke();
    context.moveTo(10 + (side * 3), (502 - (side * 4)));
    context.lineTo(10 + (side * 3), (502 - (side * 5)));
    context.stroke();
    context.moveTo(10 + (side * 2), (502 - (side * 4)));
    context.lineTo(10 + (side * 2), (502 - (side * 5)));
    context.stroke();
    context.moveTo(10 + (side * 2), (502 - (side * 5)));
    context.lineTo(10 + (side * 3), (502 - (side * 5)));
    context.stroke();
    context.closePath();
};
