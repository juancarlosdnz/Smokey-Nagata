class Background {
    constructor(ctx, gameSize, gameSizeWidth, gameSizeHeight, score) {

        this.ctx = ctx
        this.gameSize = gameSize
        this.gameSize = { backgroundWidth: gameSizeWidth, backgroundHeight: gameSizeHeight }
        this.imageInstance = undefined
        this.score = score

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/fotoo.jpg"

    }
    drawBackground() {
        this.init()
        this.ctx.drawImage(this.imageInstance, 0, 0, this.gameSize.backgroundWidth, this.gameSize.backgroundHeight)
            //console.log("este es en background " + this.score)

    }

}