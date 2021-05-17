function randomico() {
    var minimo, massimo, n;
    minimo = parseInt(String(document.getElementById('randominmin').value));
    massimo = parseInt(String(document.getElementById('randominmax').value));

    n = Math.floor(Math.random() * (massimo - minimo) ) + minimo;  
    
    if (!isNaN(n)) {
        document.getElementById('randomout').innerHTML = n;
    }
}