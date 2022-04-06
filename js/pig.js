class Pig {
    constructor(ctx, pigPosX, pigPosY, gameSize, gameSizeWidth, gameSizeHeight, pigSizeWidth, pigSizeHeight) {
        this.ctx = ctx
        this.pigPos = { x: pigPosX, y: pigPosY }
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.pigSize = { width: pigSizeWidth, height: pigSizeHeight }
        this.imageInstance = undefined
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/copCar.png"
    }
    drawPig() {
        this.ctx.drawImage(this.imageInstance, this.pigPos.x, this.pigPos.y, this.pigSize.width, this.pigSize.height)
        this.move()
    }
    move(){
        this.pigPos.x -= 2
    }
}