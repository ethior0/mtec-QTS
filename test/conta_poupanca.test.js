const { ContaPoupanca } = require('../model/ContaPoupanca')

ContaPoupanca.gerarContasPoupanca()
let contasP = ContaPoupanca.contasPoupanca

test("Teste da função renderJuros", () => {
    const saldoInicial = contasP[0].saldo
    const resultado = contasP[0].renderJuros()
    expect(contasP[0].saldo).toBeCloseTo(saldoInicial * 1.005) // saldo + 0.5%
})

test("Teste de depósito na conta poupança", () => {
    const saldoInicial = contasP[1].saldo
    contasP[1].depositar(200, true)
    expect(contasP[1].saldo).toBe(saldoInicial + 200)
})
