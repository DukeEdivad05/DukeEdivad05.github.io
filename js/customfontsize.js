function minus() {
    var el = document.getElementById('txt');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    el.style.fontSize = (fontSize - 1) + 'px';
}

function plus() {
    var el = document.getElementById('txt');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    el.style.fontSize = (fontSize + 1) + 'px';
}