// let auto = {
//     farbe: "rot",
//     marke:  "BMW",
//     reifen: 4
// }

// console.log(auto.reifen);



// class Auto {
//     constructor(farbe, marke) {
//         this.farbe = farbe;
//         this.marke = marke;
//     }
// }

// let bmwM2 = new Auto ("white", "BMW");

// console.log(bmwM2)

// class Product {
//     constructor(name, price, beschreibung) {
//         this.name = name;
//         this.price = price;
//         this.beschreibung = beschreibung;
//     }
// }

class Superhero {
    constructor(name, superpower, hpamount) {
        this.name = name;
        this.superpower = superpower;
        this.hpamount = hpamount;
    }
    magneticControl () {
        console.log("Hero " + this.name + " just used his " + this.superpower);
    }
}
// let Magnetto = new Superhero("Magnetto", "cotroll of magnetic fields", "69hp");

// console.log(Magnetto)


class Atribute extends Superhero {
    constructor(name, superpower, hpamount, element) {
        super(name, superpower, hpamount);
        this.element = element;
    }
}
let Magnetto = new Atribute ("Magnetto", "magnetic fields control", "69hp", "psy")
console.log(Magnetto)
Magnetto.magneticControl()