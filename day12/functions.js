function add (a, b) {
    return a + b;
}
function multiply (a, b) {
    return a * b;
}
function minus (a, b) {
    return a - b;
}
function chimera (min, multi) {
    return multi - min;
}
function dopusteam (a, chim, c, d) {
    return (a + chim)/(c * d);
}



let summe = add(5, 3);
let multi = multiply (7, 10)
let min = minus(5, 10)
let chim = multi - min;
let resultat = dopusteam(10, chim, 2, 4);

console.log(summe);
console.log(add(5, 3));
console.log(multi);
console.log(min);
console.log(chim);
console.log(resultat);


function nameCustomer (firstName) {
    return "Hay mfer, are you " + firstName + " noobster??"
}
console.log(nameCustomer("Alex1"));

let begruessen = function(name) {
    return "Hay mfer, are you " + name + " noobster?!"
}
console.log(begruessen("Alex2"))