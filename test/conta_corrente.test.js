const {ContaCorrente} = require('../model/ContaCorrente')

ContaCorrente.gerarContasCorrentes();
let contas = ContaCorrente.contasCC

test("Teste da função cobrar taxa", () => {
    const test = contas[0].cobrarTaxa();
    expect(contas[0].saldo).toBe(1180);
}) 