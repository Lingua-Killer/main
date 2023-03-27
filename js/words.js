class Word {
    constructor(ctx, gameHeight, playerPosY0, playerHeight) {

        this.ctx = ctx;
        this.width = 54;
        this.height = 54;

        this.posY = -gameHeight;
        this.posX = this.randomIntFromInterval(0, 600);

        this.velX = 3;

        this.allWords = [
            ["Pino", "Sandía", "Melón", "Hogar", "Mortadelo", "Diccionario", "Coche", "apapachar", "Ademán", "ataraxia", "arrebol", "Beldad", "Inefable"],
            ["Cloqueta", "Morido", "Motomami", "Madriz", "Helicotero", "Fragoneta", "dixlexia", "exalar", "pregaria", "transtornado", "costipado", "espectativa"]

        ];

        this.palabraAleatoria = this.allWords[Math.floor(Math.random() * 2)][Math.floor(Math.random() * this.allWords[1].length)];



    }

    draw() {

        let posRandom = Math.floor(Math.random() * 50)

        this.ctx.fillStyle = "blue";
        this.ctx.font = "35px Permanent Marker";
        this.ctx.fillText(this.palabraAleatoria, this.posX, this.posY);

        // .move
        this.move();
    }

    move() {
        this.posY += this.velX;

    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}