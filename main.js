// Classe Abstrata
class Veiculo {
    // Construtor
    constructor(tipo, modelo) {
        this._tipo = tipo;
        this.modelo = modelo;
    }
    // Getters & Setters
    getTipo () {
        return this._tipo;
    }
    setTipo (newTipo) {
        this._tipo = newTipo;
    }
    // Metodos
    acelerar() {
        console.log(`Tipo: ${this.getTipo()} Modelo: ${this.modelo} está acelerando !`);
    }
    frear() {
        console.log(`Tipo: ${this.getTipo()} Modelo: ${this.modelo} está freando !`);
    }
}
// Sub Classe 1 Herda Veiculo
class Carro extends Veiculo {
    // Construtor
    constructor(modelo, cor) {
        super('Carro', modelo);
        this.cor = cor;
    }
    // Metodos
    abrirPorta() {
        console.log(`O ${this.getTipo()} Modelo: ${this.modelo} Cor: ${this.cor} está abrindo a porta !`);
    }
}
// Sub Classe 2 Herda Veiculo
class Moto extends Veiculo {
    // Construtor
    constructor(modelo, cor) {
        super('Moto', modelo);
        this.cor = cor;
    }
    // Metodos
    destravarGuidao() {
        console.log(`O guidão da ${this.getTipo()} Modelo: ${this.modelo} Cor: ${this.cor} está desbloqueada !`);
    }
}
// Instanciando de 3 objetos 2 tipo Moto e 1 tipo Carro porem as 3 herdam de Veiculo
const carro1 = new Carro('300c', 'Preto');
const moto1 = new Moto('Tiger 800', 'Vinho');
const moto2 = new Moto('Tracer 900 GT');
// Testes dos metodos e acessos a atributos public/private (os consoles são para separar os outputs)
carro1.acelerar();
console.log('< ----------- >');
carro1.abrirPorta();
console.log('< ----------- >');
moto1.frear();
console.log('< ----------- >');
moto1.destravarGuidao();
console.log('< ----------- >');
moto2.acelerar();
console.log('< ----------- >');
console.log(moto2.getTipo());