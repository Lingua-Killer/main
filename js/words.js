class Word {
    constructor(ctx, gameHeight, playerPosY0, playerHeight) {

        this.ctx = ctx;
        this.width = 54;
        this.height = 54;

        this.posY = -gameHeight;
        this.posX = 400;

        this.velX = 3;
        const correctWords = ["pino", "sandía", "melón", "hogar", "mortadelo", "diccionario"];
        const incorrectWords = ["cloqueta", "morido", "motomami", "Madriz", "helicotero", "Fragoneta"];

        var allWords = [
            ["Pino", "Sandía", "Melón", "Hogar", "Mortadelo", "Diccionario"],
            ["Cloqueta", "Morido", "Motomami", "Madriz", "Helicotero", "Fragoneta"]
        ];

        this.palabraAleatoria = allWords[Math.floor(Math.random() * 2)][Math.floor(Math.random() * allWords[1].length)];


    }

    draw() {



        this.ctx.fillStyle = "black";
        this.ctx.font = "35px Verdana";
        this.ctx.fillText(this.palabraAleatoria, this.posX, this.posY)


        // .move
        this.move();
    }

    move() {
        this.posY += this.velX;

    }
}