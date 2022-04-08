class Bullet {
    constructor(ctx, bulletPosX, bulletPosY, bulletWidth, bulletHeight, direction, gameSize, gameSizeWidth, gameSizeHeight) {
        this.ctx = ctx
        this.bulletPos = { x: bulletPosX, y: bulletPosY }
        this.bulletSize = { width: bulletWidth, height: bulletHeight }
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.imageInstance = undefined
        this.direction = direction
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/Nos.png"
    }

    drawBulletUp() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
    }
    drawBulletDown() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
    }
    drawBulletLeft() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
    }
    drawBulletRight() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
    }

    moveUp() {

        this.bulletPos.y -= 7
    }
    moveDown() {
        this.bulletPos.y += 7
    }
    moveLeft() {
        this.bulletPos.x -= 20
    }
    moveRight() {
        this.bulletPos.x += 20

    }
}