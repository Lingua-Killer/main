class GameAnimation {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.width = w - 900;
        this.height = h - 600;
        this.video;
        //this.video = document.getElementById('video');
        this.posX = 800;
        this.posY = 300;

        this.image = new Image();
        this.image.src = "./images/clouds2.png";

    }


    draw() {
        this.video = document.createElement("video");
        console.log("Type del context -> " + this.ctx === undefined);
        this.video.src = "./video/cloqueta.mp4";
        console.log("Video -> " + typeof this.video);
        this.video.play();
        this.ctx.drawImage(this.video, this.posX, this.posY, this.width, this.height);
       // this.update(this.ctx, this.video, this.posX, this.posY, this.width, this.height);
        // this.video.addEventListener('loadeddata', () => {
        //     this.video.play();  // start playing
        //     //this.update(this.ctx, this.video); //Start rendering
        //     // this.ctx.drawImage(this.video, this.posX, this.posY, this.width, this.height);  
        //     // requestAnimationFrame(this.update(this.ctx, this.video))
        //     this.update();
        // });
    }

    // update(context, video, posX, posY, width, height) {
    //     context.drawImage(video, posX, posY, width, height);
    //     requestAnimationFrame(this.update); // wait for the browser to be ready to present another animation fram.       
    // }


}
