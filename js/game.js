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
    gameAnimation: undefined,
    wordInstace: undefined,
    life: 100,
    score: 0,


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
        this.backgroundMusic.volume = 1;
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
        // no ser funciona es del video
        this.gameAnimation = new GameAnimation(this.ctx, this.width, this.height);
        this.gameAnimation.draw();

        this.reset();

        this.interval = setInterval(() => {
            this.backgroundMusic.play();
            this.framesCounter++;
            if (this.framesCounter > 3000) {
                this.framesCounter = 0;
            }
            this.clear()
            this.drawAll();
            this.generateWords();
            console.log("Existe aqui word instance -> " + this.wordInstace);
            if (this.isCollision()) {
                console.log("Preparing impact");
                let explosionGif2 = new Image();
                explosionGif2.src = "./images/explosion.gif";
                this.ctx.drawImage(explosionGif2, this.player.posX - 175, this.player.posY - 200, 700, 700);
                this.life -= 1;
                if(this.life < 0) {
                    this.life = 0;
                }
                this.sleep(710).then(() => {
                    if(this.life <= 0){
                        console.log("Game Over no hay mas vidas")
                        this.gameOver();
                    } else {
                        console.log("Quedan " + this.life + "vidas");
                    }
                });
            } else if(this.isGoodWordCollision()){
                 this.score += 1;
            }

        }, 600 / this.FPS);

    },


    reset() {
        this.blackboard = new Blackboard(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.words = [];
    },

    drawAll() {
        this.blackboard.draw();
        // this.gameAnimation.draw();
        this.player.draw(this.framesCounter);
        this.words.forEach(function (obs) {
            obs.draw();
        });
    
        this.drawGameDashboard();
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)

    },

    generateWords() {
        this.wordInstace = new Word(this.ctx, this.height, this.player.posY, this.player.height);
        if (this.framesCounter % 200 === 0) {
            this.words.push(this.wordInstace);

        }

    },

    clearWords() {
        this.words = this.words.filter(function (obs) {
            return obs.posX >= 0
        })

    },

    isCollision() {
        let badWords = this.wordInstace.allWords[1];

        return this.words.some(word => {

            console.log("Word to be compared -> " + word.palabraAleatoria);

            if (badWords.includes(word.palabraAleatoria)) {
                console.log("It's a bad word")
                return (
                    this.player.posX <= word.posX + (word.width) && // colisión horizontal izquierda
                    this.player.posX + this.player.width >= word.posX && // colisión horizontal derecha
                    (this.player.posY + 70) <= word.posY + word.height && // colisión vertical inferior
                    this.player.height + this.player.posY >= word.posY
                );
            } else {
                console.log("It's a good word");
                return false;
            }

        });

    },

    isGoodWordCollision() {
        let goodWords = this.wordInstace.allWords[0];

        return this.words.some(word => {

            console.log("Good to be compared -> " + word.palabraAleatoria);

            if (goodWords.includes(word.palabraAleatoria)) {
                console.log("It's a good word")
                return (
                    this.player.posX <= word.posX + (word.width) && // colisión horizontal izquierda
                    this.player.posX + this.player.width >= word.posX && // colisión horizontal derecha
                    (this.player.posY + 70) <= word.posY + word.height && // colisión vertical inferior
                    this.player.height + this.player.posY >= word.posY
                );
            } else {
                console.log("It's a bad word");
                return false;
            }

        });

    },

    gameOver() {
        clearInterval(this.interval);
    },

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    },

    drawGameDashboard(){

        let dashboard = `Health: ${this.life}  Score: ${this.score}`;  
        this.ctx.fillStyle = "red";
        this.ctx.font = "50px Permanent Marker";
        console.log(dashboard);
        this.ctx.fillText(dashboard, 825, 400);
    }
}