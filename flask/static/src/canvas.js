var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var cellWidth = 10;
var cellHeight = 10;
var currentColor = undefined;
var cellpos = undefined;
canvas.width = 1000;
canvas.height = 1000;
var drawing = {};
var rgbString2hex = (rgbString) => "#" + rgbString.slice(4, rgbString.length - 1).split(",").map(x => parseInt(x).toString(16)).join("");
const canvasBackColor = rgbString2hex(window.getComputedStyle(canvas, null).backgroundColor);
const canvasBackColorRgb = hex2rgb(canvasBackColor);
const cellFillStyleRgb = hex2rgb(CELL_FILL_STYLE);

var clamp = (num, min, max) => (num < min) ? min : ((num > max) ? max : num);
var clampRGB = (num) => clamp(num, 0, 255);

function rgbString2rgb(rgbString) {
    const rgbArr = rgbString.slice(4, rgbString.length - 1).split(",").map(x => parseInt(x));
    return {
        r: rgbArr[0],
        g: rgbArr[1],
        b: rgbArr[2],
    };
}
function hslString2hsl(hslString) {
    const hslArr = hslString.slice(4, hslString.length - 1).split(",").map(x => parseInt(x));
    return {
        h: hslArr[0],
        s: hslArr[1],
        l: hslArr[2],
    };
}

function hex2rgb(hex) {
    return {
        r: parseInt("0x" + hex.slice(1, 3)),
        g: parseInt("0x" + hex.slice(3, 5)),
        b: parseInt("0x" + hex.slice(5, 7)),
    }
}
function rgb2hex(rgb) {
    var r = rgb.r.toString(16);
    var g = rgb.g.toString(16);
    var b = rgb.b.toString(16);
    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    return "#" + r + g + b;
}

//COLOR ARITHMETICS
function add(rgb1, rgb2) {
    return {
        r: rgb1.r + rgb2.r,
        g: rgb1.g + rgb2.g,
        b: rgb1.b + rgb2.b,
    };
}

function subtract(rgb1, rgb2) {
    return {
        r: rgb1.r - rgb2.r,
        g: rgb1.g - rgb2.g,
        b: rgb1.b - rgb2.b,
    };
}

function str2coo(str) {
    const arr = str.split(",").map((val) => 0 | val);
    return {
        x: arr[0],
        y: arr[1],
    };
}

function getDrawingColor(cellpos) {
    return drawing[`${cellpos.x},${cellpos.y}`];
}
function setDrawingColor(cellpos, color) {
    drawing[`${cellpos.x},${cellpos.y}`] = color.hexString;
}

function getMousePos(event) {
    return {
        x: event.clientX,
        y: event.clientY,
    };
}

//https://stackoverflow.com/a/17130415/10713877
function getMousePosOnCanvas(event) {
    var rect = canvas.getBoundingClientRect();
    const pos = getMousePos(event);
    return {
        x: pos.x - rect.left,
        y: pos.y - rect.top,
    };
}

function getCellPosOnCanvas(pos) {
    return {
        x: Math.floor(pos.x / cellWidth),
        y: Math.floor(pos.y / cellHeight),
    };
}

function getCellPosAsPixels(pos) {
    return {
        x: pos.x * cellWidth + cellWidth / 2,
        y: pos.y * cellHeight + cellHeight / 2,
    };
}

function addGridOnCanvas() {
    for (let index = 0; index <= canvas.width; index += cellWidth) {
        ctx.moveTo(index, 0);
        ctx.lineTo(index, canvas.height);
    }
    for (let index = 0; index <= canvas.height; index += cellHeight) {
        ctx.moveTo(0, index);
        ctx.lineTo(canvas.width, index);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = GRID_STROKE_STYLE;
    ctx.stroke();
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}