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
        this.background = new Background(this.ctx,this.gameSize, this.gameSize.width, this.gameSize.height)
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

    }, //crontoles de acciones del videojuego

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