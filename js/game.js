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
        console.log('EL CONTEXTO:', this.ctx)


        this.setDimensions()
        this.setEventListeners()
        this.createBackground()
        this.createCar()
        // this.createCop()
        this.start()
    },

    createCar() {
        this.car = new Car(this.ctx, this.gameSize.width / 2 - 200, this.gameSize.height / 2, 200, 70)
    },
    createBackground() {
        this.background = new Background(this.ctx, this.gameSize, 3000, 1000)
    },
    createCop() { },

    createBullet() { },

    checkColisions() { },

    gameOver() { },

    checkGameOver() { },

    drawAll() {
        this.background.drawBackground()
        this.car.drawCar()
    },


    setDimensions() {
        this.gameSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.width)
        this.canvasNode.setAttribute('height', this.gameSize.height)
    },

    setEventListeners() {
        document.onkeydown = event => {
            if (event.code === 'ArrowUp') this.car.moveUp()
            if (event.code === 'ArrowDown') this.car.moveDown()
            if (event.code === 'ArrowLeft') this.car.moveLeft()
            if (event.code === 'ArrowRight') this.car.moveRight()
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