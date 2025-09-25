
var r_rgb = document.getElementById("redinput");
var b_rgb = document.getElementById("blueinput");
var g_rgb = document.getElementById("greeninput");
var width = document.getElementById("width");


console.log(r_rgb.value);
console.log(g_rgb.value);
console.log(b_rgb.value);
function updateBox() {
    var editme = document.getElementById("editme");
    var rgbString = `rgb(${r_rgb.value}, ${g_rgb.value}, ${b_rgb.value})`;
    console.log(rgbString);
    editme.style.color = rgbString;
    editme.style.borderWidth = `${width.value}px`;
    editme.style.borderColor = rgbString;
}
r_rgb.oninput = function() {updateBox()};
g_rgb.oninput = function() {updateBox()};
b_rgb.oninput = function() {updateBox()};
width.oninput = function() {updateBox()};
updateBox()