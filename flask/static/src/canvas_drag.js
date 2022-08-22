//https://codepen.io/kosarh79/pen/wqXGdE

var topPanelInputs = document.getElementsByClassName("coo-input");

var offset = [0, 0];
var isDownOnCanvas = false;

var canvasPos = {
    x: canvas.offsetLeft,
    y: canvas.offsetTop,
}

function centerCanvas() {
    const { x, y } =
        getCellPosAsPixels({
            x: topPanelInputs[0].value,
            y: topPanelInputs[1].value
        })
    canvasPos.x = document.body.clientWidth / 2 - x + "px";
    canvasPos.y = document.body.clientHeight / 2 - y + "px";

    canvas.style.left = canvasPos.x;
    canvas.style.top = canvasPos.y;
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