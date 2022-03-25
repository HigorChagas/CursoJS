function teste() {
    console.log('Este é meu teste');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar');
    }

    static soma(x, y) {
        console.log(this);
    }
}

const controle = new ControleRemoto('Samsung');

controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
ControleRemoto.trocaPilha();
ControleRemoto.soma();