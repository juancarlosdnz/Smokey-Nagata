const Game = {
    name: 'Smokey Nagata',
    description: 'Canvas app for learning purposes',
    version: '1.0.0',
    author: 'pandma, juancarlosdnz',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { width: undefined, height: undefined },
    cops: [],
    car: undefined,
    background: undefined,
    frameIndex: 0,
    direction: undefined,
    intervalId: undefined,
    pigs: [],
    boolPig: false,
    //score: 0,
    //EL CHECK COLLISIONS LO COMPROBAMOS HERE .---------------------------------------------------------------------------------------
    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')


        this.setDimensions()
        this.createBackground()
        this.createCar()
        this.start()
    },
    setDimensions() {
        this.gameSize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.width)
        this.canvasNode.setAttribute('height', this.gameSize.height)
    },
    createCar() {
        this.car = new Car(this.ctx, this.gameSize.width / 2 - 200, this.gameSize.height / 2, 100, 50, this.gameSize, this.gameSize.width, this.gameSize.height, this.direction)
    },
    createBackground() {
        this.background = new Background(this.ctx, this.gameSize, 0, 0, this.gameSize.width, this.gameSize.height)
    },
    createEnemy() {
        let positionX = [-60, 40,150,250,350,450,this.gameSize.width + 100]
        let positionY = [this.gameSize.height + 100]
        let randomPosX = positionX[Math.floor(Math.random() * positionX.length)]
        let randomPosY = positionY[Math.floor(Math.random() * positionY.length)];
        this.cops.push(new Enemy(this.ctx, randomPosX, randomPosY, 100, 50))
    },
    createPig() {

    },

    scoreCounter() {
        this.car.score++
    },


    gameOver() {
        clearInterval(this.intervalId)
    },


    drawAll() {
        this.background.drawBackground()

        this.car.drawCar()
        this.car.createScore()
        this.checkEnemyColision()
        this.checkPigOutOfBounds()
        if (this.frameIndex % 40 == 0) {
            this.createEnemy()
        }
        this.cops.forEach((eachCop) => {
            eachCop.carTracking(this.car.carPos.x, this.car.carPos.y)
            eachCop.drawEnemy()
            this.checkBulletCollision()
        })
        this.pigs.forEach((eachPig) => {
            eachPig.pigsLeaving(this.car.carPos.x, this.car.carPos.y)
            eachPig.drawPig()
        })
        console.log(this.pigs)

        this.frameIndex++

    },



    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    checkPigOutOfBounds() {
        this.pigs.forEach(eachPig => {
            if (eachPig.pigPos.x < 0 || eachPig.pigPos.x > this.gameSize.width || eachPig.pigPos.y < 0 || eachPig.pigPos.y > this.gameSize.height) {
                this.pigs.splice(eachPig, 1)
                console.log(this.pigs)
            }
        })

    },

    checkBulletCollision() {
        this.car.bulletsUp.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    this.cops.splice(cop, 1)
                    this.car.bulletsUp.splice(bullet, 1)
                    this.pigs.push(new Pig(this.ctx, cop.enemyPos.x, cop.enemyPos.y, this.gameSize, this.gameSize.width, this.gameSize.height, 100, 100))
                    this.scoreCounter()

                }
            })
        })
        this.car.bulletsDown.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    this.cops.splice(cop, 1)
                    this.car.bulletsDown.splice(bullet, 1)
                    this.pigs.push(new Pig(this.ctx, cop.enemyPos.x, cop.enemyPos.y, this.gameSize, this.gameSize.width, this.gameSize.height, 100, 100))
                    this.scoreCounter()
                }
            })
        })
        this.car.bulletsRight.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    this.cops.splice(cop, 1)
                    this.car.bulletsRight.splice(bullet, 1)
                    this.pigs.push(new Pig(this.ctx, cop.enemyPos.x, cop.enemyPos.y, this.gameSize, this.gameSize.width, this.gameSize.height, 100, 100))


                    this.scoreCounter()

                }
            })
        })
        this.car.bulletsLeft.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    this.cops.splice(cop, 1)
                    this.car.bulletsLeft.splice(bullet, 1)
                    this.pigs.push(new Pig(this.ctx, cop.enemyPos.x, cop.enemyPos.y, this.gameSize, this.gameSize.width, this.gameSize.height, 100, 100))
                    this.scoreCounter()

                }
            })
        })

    },
    checkEnemyColision() {
        this.cops.forEach(cop => {
            if (this.car.carPos.x < cop.enemyPos.x + cop.enemySize.width &&
                this.car.carPos.x + this.car.carSize.width > cop.enemyPos.x &&
                this.car.carPos.y < cop.enemyPos.y + cop.enemySize.height &&
                this.car.carSize.height + this.car.carPos.y > cop.enemyPos.y) {
                console.log("car colision")
                this.gameOver()
            }
        })
    },

    start() {

        this.intervalId =
            setInterval(() => {
                this.clearAll()
                this.drawAll()
            }, 30)
    },
}