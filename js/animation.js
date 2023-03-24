class GameAnimation{
    constructor(ctx,w,h){
        this.ctx = ctx;
        this.width = w - 900;
        this.height = h- 600;

        this.image = new Image();
        this.image.src = "./images/linguakiller.png";

        this.posX = 800;
        this.posY = 400;

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);

    }
}