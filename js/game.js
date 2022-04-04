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
        this.background = new Background(this.ctx, this.gameSize, this.gameSize.width, this.gameSize.height)
    },
    createEnemy() {

        let positionX = [-60, this.gameSize.width + 100]
        let positionY = [-100, this.gameSize.height + 100]
        let randomPosX = positionX[Math.floor(Math.random() * positionX.length)]
        let randomPosY = positionY[Math.floor(Math.random() * positionY.length)];
        this.cops.push(new Enemy(this.ctx, randomPosX, randomPosY, 100, 50))
    },


    gameOver() { },

    checkGameOver() { },

    drawAll() {
        this.background.drawBackground()
        this.car.drawCar()
        if (this.frameIndex % 80 == 0) {
            this.createEnemy()
        }
        this.cops.forEach((eachCop) => {

            eachCop.carTracking(this.car.carPos.x, this.car.carPos.y)
            eachCop.drawEnemy()
            this.checkBulletCollision()

        })
        this.frameIndex++
    },



    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    checkBulletCollision() {

        this.car.bulletsUp.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    console.log("epaaaaa matame")
                    this.cops.splice(cop,1)
                    this.car.bulletsUp.splice(bullet,1)
                }
            })
        })
        this.car.bulletsDown.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    console.log("epaaaaa matame")
                    this.cops.splice(cop, 1)
                    this.car.bulletsDown.splice(bullet, 1)

                }
            })
        })
        this.car.bulletsRight.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    console.log("epaaaaa matame")
                    this.cops.splice(cop, 1)
                    this.car.bulletsRight.splice(bullet, 1)

                }
            })
        })
        this.car.bulletsLeft.forEach(bullet => {
            this.cops.forEach(cop => {
                if (bullet.bulletPos.x < cop.enemyPos.x + cop.enemySize.width &&
                    bullet.bulletPos.x + bullet.bulletSize.width > cop.enemyPos.x &&
                    bullet.bulletPos.y < cop.enemyPos.y + cop.enemySize.height &&
                    bullet.bulletSize.height + bullet.bulletPos.y > cop.enemyPos.y) {
                    console.log("epaaaaa matame")
                    this.cops.splice(cop, 1)
                    this.car.bulletsLeft.splice(bullet, 1)

                }
            })
        })



        // if (rect1.x < rect2.x + rect2.width &&
        //     rect1.x + rect1.width > rect2.x &&
        //     rect1.y < rect2.y + rect2.height &&
        //     rect1.height + rect1.y > rect2.y) {
        //         //que borre el coche
        // }
    },


    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 30)
    },




}