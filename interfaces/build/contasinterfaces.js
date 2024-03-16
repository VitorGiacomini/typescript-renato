"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000 + 1);
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número da conta: ${this.numero}`);
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldo) {
        this.saldoConta = this.saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor inválido");
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("Valor inválido!");
            return;
        }
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log("Saldo insuficiente!");
        }
    }
}
class ContaPF extends Conta {
    taxa = 0.3;
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`);
    }
    info() {
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`-------------------------------`);
    }
    deposito(valor) {
        valor > 1000
            ? console.log("Valor de depósito maior que o permitido")
            : super.deposito(valor);
    }
    saque(valor) {
        valor > 1000
            ? console.log("Valor de saque maior que o permitido")
            : super.saque(valor);
    }
    calcularTributo() {
        return this.saldo * this.taxa;
    }
}
class PessoaJuridica extends Conta {
    CNPJ;
    IE;
    taxa = 0.4;
    constructor(titular, cnpj, ie) {
        super(titular);
        this.CNPJ = cnpj;
        this.IE = ie;
        console.log(`Conta PJ criada: ${this.titular}`);
    }
    info() {
        super.info();
        console.log(`CNPJ: ${this.CNPJ}`);
        console.log(`-------------------------------`);
    }
    deposito(valor) {
        valor > 10000
            ? console.log("Valor de depósito maior que o permitido")
            : super.deposito(valor);
    }
    saque(valor) {
        valor > 10000
            ? console.log("Valor de saque maior que o permitido")
            : super.saque(valor);
    }
    calcularTributo() {
        return this.saldo * this.taxa;
    }
}
const conta1 = new ContaPF("ana", "123.456.789-12");
const conta2 = new PessoaJuridica("Apple Services", "123.456.78/0001-90", "123456789");
console.log(conta1.calcularTributo());
conta1.info();
conta2.info();
