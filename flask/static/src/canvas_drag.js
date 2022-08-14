//https://codepen.io/kosarh79/pen/wqXGdE
var offset = [0, 0];
var isDownOnCanvas = false;

var canvasPos = {
    x: canvas.offsetLeft,
    y: canvas.offsetTop,
}

function moveCanvasTo(pos) {
    canvas.style.left = (pos.x + offset[0]) + 'px';
    canvas.style.top = (pos.y + offset[1]) + 'px';
    return {
        x: canvas.offsetLeft,
        y: canvas.offsetTop,
    };
}

canvas.addEventListener('mousedown', function (event) {
    isDownOnCanvas = true;
    offset = [
        canvasPos.x - event.clientX,
        canvasPos.y - event.clientY
    ];
}, true);
document.addEventListener('mouseup', function () {
    isDownOnCanvas = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDownOnCanvas) {
        canvasPos = moveCanvasTo({ x: event.clientX, y: event.clientY });
    }
}, true);