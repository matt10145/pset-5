window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

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
        
        if (width < 1 || width > canvas.width) {
            alert("Your width must be between 1 and 1024.");
            terminate = false;
        }
        else if (height < 1 || height > canvas.height) {
            alert("Your height must be between 1 and 512.");
            terminate = false;
        }
        else if (x < 1 || x > canvas.width) {
            alert("Your x-coordinate must be between 1 and 1024.");
            terminate = false;
        }
        else if (y < 1 || y > canvas.height) {
            alert("Your y-coordinate must be between 1 and 512.");
            terminate = false;
        }
        else if (((x + width) > canvas.width) || ((y + height) > canvas.height)) {
            alert("Your rectangle won't fit on the canvas.");
            terminate = false;
        }
        else if (width == null || height == null || x == null || y == null) {
            terminate = true;
        }

    } while (terminate == false);

    context.strokeRect(x, y, width, height);

    // this loop does not end
}

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
