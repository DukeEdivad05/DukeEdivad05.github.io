function target() {
    var onoff = document.getElementById('link0').target;
    if (onoff == "_self") {
        for ( a = 0; a < 13; a++) {
            var id = "link" + String(a);
            document.getElementById(id).target="_blank";
        }
    } else if (onoff == "_blank") {
        for ( a = 0; a < 13; a++) {
            var id = "link" + String(a);
            document.getElementById(id).target="_self";
        }
    }
}