interface Dirigir {
  frear():void;
  acelear():void;
  ligar_carro():void;
  desligar_carro():void;
}

class Motorista implements Dirigir {
    frear():void {
      console.log("Frear");
    }

    acelear():void {
      console.log("Acelerar");
    }

    ligar_carro():void {
      console.log("Ligar carro");
    }

    desligar_carro():void {
      console.log("Desligar carro")
    }
}

var motoristaA = new Motorista()
motoristaA.ligar_carro()
motoristaA.acelear()
