class Fahrzeug {
    constructor(marke, modell, geshwindigkeit = 0) {
        this.marke = marke;
        this.modell = modell;
        this.geshwindigkeit = geshwindigkeit;
    }
    beschleunigung () {
        this.geshwindigkeit = this.geshwindigkeit + 350
        console.log(this.marke + "_" + this.modell + "_" + "hat sich beschlinight auf_" + this.geshwindigkeit + "_irgendwas")
    }
    bremsen () {
        this.geshwindigkeit = this.geshwindigkeit * 0
        console.log(this.marke + "_" + this.modell + "_" + "hat sich gebremst bis_" + this.geshwindigkeit + "_irgendwas")
    }
}

class Auto extends Fahrzeug {
    constructor(marke, modell, geshwindigkeit, anzahlTüren) {
        super(marke, modell, geshwindigkeit);
        this.anzahlTüren = anzahlTüren;
    }
    hupen () {
        console.log(this.marke + " " + this.modell + " " + this.geshwindigkeit + " " + this.anzahlTüren + "_hat gerade gehupt")
    }
}

let thisAuto  = new Auto ("AUDI", "TT", 0, 2);
console.log(thisAuto)

thisAuto.beschleunigung()
thisAuto.bremsen()
thisAuto.hupen ()
