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
        TOP: 38,
        SPACE: 32
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
        this.width = window.innerWidth;
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