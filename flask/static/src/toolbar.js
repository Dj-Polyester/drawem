
// var colors = document.getElementsByClassName("color-input");

var hexInput = document.getElementsByClassName("hex-input")[0];
var colorInputs = document.getElementsByClassName("color-input");

var colorPicker = new iro.ColorPicker('#picker', { width: 200 });

function setColors(color) {
    hexInput.value = color.hexString;
    const rgb = rgbString2rgb(color.rgbString);
    colorInputs[0].value = rgb.r;
    colorInputs[1].value = rgb.g;
    colorInputs[2].value = rgb.b;
    const hsl = hslString2hsl(color.hslString);
    colorInputs[3].value = hsl.h;
    colorInputs[4].value = hsl.s;
    colorInputs[5].value = hsl.l;
    currentColor = color;
}

setColors(colorPicker.color);
colorPicker.on('color:change', function (color) {
    setColors(color);
    console.log(color.hslString);
});

canvas.addEventListener("click", function (event) {
    fillCellOnCanvas(cellpos, currentColor);
    setDrawingColor(cellpos, currentColor);
})