var rgbString2hex = (rgbString) => "#" + rgbString.slice(4, rgbString.length - 1).split(",").map(x => parseInt(x).toString(16)).join("");
var clamp = (num, min, max) => (num < min) ? min : ((num > max) ? max : num);
var clampRGB = (num) => clamp(num, 0, 255);

var colorString2arr = (rgbString) => rgbString.slice(4, rgbString.length - 1).split(",").map(x => parseInt(x));

var rgb2rgbString = (rgb) => `rgb(${rgb.join(",")})`;
var hsl2hslString = (hsl) => `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`;

function hex2rgb(hex) {
    const rgb = new Array((hex.length - 1) / 2).fill(0);
    for (let i = 1; i < hex.length; i += 2) {
        rgb[(i - 1) / 2] = parseInt("0x" + hex.slice(i, i + 2));
    }
    return rgb;
}
var rgb2hex = (rgb) => "#" + rgb.map(
    function (elem) {
        const tmp = elem.toString(16);
        return (tmp.length === 1) ? "0" + tmp : tmp;
    }).join("");

//COLOR ARITHMETICS
function add(rgb1, rgb2) {
    return [
        rgb1[0] + rgb2[0],
        rgb1[1] + rgb2[1],
        rgb1[2] + rgb2[2],
    ];
}
function subtract(rgb1, rgb2) {
    return [
        rgb1[0] - rgb2[0],
        rgb1[1] - rgb2[1],
        rgb1[2] - rgb2[2],
    ];
}