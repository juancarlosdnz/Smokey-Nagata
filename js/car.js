class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, gameSize, gameSizeWidth, gameSizeHeight, shootable) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.gameSize = { width: gameSizeWidth, height: gameSizeHeight }
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { width: carWidth, height: carHeight }
        this.bulletsUp = []
        this.bulletsDown = []
        this.bulletsRight = []
        this.bulletsLeft = []
        this.allBullets = []
        this.imageInstance = undefined
        this.score = 0
        this.shootable = shootable
        this.planeMode = false
        this.init()


    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/nagatacar.png"
        this.setEventListeners()
    }

    createScore() {
        this.ctx.font = "50px Helvetica"
        this.ctx.fillStyle = "White"
        this.ctx.fillText(`COPS TRANSFORMED: ${this.score}`, 50, 100)
            // console.log("este es en background " + this.score)

    }
    shotSound() {
        let audio = new Audio("./audio/shoot.mp3");
        audio.volume = 0.1
        audio.play()
        
    }

    setEventListeners() {
        document.onkeyup = event => {

            if (this.planeMode == false) {
                this.imageInstance.src = './img/nagatacar.png'
                if (event.code === 'ArrowUp') {

                    if (this.carPos.y < this.gameSize.height / 1.7) {
                        return
                    } else {
                        this.moveUp()
                    }
                    if (this.carPos.y < 0) {
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
                if (this.shootable == true) {

                    if (event.code === 'KeyW') {
                        this.shootBulletUp()
                        this.shotSound()



                    }
                    if (event.code === 'KeyS') {

                        this.shootBulletDown()
                        this.shotSound()

                    }
                    if (event.code === 'KeyD') {

                        this.shootBulletRight()
                        this.shotSound()

                    }
                    if (event.code === 'KeyA') {

                        this.shootBulletLeft()
                        this.shotSound()

                    }

                }

            } else if (this.planeMode == true) {

                this.imageInstance.src = './img/bebe.png'
                if (event.code === 'ArrowUp') {

                    if (this.carPos.y < 0) {
                        return
                    } else {
                        this.moveUp()
                    }
                    this.imageInstance.src = './img/bebe.png'
                    if (this.carPos.y < 0) {
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
                if (this.shootable == true) {

                    if (event.code === 'KeyW') {
                        this.shootBulletUp()
                        this.shotSound()

                    }
                    if (event.code === 'KeyS') {

                        this.shootBulletDown()
                        this.shotSound()

                    }
                    if (event.code === 'KeyD') {

                        this.shootBulletRight()
                        this.shotSound()

                    }
                    if (event.code === 'KeyA') {

                        this.shootBulletLeft()
                        this.shotSound()

                    }

                }
            }
        }

    }

    drawCar(shootable) {
        this.shootable = shootable
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.width, this.carSize.height)
        this.bulletsUp.forEach(bullet => bullet.drawBulletUp(this.setEventListeners()))
        this.allBullets.push(this.bulletsUp)
        this.bulletsDown.forEach(bullet => bullet.drawBulletDown(this.setEventListeners()))
        this.allBullets.push(this.bulletsDown)
        this.bulletsLeft.forEach(bullet => bullet.drawBulletLeft(this.setEventListeners()))
        this.allBullets.push(this.bulletsLeft)
        this.bulletsRight.forEach(bullet => bullet.drawBulletRight(this.setEventListeners()))
        this.allBullets.push(this.bulletsRight)

        this.bulletsUp.forEach(eachBullet => {
            eachBullet.moveUp()
            eachBullet.drawBulletUp()
            this.clearBullets()
        })
        this.bulletsDown.forEach(eachBullet => {
            eachBullet.moveDown()
            eachBullet.drawBulletDown()
            this.clearBullets()
        })
        this.bulletsLeft.forEach(eachBullet => {
            eachBullet.moveLeft()
            eachBullet.drawBulletLeft()
            this.clearBullets()
        })
        this.bulletsRight.forEach(eachBullet => {
            eachBullet.moveRight()
            eachBullet.drawBulletRight()
            this.clearBullets()
        })

    }
    clearBullets() {

        this.bulletsUp.forEach(eachBullet => {
            if (eachBullet.bulletPos.x < 0 || eachBullet.bulletPos.x > this.gameSize.width || eachBullet.bulletPos.y < 0 || eachBullet.bulletPos.y > this.gameSize.height) {
                this.bulletsUp.splice(eachBullet, 1)
                console.log(this.bulletsUp)
            }
        })
        this.bulletsDown.forEach(eachBullet => {
            if (eachBullet.bulletPos.x < 0 || eachBullet.bulletPos.x > this.gameSize.width || eachBullet.bulletPos.y < 0 || eachBullet.bulletPos.y > this.gameSize.height) {
                this.bulletsDown.splice(eachBullet, 1)
                console.log(this.bulletsDown)
            }
        })
        this.bulletsLeft.forEach(eachBullet => {
            if (eachBullet.bulletPos.x < 0 || eachBullet.bulletPos.x > this.gameSize.width || eachBullet.bulletPos.y < 0 || eachBullet.bulletPos.y > this.gameSize.height) {
                this.bulletsLeft.splice(eachBullet, 1)
                console.log(this.bulletsLeft)
            }
        })
        this.bulletsRight.forEach(eachBullet => {
            if (eachBullet.bulletPos.x < 0 || eachBullet.bulletPos.x > this.gameSize.width || eachBullet.bulletPos.y < 0 || eachBullet.bulletPos.y > this.gameSize.height) {
                this.bulletsRight.splice(eachBullet, 1)
                console.log(this.bulletsRight)
            }
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
        this.bulletsUp.push(new Bullet(this.ctx, this.carPos.x + 30, this.carPos.y - 25, 30, 30))
    }
    shootBulletDown() {
        this.bulletsDown.push(new Bullet(this.ctx, this.carPos.x + 30, this.carPos.y + 30, 30, 30))
    }
    shootBulletLeft() {
        this.bulletsLeft.push(new Bullet(this.ctx, this.carPos.x - this.carSize.width / 2 + 20, this.carPos.y, 30, 30))
    }
    shootBulletRight() {
        this.bulletsRight.push(new Bullet(this.ctx, this.carPos.x + 60, this.carPos.y, 30, 30))
    }
}