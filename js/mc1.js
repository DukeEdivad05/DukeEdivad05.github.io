function stackandshulker() {
    var input, stack, resto, shulker, resto2, output;
    input = parseInt(String(document.getElementById('stackandshulkerin').value));
    stack = parseInt(String(input/64));
    resto = parseInt(String(input - 64 * stack));
    shulker = parseInt(String(stack / 27));
    resto2 = parseInt(String(stack - 27 * shulker));
    if(shulker == 0) {
        if (stack == 0) {
            output = input
        } else {
            output = input + " » " + stack + " stack e " + resto;
        }
    } else {
        output = input + " » " + stack + " stack e " + resto + " » " + shulker + " shulker, " + resto2 + " stack e " + resto;
    }
    

    document.getElementById('stackandshulkerout').innerHTML = output;
}