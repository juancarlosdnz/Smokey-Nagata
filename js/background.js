class Background {
    constructor(ctx, gameSize, gameSizeWidth, gameSizeHeight) {

        this.ctx = ctx
        this.gameSize = gameSize
        this.gameSize = { backgroundWidth: gameSizeWidth, backgroundHeight: gameSizeHeight }

    }
    init() {

    }
    drawBackground() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.gameSize.backgroundWidth, this.gameSize.backgroundHeight)
    }
}