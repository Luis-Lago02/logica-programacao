class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    tiposAtaque(){
        let ataque = " "

        switch (this.tipo) {
           
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque indefinido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi('Batman', 38, 'monge');
heroi1.tiposAtaque();

let heroi2 = new Heroi('Naruto', 15 , 'ninja');
heroi2.tiposAtaque();