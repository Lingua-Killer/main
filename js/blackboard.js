class Blackboard {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.image = new Image();
        this.image.src = "./images/blackboard.jpg";

        this.posX = 0;
        this.posY = 0;

        this.velX = 2;
    }

    draw() {
        // .drawImage(image, posX, posY, w, h);
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
        // .move
        this.move();

    }


    move() {
        // Change this.posX (Move horizontally)
        this.posX -= this.velX;
        if (this.posX <= -this.width) {
            this.posX = 0;
        }
    }
}