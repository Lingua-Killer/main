const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    obstacles: [],
    backgroundMusic: undefined,


    keys: {
        UP: 38,
        LEFT: 37,
        RIGHT: 39,
    },

    init() {
        this.setContext();
        this.setDimensions();
        this.start();
        this.backgroundMusic = new Audio('./audio/music.mp3');
        this.backgroundMusic.volume = 0.3
    },
    setContext() {
        this.canvas = document.querySelector("#blackboard");
        this.ctx = this.canvas.getContext("2d");
    },

    setDimensions() {
        this.width = window.innerWidth / 2;
        this.height = window.innerHeight;

        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
    },

    start() {

        this.reset()

        this.interval = setInterval(() => {
            this.backgroundMusic.play();
            this.framesCounter++;
            if (this.framesCounter > 3000) {
                this.framesCounter = 0;
            }
            this.drawAll();

        }, 1000 / this.FPS)

    },


    reset() {
        this.blackboard = new Blackboard(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height, this.keys);


    },

    drawAll() {
        this.blackboard.draw();
        this.player.draw(this.framesCounter);

    },

}