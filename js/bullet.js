class Bullet {
    constructor(ctx, bulletPosX, bulletPosY, bulletWidth, bulletHeight, carPosX, carPosY, gameSize, gameSizeWidth, gameSizeHeight) {
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

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/Nos.png"
    }

    drawBullet() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.width, this.bulletSize.height)
            //this.shootUp()
        this.setEventListeners()

        //console.log("bullet")
    }
    setEventListeners() {
        document.onkeydown = event => {
            if (event.code === 'KeyW') {
                this.shootUp()
            }
            if (event.code === 'KeyS') {
                this.shootDown()
            }
            if (event.code === 'KeyD') {
                this.shootRight()
            }
            if (event.code === 'KeyS') {
                this.shootDown()
            }
        }
    }
    shootUp() {
        this.bulletPos.y--
    }

    shootDown() {}

    shootRigth() {}

    shootLeft() {}
}