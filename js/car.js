class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, gameSize, gameSizeWidth, gameSizeHeight, direction) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { width: carWidth, height: carHeight }
        this.bulletsUp = []
        this.bulletsDown = []
        this.bulletsRight = []
        this.bulletsLeft = []
        this.imageInstance = undefined
        this.init()


    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/nagatacar.png"
        this.setEventListeners()
    }
    setEventListeners() {
        document.onkeyup = event => {
            if (event.code === 'ArrowUp') {
                if (this.carPos.y < 10) {
                    return
                } else {
                    this.moveUp()
                }
            }
            if (event.code === 'ArrowDown') {
                if (this.carPos.y >= this.gameSize.height - this.carSize.height) {
                    return
                } else {
                    this.moveDown()
                }
            }
            if (event.code === 'ArrowLeft') {
                if (this.carPos.x < 5) {
                    return
                } else {
                    this.moveLeft()
                }
            }
            if (event.code === 'ArrowRight') {


                if (this.carPos.x >= this.gameSize.width - this.carSize.width) {
                    return
                } else {
                    this.moveRight()
                }
            }

            if (event.code === 'KeyW') {
                this.shootBulletUp()
                this.bulletsUp.moveUp()
                console.log(this.bulletsUp)

            }
            if (event.code === 'KeyS') {
                console.log('S')
                this.shootBulletDown()
                this.bulletsDown.moveDown()
            }
            if (event.code === 'KeyD') {
                console.log('D')
                this.shootBulletRight()
                this.bulletsRight.moveRight()
            }
            if (event.code === 'KeyA') {
                console.log('A')
                this.shootBulletLeft()
                this.bulletsLeft.moveLeft()
            }
        }

    }



    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.width, this.carSize.height)
        this.bulletsUp.forEach(bullet => bullet.drawBulletUp(this.setEventListeners()))
        this.bulletsDown.forEach(bullet => bullet.drawBulletDown(this.setEventListeners()))
        this.bulletsLeft.forEach(bullet => bullet.drawBulletLeft(this.setEventListeners()))
        this.bulletsRight.forEach(bullet => bullet.drawBulletRight(this.setEventListeners()))

        this.bulletsUp.forEach(eachBullet => {
            eachBullet.moveUp()
            eachBullet.drawBulletUp()
        })
        this.bulletsDown.forEach(eachBullet => {
            eachBullet.moveDown()
            eachBullet.drawBulletDown()
        })
        this.bulletsLeft.forEach(eachBullet => {
            eachBullet.moveLeft()
            eachBullet.drawBulletLeft()
        })
        this.bulletsRight.forEach(eachBullet => {
            eachBullet.moveRight()
            eachBullet.drawBulletRight()
        })

    }

    moveLeft() {
        this.carPos.x -= 104

    }
    moveRight() {
        this.carPos.x += 52

    }
    moveUp() {
        this.carPos.y -= 40
    }
    moveDown() {
        this.carPos.y += 40
    }
    shootBulletUp() {
        this.bulletsUp.push(new Bullet(this.ctx, this.carPos.x, this.carPos.y, 30, 30))
    }
    shootBulletDown() {
        this.bulletsDown.push(new Bullet(this.ctx, this.carPos.x, this.carPos.y, 30, 30))
    }
    shootBulletLeft() {
        this.bulletsLeft.push(new Bullet(this.ctx, this.carPos.x, this.carPos.y, 30, 30))
    }
    shootBulletRight() {
        this.bulletsRight.push(new Bullet(this.ctx, this.carPos.x, this.carPos.y, 30, 30))
    }
}