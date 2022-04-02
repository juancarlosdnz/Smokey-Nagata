class car {
    constructor(ctx, gameSize, carPosX, carPosY, carWidth, carHeight) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { width: carWidth, height: carHeight }
        this.imageInstance = undefined
        this.init()


    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/nagatacar.png"
    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.width, this.carSize.height)
    }
    moveLeft() {}
    moveRigth() {}
    moveUp() {}
    moveDown() {}




}