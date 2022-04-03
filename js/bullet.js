class Bullet {
    constructor(ctx, bulletPosX, bulletPosY, bulletWidth, bulletHeight, carPosX, carPosY, gameSize, gameSizeWidth, gameSizeHeight,direction) {
        this.ctx = ctx
        this.bulletPos = { x: bulletPosX, y: bulletPosY }
        this.bulletSize = { width: bulletWidth, height: bulletHeight }
        this.carPosX = carPosX
        this.carPosY = carPosY
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.bulletVel = { x: 10, y: 2 }
        // this.ballVel = { x: Math.random() * 10 + 5, y: 1 }
        this.imageInstance = undefined
        this.direction = direction
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/Nos.png"
    }

    drawBullet() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
        this.move(this.direction)
    }

    move(side) {
        if (side === 'up') {
            this.bulletPos.y -= 2
        }

        if (side === 'down') {
            this.bulletPos.y += 2
        }

        if (side === 'left') {
            this.bulletPos.x -= 2
        }

        if (side === 'right') {
            this.bulletPos.x += 2

        }
    }

}