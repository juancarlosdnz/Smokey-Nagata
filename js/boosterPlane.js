class BoosterWing {
    constructor(ctx, boosterPosX, boosterPosY, gameSize, gameSizeWidth, gameSizeHeight, boosterSizeWidth, boosterSizeHeight) {
        this.ctx = ctx
        this.boosterPos = { x: boosterPosX, y: boosterPosY }
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.boosterSize = { width: boosterSizeWidth, height: boosterSizeHeight }
        this.imageInstance = undefined
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/wings.png"
    }
    drawB() {
        this.ctx.drawImage(this.imageInstance, this.boosterPos.x, this.boosterPos.y, this.boosterSize.width, this.boosterSize.height)
        this.move()
    }
    move() {
        this.boosterPos.y+=10
     }
}