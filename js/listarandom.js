function listarandom() {
    var listaminimo, listamassimo, lista, listan;
    listaminimo = parseInt(String(document.getElementById('listarandominmin').value));
    listamassimo = parseInt(String(document.getElementById('listarandominmax').value));

    lista = [];

    while(lista.length < listamassimo) {
        listan = Math.floor(Math.random() * (listamassimo - listaminimo) ) + listaminimo;
         if(!lista.includes(listan)) {
            lista.push(listan);
        }
    }

    if (lista.length > 0) {
        document.getElementById('listarandomout').innerHTML = lista;
    }
}