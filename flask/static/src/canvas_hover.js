var startingx = undefined;
var startingy = undefined;

function eraseCellOnCanvas() {
    ctx.fillStyle = window.getComputedStyle(canvas, null).getPropertyValue('background-color');
    ctx.fillRect(startingx + 1, startingy + 1, cellWidth - 2, cellHeight - 2);
}

function fillCellOnCanvas(canvas, event) {
    const pos = getCellPosOnCanvas(canvas, event);

    if (startingx != undefined && startingy != undefined) {
        eraseCellOnCanvas();
    }

    startingx = pos.x * cellWidth;
    startingy = pos.y * cellHeight;

    ctx.fillStyle = "#cccccc";
    ctx.fillRect(startingx + 1, startingy + 1, cellWidth - 2, cellHeight - 2);
}

canvas.addEventListener("mousemove", function (event) {
    fillCellOnCanvas(canvas, event);
})

canvas.addEventListener("mouseout", function (event) {
    eraseCellOnCanvas();
})

window.onload = async function () {
    addGridOnCanvas();
}


