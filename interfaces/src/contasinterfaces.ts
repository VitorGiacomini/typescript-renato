abstract class Conta {
    protected numero: number;
    protected titular: string;
    private saldoConta: number;
  
    constructor(titular: string) {
      this.numero = this.gerarNumeroConta();
      this.titular = titular;
      this.saldoConta = 0;
    }
  
    private gerarNumeroConta(): number {
      return Math.floor(Math.random() * 100000 + 1);
    }
  
    info(): void {
      console.log(`Titular: ${this.titular}`);
      console.log(`Número da conta: ${this.numero}`);
    }
  
    get saldo(): number {
      return this.saldoConta;
    }
    set saldo(saldo: number) {
      this.saldoConta = this.saldoConta;
    }
  
    protected deposito(valor: number): void {
      if (valor < 0) {
        console.log("Valor inválido");
        return;
      }
      this.saldoConta += valor;
    }
  
    protected saque(valor: number): void {
      if (valor < 0) {
        console.log("Valor inválido!");
        return;
      }
  
      if (valor >= this.saldoConta) {
        this.saldoConta -= valor;
      } else {
        console.log("Saldo insuficiente!");
      }
    }
  }
  
  class ContaPF extends Conta implements Tributos {
    taxa = 0.3;
    public cpf: string;
  
    constructor(titular: string, cpf: string) {
      super(titular);
      this.cpf = cpf;
      console.log(`Conta PF criada: ${this.titular}`);
    }
  
    info(): void {
      super.info();
      console.log(`CPF: ${this.cpf}`);
      console.log(`-------------------------------`);
    }
  
    public deposito(valor: number): void {
      valor > 1000
        ? console.log("Valor de depósito maior que o permitido")
        : super.deposito(valor);
    }
  
    public saque(valor: number): void {
      valor > 1000
        ? console.log("Valor de saque maior que o permitido")
        : super.saque(valor);
    }
    calcularTributo(): number {
        return this.saldo *  this.taxa;
    }
  }
  
  class PessoaJuridica extends Conta implements Tributos {
    public CNPJ: string;
    public IE: string;
    taxa = 0.4
  
    constructor(titular: string, cnpj: string, ie: string) {
      super(titular);
      this.CNPJ = cnpj;
      this.IE = ie;
      console.log(`Conta PJ criada: ${this.titular}`);
    }
  
    info(): void {
      super.info();
      console.log(`CNPJ: ${this.CNPJ}`);
      console.log(`-------------------------------`);
    }
  
    public deposito(valor: number): void {
      valor > 10000
        ? console.log("Valor de depósito maior que o permitido")
        : super.deposito(valor);
    }
  
    public saque(valor: number): void {
      valor > 10000
        ? console.log("Valor de saque maior que o permitido")
        : super.saque(valor);
    }
    calcularTributo(): number {
        return this.saldo * this.taxa;
    }
  }
  interface Tributos{
     taxa: number;
     calcularTributo():number;
  }
  const conta1 = new ContaPF("ana", "123.456.789-12");
  const conta2 = new PessoaJuridica(
    "Apple Services",
    "123.456.78/0001-90",
    "123456789"
  );
  console.log(conta1.calcularTributo())
  conta1.info();
  conta2.info();
  