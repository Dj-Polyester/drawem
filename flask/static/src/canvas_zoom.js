//https://codepen.io/kosarh79/pen/wqXGdE
const ZOOM_CONSTANT = .1;//[0,1]
const ZOOM_MOVE_MULTIPLER = 20;
function moveCanvasBy(oldpos, delta) {

    const newpos = {
        x: oldpos.x + delta.x,
        y: oldpos.y + delta.y,
    }

    canvas.style.left = newpos.x + 'px';
    canvas.style.top = newpos.y + 'px';

    return newpos;
}

document.body.addEventListener('wheel', function (event) {

    const pm = Math.sign(event.deltaY);
    clearCanvas();

    canvas.width -= pm * canvas.width * ZOOM_CONSTANT;
    canvas.height -= pm * canvas.height * ZOOM_CONSTANT;
    cellWidth -= pm * cellWidth * ZOOM_CONSTANT;
    cellHeight -= pm * cellHeight * ZOOM_CONSTANT;

    addGridOnCanvas();

    delta = {
        x: pm * (event.clientX - document.body.clientWidth / 2),
        y: pm * (event.clientY - document.body.clientHeight / 2),
    }

    deltaNormal = Math.sqrt(delta.x * delta.x + delta.y * delta.y);
    delta.x /= deltaNormal;
    delta.y /= deltaNormal;
    delta.x *= ZOOM_MOVE_MULTIPLER;
    delta.y *= ZOOM_MOVE_MULTIPLER;

    console.log(delta);

    canvasPos = moveCanvasBy(canvasPos, delta);
}, true);