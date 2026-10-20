export class Funcionario {
    nome: string;
    sexo: string;
    dataContratacao: string;
    cpf: string;
    rg: string;

    constructor(nome: string, sexo: string, dataContratacao: string, cpf: string, rg: string) {
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg;
    }
}