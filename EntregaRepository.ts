import { Entrega } from "../models/Entrega";

export class EntregaRepository {
    private entregas: Entrega[] = [];

    salvar(entrega: Entrega): void {
        this.entregas.push({
            dataSaida: entrega.dataSaida,
            horaSaida: entrega.horaSaida,
            numeroPedido: entrega.numeroPedido,
            endereco: entrega.endereco
        });
    }

    consultarEntregas(): void {
        console.log("\n===== RELATÓRIO DE ENTREGAS =====");
        console.log(this.entregas);
    }
}