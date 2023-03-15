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


    keys: {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    },

    init() {
        this.setContext();

        this.setDimensions();
        this.start();
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

            this.framesCounter++;
            if (this.framesCounter > 3000) {
                this.framesCounter = 0;
            }
            this.drawAll();

        }, 1000 / this.FPS)

    },


    reset() {
        // 1. Create blackboard
        this.blackboard = new Blackboard(this.ctx, this.width, this.height)

    },

    drawAll() {
        // 1. Draw background
        this.blackboard.draw();
    },

}