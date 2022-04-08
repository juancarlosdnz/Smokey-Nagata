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
    boostersNuke: [],
    boosterWings: [],
    boolPig: false,
    shootable: false,
    nagataDeath: false,
    spawnRate: 100,
    imageLevelUp :undefined,
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
        let positionX = [-60, 40, 150, 250, 350, 450, this.gameSize.width + 100]
        let positionY = [this.gameSize.height + 100]
        let randomPosX = positionX[Math.floor(Math.random() * positionX.length)]
        let randomPosY = positionY[Math.floor(Math.random() * positionY.length)];
        this.cops.push(new Enemy(this.ctx, randomPosX, randomPosY, 100, 50))
    },

    scoreCounter() {
        this.car.score++
    },


    gameOver() {
        clearInterval(this.intervalId)

        const canvas = document.querySelector('#canvas')
        const gameOver = document.querySelector('#game-over')
        canvas.classList.add('hidden')
        gameOver.classList.remove('hidden')
    },
    createBoosterNuke() {
        let positionX = [300, 500, 800, 1050, 1200, this.gameSize.width - 40]
        let randomPosX = positionX[Math.floor(Math.random() * positionX.length)]
        this.boostersNuke.push(new BoosterNuke(this.ctx, randomPosX, 0, this.gameSize, this.gameSize.width, this.gameSize.height, 100, 110))
    },
    createBoosterWings() {
        let positionX = [300, 500, 800, 1050, 1200, this.gameSize.width - 40]
        let randomPosX = positionX[Math.floor(Math.random() * positionX.length)]
        this.boosterWings.push(new BoosterWing(this.ctx, randomPosX, 0, this.gameSize, this.gameSize.width, this.gameSize.height, 90, 60))
    },
    levelUp() {
        if (this.car.score % 4 == 0) {
            this.spawnRate /= 2

        }
    },
    drawAll() {
        this.background.drawBackground()
        this.car.drawCar(this.shootable, this.frameIndex)
        this.car.createScore()
        if (this.frameIndex % 10 == true) {
            this.shootable = true
        } else if (this.frameIndex % 5 == 0) {
            this.shootable = false
        }
        this.clearBoosterOutOfBounds()
        this.checkEnemyColision()
        this.checkPigOutOfBounds()
        this.checkBoosterNukeColision()
        this.checkBoosterWingColision()
        if (this.frameIndex % this.spawnRate == 0) {
            console.log(this.spawnRate)
            this.createEnemy()
        }

        if (this.car.score>12 && this.frameIndex % 150 == 0) {
            this.createBoosterNuke()
        }
        if (this.car.score > 8 && this.frameIndex % 300 == 0) {
            this.createBoosterWings()
        }
       
        this.boosterWings.forEach((eachBooster) => {
            eachBooster.drawB()
        })
        this.boostersNuke.forEach((eachBooster) => {
            eachBooster.drawB()
        })
        this.cops.forEach((eachCop) => {
            eachCop.carTracking(this.car.carPos.x, this.car.carPos.y)
            eachCop.drawEnemy()
            this.checkBulletCollision()
        })
        this.pigs.forEach((eachPig) => {
            eachPig.pigsLeaving(this.car.carPos.x, this.car.carPos.y)
            eachPig.drawPig()
        })
        this.frameIndex++

    },
    pigScream() {
        let audio = new Audio("./audio/pigScream.mp3");
        audio.play()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    clearBoosterOutOfBounds() {
        this.boostersNuke.forEach(eachBooster => {
            if (eachBooster.boosterPos.x < 0 || eachBooster.boosterPos.x > this.gameSize.width || eachBooster.boosterPos.y < 0 || eachBooster.boosterPos.y > this.gameSize.height) {
                this.boostersNuke.splice(eachBooster, 1)

            }
        })
    },

    checkPigOutOfBounds() {
        this.pigs.forEach(eachPig => {
            if (eachPig.pigPos.x < 0 || eachPig.pigPos.x > this.gameSize.width || eachPig.pigPos.y < 0 || eachPig.pigPos.y > this.gameSize.height) {
                this.pigs.splice(eachPig, 1)
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
                    this.levelUp()
                    this.pigScream()
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
                    this.levelUp()
                    this.pigScream()
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
                    this.levelUp()
                    this.pigScream()
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
                    this.levelUp()
                    this.pigScream()
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
                this.nagataDeath = true
                this.gameOver()
            }
        })
    },
    checkBoosterNukeColision() {
        this.boostersNuke.forEach(booster => {
            if (this.car.carPos.x < booster.boosterPos.x + booster.boosterSize.width &&
                this.car.carPos.x + this.car.carSize.width > booster.boosterPos.x &&
                this.car.carPos.y < booster.boosterPos.y + booster.boosterSize.height &&
                this.car.carSize.height + this.car.carPos.y > booster.boosterPos.y) {
                let turbobomb = new Audio("./audio/turbobomb.mp3")
                turbobomb.play()
                this.boostersNuke.splice(booster, 1)
                this.car.score += this.cops.length
                this.cops = []

            }
        })
    },
    checkBoosterWingColision() {
        this.boosterWings.forEach(booster => {
            if (this.car.carPos.x < booster.boosterPos.x + booster.boosterSize.width &&
                this.car.carPos.x + this.car.carSize.width > booster.boosterPos.x &&
                this.car.carPos.y < booster.boosterPos.y + booster.boosterSize.height &&
                this.car.carSize.height + this.car.carPos.y > booster.boosterPos.y) {
                let audio = new Audio("./audio/helicoperhelicopter.mp3");
                // audio.volume = 0.1
                audio.play()
                this.boosterWings.splice(booster, 1)
                this.car.planeMode = true
                setTimeout(() => {
                    this.car.planeMode = false
                    this.car.carPos.y = this.gameSize.height / 1.8
                }, 5000);

            }
        })
    },

    start() {

        this.intervalId =
            setInterval(() => {
                this.clearAll()
                this.drawAll()
                if(this.car.score==0){
                    this.ctx.font = "50px Helvetica"
                    this.ctx.fillStyle = "White"
                    this.ctx.fillText(`WELCOME TO TOKYO`, this.gameSize.width/3.3, this.gameSize.height/2.5)
                }
                else if(this.car.score%8==0){
                    this.imageLevelUp = new Image()
                    this.imageLevelUp.src = "./img/levelup.png"
                    this.ctx.drawImage(this.imageLevelUp, this.gameSize.width/1.5, this.gameSize.height/6, 500,500)
                }
                
            }, 30)
    },
}