"use strinct";

class Carro {
  cor: string;
  ano:number;
  marca:string;

  constructor() {
        console.log("Instanciando Carro");    
  }
}

class MiniVan extends Carro {
  passageiros:number;

  constructor() {
        super()
        console.log("Instanciando MiniVan");    
  }
}

var meu_carro = new Carro()
meu_carro.cor = "verde"
meu_carro.ano = 2017
meu_carro.marca = "Toyota"

var spin = new MiniVan()
spin.cor = "Prata"
spin.marca = "Chevrolet"
spin.ano = 2012
spin.passageiros = 7