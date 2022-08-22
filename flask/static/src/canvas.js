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

var colorString2arr = (rgbString) => rgbString.slice(4, rgbString.length - 1).split(",").map(x => parseInt(x));

var rgb2rgbString = (rgb) => `rgb(${rgb.join(",")})`;
var hsl2hslString = (hsl) => `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`;

function hex2rgb(hex) {
    const rgb = new Array((hex.length - 1) / 2).fill(0);
    for (let i = 1; i < hex.length; i += 2) {
        rgb[(i - 1) / 2] = parseInt("0x" + hex.slice(i, i + 2));
    }
    return rgb;
}
var rgb2hex = (rgb) => "#" + rgb.map(
    function (elem) {
        const tmp = elem.toString(16);
        return (tmp.length === 1) ? "0" + tmp : tmp;
    }).join("");

//COLOR ARITHMETICS
function add(rgb1, rgb2) {
    return [
        rgb1[0] + rgb2[0],
        rgb1[1] + rgb2[1],
        rgb1[2] + rgb2[2],
    ];
}
function subtract(rgb1, rgb2) {
    return [
        rgb1[0] - rgb2[0],
        rgb1[1] - rgb2[1],
        rgb1[2] - rgb2[2],
    ];
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