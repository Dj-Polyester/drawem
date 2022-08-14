var startingx = undefined;
var startingy = undefined;

function addGridOnCanvas(ctx) {
    for (let index = 0; index <= canvas.width; index += PIXEL_SIZE) {
        ctx.moveTo(index, 0);
        ctx.lineTo(index, canvas.height);
    }
    for (let index = 0; index <= canvas.height; index += PIXEL_SIZE) {
        ctx.moveTo(0, index);
        ctx.lineTo(canvas.width, index);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#cccccc";
    ctx.stroke();
}

function fillCellOnCanvas(canvas, event) {
    const pos = getCellPosOnCanvas(canvas, event);

    if (startingx != undefined && startingy != undefined) {
        ctx.fillStyle = window.getComputedStyle(canvas, null).getPropertyValue('background-color');
        ctx.fillRect(startingx + 1, startingy + 1, PIXEL_SIZE - 2, PIXEL_SIZE - 2);
    }

    startingx = pos.x * PIXEL_SIZE;
    startingy = pos.y * PIXEL_SIZE;

    ctx.fillStyle = "#cccccc";
    ctx.fillRect(startingx + 1, startingy + 1, PIXEL_SIZE - 2, PIXEL_SIZE - 2);
}

canvas.addEventListener("mousemove", function (event) {
    fillCellOnCanvas(canvas, event);
})

window.onload = async function () {
    addGridOnCanvas(ctx);
}


