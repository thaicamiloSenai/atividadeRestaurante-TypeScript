import { Contratado } from "../models/Contratado";
import { Freelancer } from "../models/Freelancer";

export class FuncionarioRepository {
    // Array que aceita Contratado OU Freelancer
    private funcionarios: (Contratado | Freelancer)[] = [];

    salvar(funcionario: Contratado | Freelancer): void {
        // Se tiver a propriedade 'salario', sabemos que é um Contratado
        if ('salario' in funcionario) {
            this.funcionarios.push(funcionario);
        } 
        // Se não, é um Freelancer
        else {
            this.funcionarios.push(funcionario);
        }
    }

    consultarFuncionarios(): void {
        console.log("\n===== RELATÓRIO DE TODOS OS FUNCIONÁRIOS =====");
        console.log(this.funcionarios);
    }

    consultarTrabalhando(): void {
        console.log("\n===== RELATÓRIO DE FUNCIONÁRIOS TRABALHANDO =====");
        this.funcionarios.forEach(f => {
            if (f instanceof Contratado) {
                console.log(`[Contratado] ${f.nome} | Sexo: ${f.sexo} | Admissão: ${f.dataContratacao} | CPF: ${f.cpf} | RG: ${f.rg}`);
            } else if (f instanceof Freelancer) {
                console.log(`[Freelancer] ${f.nome} | Sexo: ${f.sexo} | Admissão: ${f.dataContratacao} | CPF: ${f.cpf} | RG: ${f.rg}`);
            }
        });
    }

    consultarSalarios(): void {
        console.log("\n===== RELATÓRIO DE SALÁRIOS =====");
        this.funcionarios.forEach(f => {
            if ('salario' in f) {
                console.log(`Nome: ${f.nome} | Tipo: Contratado | Salário Fixo: R$ ${f.salario.toFixed(2)}`);
            } else {
                const totalSalario = f.valorHora * f.horasTrabalhadas;
                console.log(`Nome: ${f.nome} | Tipo: Freelancer | Horas: ${f.horasTrabalhadas}h | Valor/Hora: R$ ${f.valorHora.toFixed(2)} | Salário Final: R$ ${totalSalario.toFixed(2)}`);
            }
        });
    }

    consultarContratoFreelancer(): void {
        console.log("\n===== RELATÓRIO DE CONTRATOS FREELANCER =====");
        this.funcionarios.forEach(f => {
            if (f instanceof Freelancer) {
                const ativo = f.isContratoAtivo() ? "Sim (Ativo)" : "Não (Inativo)";
                const diasRestantes = f.tempoRestanteDias();
                console.log(`Freelancer: ${f.nome} | Contrato Ativo: ${ativo} | Tempo Restante: ${diasRestantes} dia(s)`);
            }
        });
    }
}