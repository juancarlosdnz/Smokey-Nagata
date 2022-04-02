const Game = {
    name: 'Smokey Nagata',
    description: 'Canvas app for learning purposes',
    version: '1.0.0',
    author: 'pandma, juancarlosdnz',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { width: undefined, height: undefined },
    cops: [],
    car: undefined,
    background: undefined,

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')


        this.setDimensions()
        this.setEventListeners()
        this.createBackground()
        this.createCar()
        // this.createCop()
        this.start()
    },
    setDimensions() {
        this.gameSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.width)
        this.canvasNode.setAttribute('height', this.gameSize.height)
    },
    createCar() {
        this.car = new Car(this.ctx, this.gameSize.width / 2 - 200, this.gameSize.height / 2, 180, 70, this.gameSize, this.gameSize.width, this.gameSize.height)
    },
    createBackground() {
        this.background = new Background(this.ctx, this.gameSize, this.gameSize.width, this.gameSize.height)
    },
    createCop() { },

    createBullet() { },

    checkColisions() { },

    gameOver() { },

    checkGameOver() { },

    drawAll() {
        this.background.drawBackground()
        this.car.drawCar()
        console.log(this.gameSize.width)
    },

    setEventListeners() {
        document.onkeydown = event => {
            if (event.code === 'ArrowUp') {
                if (this.car.carPos.y < 10) {
                    return
                } else {
                    this.car.moveUp()
                }
            }
            if (event.code === 'ArrowDown') {
                if (this.car.carPos.y >= this.gameSize.height - this.car.carSize.height) {
                    return
                } else {
                    this.car.moveDown()
                }
            }
            if (event.code === 'ArrowLeft') {
                if (this.car.carPos.x < 5) {
                    return
                } else {
                    this.car.moveRight()
                }
            }
            if (event.code === 'ArrowRight') {


                if (this.car.carPos.x >= this.gameSize.width - this.car.carSize.width) {
                    return
                } else {
                    this.car.moveRight()
                }
            }
            if (event.code === 'ArrowRight' && 'ArrowUp') {
                this.car.moveRight()
                this.car.moveUp()
            }
            if (event.code === 'ArrowRight' && 'ArrowDown') {
                this.car.moveRight()
                this.car.moveDown()
            }
            if (event.code === 'ArrowLeft' && 'ArrowUp') {
                this.car.moveLeft()
                this.car.moveUp()
            }
            if (event.code === 'ArrowLeft' && 'ArrowDown') {
                this.car.moveLeft()
                this.car.moveDown()
            }
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },


    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 30)
    },



}