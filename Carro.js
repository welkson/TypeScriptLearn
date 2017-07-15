var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = (function () {
    function Carro() {
        console.log("Instanciando Carro");
    }
    return Carro;
}());
var MiniVan = (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan() {
        var _this = _super.call(this) || this;
        console.log("Instanciando MiniVan");
        return _this;
    }
    return MiniVan;
}(Carro));
var meu_carro = new Carro();
meu_carro.cor = "verde";
meu_carro.ano = 2017;
meu_carro.marca = "Toyota";
var spin = new MiniVan();
spin.cor = "Prata";
spin.marca = "Chevrolet";
spin.ano = 2012;
spin.passageiros = 7;
