class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, gameSize, gameSizeWidth, gameSizeHeight) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { width: carWidth, height: carHeight }
        this.bullets = []
        this.imageInstance = undefined
        this.init()


    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/nagatacar.png"
    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.width, this.carSize.height)
        this.bullets.forEach(bullet => bullet.drawBullet(this.setEventListeners()))

    }

    moveLeft() {
        this.carPos.x -= 24

    }
    moveRight() {
        this.carPos.x += 12

    }
    moveUp() {
        this.carPos.y -= 12
    }
    moveDown() {
        this.carPos.y += 12
    }
}