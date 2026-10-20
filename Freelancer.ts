import { Funcionario } from "./Funcionario";

export class Freelancer extends Funcionario {
    valorHora: number;
    horasTrabalhadas: number;
    dataInicio: string;
    dataFim: string; // Representa a data limite do contrato

    constructor(
        nome: string,
        sexo: string,
        dataContratacao: string,
        cpf: string,
        rg: string,
        valorHora: number,
        horasTrabalhadas: number,
        dataInicio: string,
        dataFim: string
    ) {
        super(nome, sexo, dataContratacao, cpf, rg);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    private converterParaData(dataStr: string): Date {
        if (dataStr.includes('/')) {
            const [dia, mes, ano] = dataStr.split('/');
            return new Date(Number(ano), Number(mes) - 1, Number(dia));
        }
        return new Date(dataStr);
    }

    isContratoAtivo(): boolean {
        const hoje = new Date();
        const dataLimite = this.converterParaData(this.dataFim);
        return dataLimite >= hoje;
    }

    tempoRestanteDias(): number {
        const hoje = new Date();
        const dataLimite = this.converterParaData(this.dataFim);
        const diferencaMs = dataLimite.getTime() - hoje.getTime();
        const dias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
        return dias > 0 ? dias : 0;
    }
}