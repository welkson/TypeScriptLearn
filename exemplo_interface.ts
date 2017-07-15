"use strict";

interface Dirigir {
  frear();
  acelear();
  ligar_carro();
  desligar_carro();
}

class Motorista implements Dirigir {
    frear() {
      console.log("Frear");
    }

    acelear() {
      console.log("Acelerar");
    }

    ligar_carro() {
      console.log("Ligar carro");
    }

    desligar_carro() {
      console.log("Desligar carro")
    }
}

var motoristaA = new Motorista()
motoristaA.ligar_carro()