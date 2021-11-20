function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function listarandom() {
   var listaminimo, listamassimo, lista, listan;
   listaminimo = parseInt(String(document.getElementById('listarandominmin').value));
   listamassimo = parseInt(String(document.getElementById('listarandominmax').value));

   lista = [];

   for(a = listaminimo; a < listamassimo; a++) {
       lista.push(a);
   }

   if (lista.length > 0) {
    document.getElementById('listarandomout').innerHTML = shuffle(lista);
    }

//    while(lista.length < listamassimo) {
//        listan = Math.floor(Math.random() * (listamassimo - listaminimo) ) + listaminimo;
//         if(!lista.includes(listan)) {
//            lista.push(listan);
//        }
//    }

   
// document.getElementById('listarandomout').innerHTML = "Funziona disabilitata";
}