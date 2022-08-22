var hint = document.getElementsByClassName("hint")[0];
var startingx = undefined;
var startingy = undefined;

function setHint(pos) {
    var hintWidth =
        rmPx(window.getComputedStyle(hint, null).width) +
        rmPx(window.getComputedStyle(hint, null).margin) +
        rmPx(window.getComputedStyle(hint, null).padding);

    hint.style.left = pos.x - hintWidth / 2 + "px";
    hint.style.top = pos.y + HALF_MOUSE_HEIGHT + "px";
    hint.innerText = `x: ${cellpos.x} y: ${cellpos.y}`;
}

function eraseCellOnCanvas() {
    const prevCellPos = getCellPosOnCanvas({ x: startingx, y: startingy });
    const prevColor = getDrawingColor(prevCellPos);
    if (prevColor === undefined) {
        ctx.fillStyle = canvasBackColor;
    }
    else {
        ctx.fillStyle = prevColor;
    }
    ctx.fillRect(startingx + 1, startingy + 1, cellWidth - 2, cellHeight - 2);
}

function fillCellOnCanvasSetup(cellpos) {

    if (startingx != undefined && startingy != undefined) {
        eraseCellOnCanvas();
    }
    const currColor = getDrawingColor(cellpos);
    if (currColor === undefined)
        return CELL_FILL_STYLE;

    const currColorRgb = hex2rgb(currColor);

    const resultRgb = add(subtract(currColorRgb, canvasBackColorRgb), cellFillStyleRgb);
    return rgb2hex(
        resultRgb.map(i => clampRGB(i))
    );
}
function fillCellOnCanvas(cellpos, color) {
    startingx = cellpos.x * cellWidth;
    startingy = cellpos.y * cellHeight;

    ctx.fillStyle = color;
    ctx.fillRect(startingx + 1, startingy + 1, cellWidth - 2, cellHeight - 2);
}
canvas.addEventListener("mousemove", function (event) {
    const mousePos = getMousePos(event);
    const mousePosOnCanvas = getMousePosOnCanvas(event);
    cellpos = getCellPosOnCanvas(mousePosOnCanvas);
    const color = fillCellOnCanvasSetup(cellpos);
    fillCellOnCanvas(cellpos, color);
    setHint(mousePos, cellpos);
})

canvas.addEventListener("mouseover", function (event) {
    hint.style.visibility = "visible";
})

canvas.addEventListener("mouseout", function (event) {
    hint.style.visibility = "hidden";
    eraseCellOnCanvas();
})

window.onload = async function () {
    addGridOnCanvas();
}


