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

function scaleCanvas(pm) {
    clearCanvas();
    canvasMoveX = pm * canvas.width * ZOOM_CONSTANT;
    canvasMoveY = pm * canvas.height * ZOOM_CONSTANT;
    canvas.width -= canvasMoveX;
    canvas.height -= canvasMoveY;
    cellWidth -= pm * cellWidth * ZOOM_CONSTANT;
    cellHeight -= pm * cellHeight * ZOOM_CONSTANT;
    addGridOnCanvas();
    deltaTmp = {
        x: canvasMoveX / 2,
        y: canvasMoveY / 2,
    }
    canvasPos = moveCanvasBy(canvasPos, deltaTmp);
}

document.body.addEventListener('wheel', function (event) {

    const pm = Math.sign(event.deltaY);
    scaleCanvas(pm);

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