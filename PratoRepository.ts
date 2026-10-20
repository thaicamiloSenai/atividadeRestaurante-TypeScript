import { Prato } from "../models/Prato";

export class PratoRepository {
    private pratos: Prato[] = [];

    salvar(prato: Prato): void {
        this.pratos.push({
            nome: prato.nome,
            dataValidade: prato.dataValidade,
            nacionalidade: prato.nacionalidade
        });
    }
    //Está dizendo: Acesse a nossa lista de pratos (this.pratos) e adicione (push) no final dela um novo registro contendo as informações de nome, dataValidade e nacionalidade que acabaram de chegar nesse prato

    consultarPratos(): void {
        console.log("\n===== RELATÓRIO DE PRATOS =====");
        console.log(this.pratos);
    }
    //Está dizendo: Estou criando uma ação chamada consultarPratos que não devolve nenhum resultado (void), servindo apenas para imprimir no terminal um título bonitinho e a lista completa (this.pratos) com todos os pratos salvos até agora
}

/* EXPLICAÇÃO DO CÓDIGO:
    - import { Prato } from "../models/Prato": 
        - import --> Palavra-chave usada para buscar e trazer um código que está em outro arquivo
        - { Prato } --> O nome da classe exata que queremos importar
        - from --> Indica "de onde" estamos importando
        - ../models/Prato" -->  É o caminho do arquivo. O .. significa "sair da pasta atual (repositories) e voltar uma pasta para trás", depois entrar em models e acessar o arquivo Prato

    - private pratos: Prato[] = []:
        - Está dizendo: "Vou criar uma variável chamada pratos que vai ser uma lista ([]) para guardar itens do tipo Prato"

        - private --> usada para proteger e esconder uma informação dentro de uma classe
        - pratos -->  Nome da variável/propriedade interna que vai guardar a lista de pratos
        - Prato[] -->  Significa que essa variável é um Array (lista) que aceita apenas objetos da classe Prato
        - = [] --> Inicializa a variável com uma lista vazia pronta para receber itens

    - salvar(prato: Prato): void {
        - Está dizendo: "Estou criando uma ação chamada salvar que vai receber um único item chamado prato (que precisa ser do tipo Prato) e, depois de guardar esse item na lista, não precisa me devolver nenhum resultado (void)"

        - salvar --> Nome da função/método responsável por cadastrar um novo prato na lista.
        - (prato: Prato) --> Parâmetro de entrada. Significa que para usar o método salvar, é obrigatório passar um objeto do tipo Prato
        - void --> Palavra em inglês que significa "vazio". Indica que esta função realiza uma ação (salvar), mas não retorna nenhum valor (não tem um return).

    -
*/

