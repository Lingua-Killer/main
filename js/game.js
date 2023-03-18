const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    words: [],
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
        this.backgroundMusic.volume = 1
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
            this.backgroundMusic.play();
            this.framesCounter++;
            if (this.framesCounter > 3000) {
                this.framesCounter = 0;
            }
            this.clear()
            this.drawAll();
            this.generateWords();
            this.clearObstacles();
            if (this.isCollision()) {
                this.gameOver()
            }

        }, 1000 / this.FPS)

    },


    reset() {
        this.blackboard = new Blackboard(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.words = [];



    },

    drawAll() {
        this.blackboard.draw();
        this.player.draw(this.framesCounter);
        this.words.forEach(function(obs) {
            obs.draw();
        })
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)

    },

    generateWords() {
        if (this.framesCounter % 200 === 0) {
            this.words.push(new Word(this.ctx, this.height, this.player.posY0, this.player.height))
        }

    },

    clearWords() {
        this.words = this.words.filter(function(obs) {
            return obs.posX >= 0
        })

    },

    isCollision() {
        return this.words.some(obs => {
            return (
                this.player.posX + this.player.width >= obs.posX &&
                this.player.posY + this.player.height >= obs.posY &&
                this.player.posX <= obs.posX + obs.width
            )
        })
    },

    gameOver() {
        clearInterval(this.interval)
    }
}