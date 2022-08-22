var rmUnit = (str, unit) => 0 | str.slice(0, -unit.length);
var rmPx = (str) => rmUnit(str, "px");

var colorPicker = new iro.ColorPicker('#picker', { width: 200 });

function str2coo(str) {
    const arr = str.split(",").map((val) => 0 | val);
    return {
        x: arr[0],
        y: arr[1],
    };
}

function getDrawingColor(cellpos) {
    return drawing[`${cellpos.x},${cellpos.y}`];
}
function setDrawingColor(cellpos, color) {
    drawing[`${cellpos.x},${cellpos.y}`] = color.hexString;
}

function getMousePos(event) {
    return {
        x: event.clientX,
        y: event.clientY,
    };
}

//https://stackoverflow.com/a/17130415/10713877
function getMousePosOnCanvas(event) {
    var rect = canvas.getBoundingClientRect();
    const pos = getMousePos(event);
    return {
        x: pos.x - rect.left,
        y: pos.y - rect.top,
    };
}

function getCellPosOnCanvas(pos) {
    return {
        x: Math.floor(pos.x / cellWidth),
        y: Math.floor(pos.y / cellHeight),
    };
}

function getCellPosAsPixels(pos) {
    return {
        x: pos.x * cellWidth + cellWidth / 2,
        y: pos.y * cellHeight + cellHeight / 2,
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
    ctx.strokeStyle = GRID_STROKE_STYLE;
    ctx.stroke();
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


