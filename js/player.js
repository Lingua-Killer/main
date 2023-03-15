class Player {

    constructor(ctx, gameW, gameH, keys) {

        this.ctx = ctx;

        this.gameWidth = gameW;
        this.gameHeight = gameH;

        this.width = 100;
        this.height = 100;

        this.image = new Image();
        this.image.src = "./images/pacman.png";
        this.image.frames = 12;
        this.image.framesIndex = 0;

        this.posX = 25;
        this.posY = this.gameHeight - this.height - 35;
        this.posY0 = this.posY;

        this.velY = 1;
        this.gravity = 0.4;

        this.keys = keys;

        this.bullets = [];

        this.setListeners();
    }

    draw(framesCounter) {

        this.ctx.drawImage(
            this.image,
            this.image.width / this.image.frames * this.image.framesIndex,
            0,
            this.image.width / this.image.frames,
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )

        // 2. Animate player
        this.animate(framesCounter);
        // 3. Move player
        this.move();
    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.image.framesIndex++;
        }

        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0
        }
    }

    move() {
        if (this.posY < this.posY0) {
            this.posY += this.velY;
            this.velY += this.gravity;
        } else {
            this.posY = this.posY0;
            this.velY = 1;
        }
    }

    up() {
        this.posY -= 20;
        this.velY -= 5;
    }

    right() {
        this.posX -= -20;
        // this.vel -= 1;
    }
    left() {
        this.posX -= 20;
        // this.velY -= -1;
    }

    setListeners() {

        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.UP:
                    if (this.posY >= this.velY) {
                        this.up();
                    }
                    break;
                case this.keys.RIGHT:
                    if (this.posX <= 583) {
                        this.right();
                    }
                    break;
                case this.keys.LEFT:
                    if (this.posX >= 30) {
                        this.left();
                    }
                    break;
            }
        });
    }

}