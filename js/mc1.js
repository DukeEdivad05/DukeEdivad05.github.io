function calculate() {
    var input = parseInt(document.getElementById('input').value);
    var stack = parseInt(String(input/64));
    var resto = parseInt(String(input - 64 * stack));
    var shulker = parseInt(String(stack / 27));
    var resto2 = parseInt(String(stack - 27 * shulker));
    var output = input + " » " + stack + " stack e " + resto + " » " + shulker + " shulker, " + resto2 + " stack e " + resto;

    document.getElementById('output').innerHTML = output;
}