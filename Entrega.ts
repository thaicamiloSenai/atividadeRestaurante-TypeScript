export class Entrega {
    dataSaida: String;
    horaSaida: String; 
    numeroPedido: String; 
    endereco: String; 

    constructor(dataSaida: string, horaSaida: string, numeroPedido: String, endereco: String){
        this.dataSaida = dataSaida;
        this.horaSaida = horaSaida; 
        this.numeroPedido = numeroPedido;
        this.endereco = endereco;
    }
}
