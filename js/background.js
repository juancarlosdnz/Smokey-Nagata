class Background {
    constructor(ctx, gameSize, backgruondPosX, backgroundPosY, gameSizeWidth, gameSizeHeight) {

        this.ctx = ctx
        this.gameSize = gameSize
        this.backgroundPos = { x: backgruondPosX, y: backgroundPosY }
        this.gameSize = { backgroundWidth: gameSizeWidth, backgroundHeight: gameSizeHeight }
        this.imageInstance = undefined
            //this.score = score

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/back.jpg"

    }
    drawBackground() {
            this.init()
            this.ctx.drawImage(this.imageInstance, this.backgroundPos.x, this.backgroundPos.y, this.gameSize.backgroundWidth, this.gameSize.backgroundHeight)
            this.ctx.drawImage(this.imageInstance, this.backgroundPos.x + this.gameSize.backgroundWidth, this.backgroundPos.y, this.gameSize.backgroundWidth, this.gameSize.backgroundHeight)
            this.move()


            //console.log("este es en background " + this.score)

        }
        // draw() {
        //     this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        //     this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
        // }

    move() {
        if (this.backgroundPos.x <= -this.gameSize.backgroundWidth) {
            this.backgroundPos.x = 0;
        }
        this.backgroundPos.x -= 10

    }
}