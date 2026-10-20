import { Funcionario } from "./Funcionario";

export class Contratado extends Funcionario {
    salario: number; // ou salarioFixo

    constructor(nome: string, sexo: string, dataContratacao: string, cpf: string, rg: string, salario: number) {
        super(nome, sexo, dataContratacao, cpf, rg);
        this.salario = salario;
    }
}