// Главный класс Транспортное средство
class Fahrzeug {
  constructor(marke, modell) {
    this.marke = marke;
    this.modell = modell;
    this.geschwindigkeit = 0;
  }
  
  beschleunigen(wert) {
    this.geschwindigkeit += wert;
    console.log(this.marke + " " + this.modell + " разгоняется до " + this.geschwindigkeit + " км/ч");
  }
  
  bremsen(wert) {
    this.geschwindigkeit = Math.max(0, this.geschwindigkeit - wert); // Не ниже 0 км/ч
    console.log(this.marke + " " + this.modell + " тормозит до " + this.geschwindigkeit + " км/ч");
  }
  
  info() {
    return this.marke + " " + this.modell + ", текущая скорость: " + this.geschwindigkeit + " км/ч";
  }
}

// Подкласс Автомобиль
class Auto extends Fahrzeug {
  constructor(marke, modell, anzahlTüren) {
    super(marke, modell); // Вызывает конструктор родительского класса
    this.anzahlTüren = anzahlTüren;
  }
  
  hupen() {
    console.log("Бииип Бииип!");
  }
  
  // Переопределение метода info для отображения количества дверей
  info() {
    return super.info() + ", количество дверей: " + this.anzahlTüren;
  }
}

// Так можно протестировать классы:
let meinFahrzeug = new Fahrzeug("Generic", "Vehicle");
meinFahrzeug.beschleunigen(30);

let meinAuto = new Auto("VW", "Golf", 5);
meinAuto.beschleunigen(50);
meinAuto.hupen();
console.log(meinAuto.info());