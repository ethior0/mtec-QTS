const { Titular } = require("./Titular.js")
const { Conta } = require("./Conta.js")

class ContaPoupanca extends Conta {
    static contasPoupanca = []

    constructor(saldo, senha, agencia, numero, titular) {
        super(saldo, senha, agencia, numero, titular)
        ContaPoupanca.contasPoupanca.push(this)
    }

    // aplica rendimento de 0.5% (pode ajustar depois)
    renderJuros() {
        let rendimento = this.saldo * 0.005
        this.saldo += rendimento
        return { rendimento: `Rendimento de ${rendimento.toFixed(2)} aplicado, saldo atual: ${this.saldo.toFixed(2)}` }
    }

    static gerarContasPoupanca() {
        Titular.gerarTitulares()
        let titularesP = Titular.titulares

        new ContaPoupanca(800, 1212, 201, 2001, titularesP[0])
        new ContaPoupanca(950, 3434, 202, 2002, titularesP[1])
        new ContaPoupanca(1200, 5656, 203, 2003, titularesP[2])
        new ContaPoupanca(600, 7878, 204, 2004, titularesP[3])
        new ContaPoupanca(1500, 9090, 205, 2005, titularesP[4])
    }
}

module.exports = { ContaPoupanca }
