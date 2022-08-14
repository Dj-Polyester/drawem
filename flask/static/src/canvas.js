var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var cellWidth = 10;
var cellHeight = 10;
canvas.width = 1000;
canvas.height = 1000;

//https://stackoverflow.com/a/17130415/10713877
function getMousePosOnCanvas(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function getCellPosOnCanvas(canvas, event) {
    const pos = getMousePosOnCanvas(canvas, event);
    return {
        x: Math.floor(pos.x / cellWidth),
        y: Math.floor(pos.y / cellHeight),
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
    ctx.strokeStyle = "#cccccc";
    ctx.stroke();
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}