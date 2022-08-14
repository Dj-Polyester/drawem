//https://codepen.io/kosarh79/pen/wqXGdE
var offset = [0, 0];
var isDownOnCanvas = false;
canvas.addEventListener('mousedown', function (e) {
    isDownOnCanvas = true;
    offset = [
        canvas.offsetLeft - e.clientX,
        canvas.offsetTop - e.clientY
    ];
}, true);
document.addEventListener('mouseup', function () {
    isDownOnCanvas = false;
}, true);

document.addEventListener('mousemove', function (e) {
    e.preventDefault();
    if (isDownOnCanvas) {
        canvas.style.left = (e.clientX + offset[0]) + 'px';
        canvas.style.top = (e.clientY + offset[1]) + 'px';
    }
}, true);