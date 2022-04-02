class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight) {
        this.ctx = ctx
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
        console.log(this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.width, this.carSize.height))
    }
    moveLeft() {
        this.carPos.x -= 30
    }
    moveRight() {
        this.carPos.x += 30
    }
    moveUp() {
        this.carPos.y -= 30
    }
    moveDown() {
        this.carPos.y += 30
    }
    




}