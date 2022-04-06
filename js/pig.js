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
        this.imageInstance.src = "./img/pig.png"
    }
    drawPig() {
        this.ctx.drawImage(this.imageInstance, this.pigPos.x, this.pigPos.y, this.pigSize.width, this.pigSize.height)
    }
    pigsLeaving(carCurrentX, carCurrentY) {


        if (carCurrentX > this.pigPos.x && carCurrentY > this.pigPos.y) {
            this.pigPos.x -= 3
            this.pigPos.y -= 3
        } else if (carCurrentX > this.pigPos.x && carCurrentY < this.pigPos.y) {
            this.pigPos.x -= 3
            this.pigPos.y -= 3
        } else if (carCurrentX < this.pigPos.x && carCurrentY > this.pigPos.y) {
            this.pigPos.x += 3
            this.pigPos.y -= 3
        } else if (carCurrentX < this.pigPos.x && carCurrentY < this.pigPos.y) {
            this.pigPos.x += 3
            this.pigPos.y -= 3
        } else if (carCurrentY == this.pigPos.y && carCurrentX > this.pigPos.x) {
            this.pigPos.x -= 4

        } else if (carCurrentY == this.pigPos.y && carCurrentX < this.pigPos.x) {
            this.pigPos.x += 4

        } else if (carCurrentX == this.pigPos.x && carCurrentY < this.pigPos.y) {
            this.pigPos.y += 3
        } else if (carCurrentX == this.pigPos.x && carCurrentY > this.pigPos.y) {
            this.pigPos.y -= 3
        }

    }
}