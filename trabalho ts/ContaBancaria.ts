abstract class ContaBancaria {
	private numeroConta: string;
	private saldo: number;
	constructor(numeroConta: string, saldo: number) {
		this.numeroConta = numeroConta;
		this.saldo = saldo;
	}
	public abstract sacar(valor: number): void;
	public abstract depositar(valor: number): void;
}

export default ContaBancaria;
