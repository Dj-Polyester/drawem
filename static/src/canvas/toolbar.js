
function setColors(color) {
    hexInput.value = color.hexString;
    const rgb = colorString2arr(color.rgbString);
    for (let i = 0; i < 3; ++i) {
        rgbInputs[i].value = rgb[i];
    }
    const hsl = colorString2arr(color.hslString);
    for (let i = 0; i < 3; ++i) {
        hslInputs[i].value = hsl[i];
    }
    currentColor = color;
}

colorPicker.on('color:change', function (color) {
    setColors(color);
});

canvas.addEventListener("click", function (event) {
    if (currentColor !== canvasBackColor) {
        fillCellOnCanvas(cellpos, currentColor);
        setDrawingColor(cellpos, currentColor);
    }
});
hexInput.addEventListener("input", function (event) {
    const hexTxt = hexInput.value;
    if (hexTxt.length === 7) {
        colorPicker.addColor(hexTxt);
        colorPicker.removeColor(0);
    }
});

[...rgbInputs].forEach(rgbInput => {
    rgbInput.addEventListener("input", function (event) {
        const rgb = [...rgbInputs].map(elem => elem.value);
        colorPicker.addColor(rgb2rgbString(rgb));
        colorPicker.removeColor(0);
    });
});
[...hslInputs].forEach(hslInput => {
    hslInput.addEventListener("input", function (event) {
        const hsl = [...hslInputs].map(elem => elem.value);
        colorPicker.addColor(hsl2hslString(hsl));
        colorPicker.removeColor(0);
    });
});