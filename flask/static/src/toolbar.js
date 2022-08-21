
var colors = document.getElementsByClassName("colors");

var colorPicker = new iro.ColorPicker('#picker', { width: 200 });

function setColors(color) {
    colors[0].innerText = `HEX: ${color.hexString}`;
    colors[1].innerText = `RGB: ${color.rgbString}`;
    colors[2].innerText = `HSL: ${color.hslString}`;
    currentColor = color;
}

setColors(colorPicker.color);
colorPicker.on('color:change', function (color) {
    // log the current color as a HEX string
    setColors(color);
});

canvas.addEventListener("click", function (event) {
    fillCellOnCanvas(cellpos, currentColor.hexString);
    setDrawingColor(cellpos, currentColor);
})