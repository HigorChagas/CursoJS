class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class VideoGame extends DispositivoEletronico {
    constructor(nome, cor, modelo, armazenamento) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
    }

    ligar() {
        console.log('Você alterou o método ligar.');
    }

    boasVindas() {
        console.log('Bem vindo ao Sony PS5!');
    }
    
}

const v1 = new VideoGame('Ps5', 'Branco', 'Pro', '1TB');
v1.ligar();
v1.ligar();
v1.boasVindas();