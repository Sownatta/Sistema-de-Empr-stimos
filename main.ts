abstract class Emprestimo {

    constructor(
        private _nome: string,
        private _idade: number,
        private _valorEmprestimo: number,
        private _numParcelas: number,
        private _valorParcela: number,
        private _rendaMensal: number
    ) { }

    //==> Getters e Setters <==
    public get rendaMensal(): number {
        return this._rendaMensal;
    }
    public set rendaMensal(value: number) {
        this._rendaMensal = value;
    }

    public get valorParcela(): number {
        return this._valorParcela;
    }
    public set valorParcela(value: number) {
        this._valorParcela = value;
    }

    public get numParcelas(): number {
        return this._numParcelas;
    }
    public set numParcelas(value: number) {
        this._numParcelas = value;
    }

    public get valorEmprestimo(): number {
        return this._valorEmprestimo;
    }
    public set valorEmprestimo(value: number) {
        this._valorEmprestimo = value;
    }

    public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    //==> Métodos <==
    abstract verificarAprovacao(): boolean;

    static verificarAprovacoes(solicitacoes: Emprestimo[]): void {
        for (const emprestimo of solicitacoes) {
            if (emprestimo.verificarAprovacao()) {
                console.log(`Solicitante: ${emprestimo.nome} [APROVADO]`);
            } else {
                console.log(`Solicitante: ${emprestimo.nome} [REPROVADO]`);
            }
        }
    }

}

class emprestimoPessoal extends Emprestimo {

    constructor(
        _nome: string,
        _idade: number,
        _valorEmprestimo: number,
        _numParcelas: number,
        _valorParcela: number,
        _rendaMensal: number
    ) {
        super( _nome, _idade, _valorEmprestimo, _numParcelas, _valorParcela, _rendaMensal );
    }

    //==> Métodos <==
    verificarAprovacao(): boolean {
        return (
            this.idade >= 18 &&
            this.rendaMensal > 2500 &&
            this.valorEmprestimo === this.numParcelas * this.valorParcela
        );
    }
}

class emprestimoEstudantil extends Emprestimo {

    constructor(
        _nome: string,
        _idade: number,
        _valorEmprestimo: number,
        _numParcelas: number,
        _valorParcela: number,
        _rendaMensal: number,
        private estaMatriculado: boolean
    ) {
        super( _nome, _idade, _valorEmprestimo, _numParcelas, _valorParcela, _rendaMensal )
    }

    //==> Métodos <==
    verificarAprovacao(): boolean {
        return (
            this.idade >= 18 &&
            this.idade <= 30 &&
            this.rendaMensal > 1500 &&
            this.estaMatriculado &&
            this.valorEmprestimo === this.numParcelas * this.valorParcela
        );
    }
}

class emprestimoAutomovel extends Emprestimo {

    constructor(
        _nome: string,
        _idade: number,
        _valorEmprestimo: number,
        _numParcelas: number,
        _valorParcela: number,
        _rendaMensal: number,
        private possuiHabilitacao: boolean
    ) {
        super( _nome, _idade, _valorEmprestimo, _numParcelas, _valorParcela, _rendaMensal )
    }

    //==> Métodos <==
    verificarAprovacao(): boolean {
        return (
            this.idade >= 18 &&
            this.rendaMensal > 3000 &&
            this.possuiHabilitacao &&
            this.valorEmprestimo === this.numParcelas * this.valorParcela
        );
    }
}

//==> MAIN <==
const solicitacoesEmprestimo: Emprestimo[] = []


//Empréstimo Pessoal
solicitacoesEmprestimo.push(new emprestimoPessoal('Antonio', 22, 20000, 20, 1000, 2550 )); //Aprovado
solicitacoesEmprestimo.push(new emprestimoPessoal('Eleanor', 17, 5000, 20, 250, 3000 )); //Reprovado
solicitacoesEmprestimo.push(new emprestimoPessoal('Lucca', 20, 2000, 10, 200, 2500 )); //Reprovado
solicitacoesEmprestimo.push(new emprestimoPessoal('Amélia', 18, 10000, 20, 500, 5000 )); //Aprovado
solicitacoesEmprestimo.push(new emprestimoPessoal('Mathis', 30, 50000, 20, 2000, 30000 )); //Reprovado


//Empréstimo Estudantil
solicitacoesEmprestimo.push(new emprestimoEstudantil('Julia', 25, 70000, 50, 1400, 2000, true )); //Aprovado
solicitacoesEmprestimo.push(new emprestimoEstudantil('Alexandro', 31, 25000, 25, 1000, 10000, true )); //Reprovado
solicitacoesEmprestimo.push(new emprestimoEstudantil('Giovanni', 26, 50000, 30, 1500, 5000, true )); //Reprovado
solicitacoesEmprestimo.push(new emprestimoEstudantil('Kiara', 16, 70000, 50, 1400, 1600, true )); //Reprovado
solicitacoesEmprestimo.push(new emprestimoEstudantil('Karis', 28, 20000, 5, 4000, 15000, false )); //Repovado


//Empréstimo Automóvel
solicitacoesEmprestimo.push(new emprestimoAutomovel('Lane', 18, 50000, 100, 500, 5000, true)); //Aprovado
solicitacoesEmprestimo.push(new emprestimoAutomovel('Snow', 17, 60000, 100, 600, 1500, false)); //Reprovado
solicitacoesEmprestimo.push(new emprestimoAutomovel('Lancelot', 26, 70000, 50, 1400, 15000, true)); //Aprovado
solicitacoesEmprestimo.push(new emprestimoAutomovel('Seris', 25, 30000, 150, 200, 6000, false)); //Reprovado
solicitacoesEmprestimo.push(new emprestimoAutomovel('Soris', 70, 100000, 10, 10000, 1000000, true)); //Aprovado



Emprestimo.verificarAprovacoes(solicitacoesEmprestimo);