class Background {
    constructor(ctx, gameSize, gameSizeWidth, gameSizeHeight) {

        this.ctx = ctx
        this.gameSize = gameSize
        this.gameSize = { backgroundWidth: gameSizeWidth, backgroundHeight: gameSizeHeight }
        this.imageInstance = undefined

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/cars.jpg"

    }
    drawBackground() {
        this.init()
        this.ctx.drawImage(this.imageInstance, 0, 0, this.gameSize.backgroundWidth, this.gameSize.backgroundHeight)
    }
}