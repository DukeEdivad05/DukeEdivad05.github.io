var h = window.innerHeight;
var minh = document.getElementById('content').style.minHeight;
var h2 = h - 216;
if( h2 > minh ) {
    document.getElementById('content').style = "height:" + h2 + "px";
}