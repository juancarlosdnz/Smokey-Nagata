const game = {
    name: 'Smokey Nagata',
    description: 'Canvas app for learning purposes',
    version: '1.0.0',
    author: 'pandma, juancarlosdnz',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    cops: [],

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)


        this.setDimensions()
        this.setEventListeners()
        this.createBackground()
        this.createCar()
        this.createCop()
        this.start()
    },

    createCar() {

    },
    createBackground() {

    },
    createCop() {},

    createBullet() {},

    checkColisions() {},

    gameOver() {},

    checkGameOver() {},

    drawAll() {

    },


    setDimensions() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    setEventListeners() {}, //crontoles de acciones del videojuego


    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 20)
    },



    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

}