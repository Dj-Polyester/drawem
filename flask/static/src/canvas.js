var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
const PIXEL_SIZE = 10
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
        x: Math.floor(pos.x / PIXEL_SIZE),
        y: Math.floor(pos.y / PIXEL_SIZE),
    };
}


