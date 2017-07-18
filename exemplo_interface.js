var Motorista = (function () {
    function Motorista() {
    }
    Motorista.prototype.frear = function () {
        console.log("Frear");
    };
    Motorista.prototype.acelear = function () {
        console.log("Acelerar");
    };
    Motorista.prototype.ligar_carro = function () {
        console.log("Ligar carro");
    };
    Motorista.prototype.desligar_carro = function () {
        console.log("Desligar carro");
    };
    return Motorista;
}());
var motoristaA = new Motorista();
motoristaA.ligar_carro();
motoristaA.acelear();
