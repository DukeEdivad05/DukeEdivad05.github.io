function minus(n) {
    var el = document.getElementById('txt');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    el.style.fontSize = (fontSize - n) + 'px';
}

function plus(n) {
    var el = document.getElementById('txt');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    el.style.fontSize = (fontSize + n) + 'px';
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }

    if (event.key == "+") {
        plus(1);
    } else if (event.key == "-") {
        minus(1);
    }
  }, true);