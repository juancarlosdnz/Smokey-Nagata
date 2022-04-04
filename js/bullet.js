class Bullet {
    constructor(ctx, bulletPosX, bulletPosY, bulletWidth, bulletHeight,direction, gameSize, gameSizeWidth, gameSizeHeight) {
        this.ctx = ctx
        this.bulletPos = { x: bulletPosX, y: bulletPosY }
        this.bulletSize = { width: bulletWidth, height: bulletHeight }
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

    drawBulletUp() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
        console.log('up')
    }
    drawBulletDown() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
        console.log('down')

    }
    drawBulletLeft() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
        console.log('left')

    }
    drawBulletRight() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
        console.log('right')

    }

    move(side) {
        if (side === 'up') {
            console.log('Entré a Up')
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