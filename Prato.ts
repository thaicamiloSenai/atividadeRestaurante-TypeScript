export class Prato { 
    nome: string;
    dataValidade: string;
    nacionalidade: string;

    constructor(nome: string, dataValidade: string, nacionalidade: string) {
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.nacionalidade = nacionalidade;
    }
}

/* EXPLICAÇÃO DO CÓDIGO:
    - export --> Serve para "abrir as portas" deste arquivo. Ela avisa o TypeScript que essa    classe pode ser importada (import) por outros arquivos, como o PratoRepository.ts ou o index.ts. Sem o export, a classe fica "presa" dentro deste arquivo e mais ninguém consegue usá-la.
    
    - string --> informa o tipo dos valores que entrarão na variável, nesse caso só recebe dados em formato de texto
 
*/