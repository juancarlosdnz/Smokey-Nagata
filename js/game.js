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
    enemy: undefined,
    bullet: undefined,
    frameIndex: 0,

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')


        this.setDimensions()
        this.setEventListeners()
        this.createBackground()
        this.createBullet()

        this.createCar()
        this.createEnemy()
            // this.createCop()
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
        this.car = new Car(this.ctx, this.gameSize.width / 2 - 200, this.gameSize.height / 2, 100, 50, this.gameSize, this.gameSize.width, this.gameSize.height)
    },
    createBackground() {
        this.background = new Background(this.ctx, this.gameSize, this.gameSize.width, this.gameSize.height)
    },
    createEnemy() {
        this.enemy = new Enemy(this.ctx, -40, 200, 100, 50, this.car.carPos.x, this.car.carPos.y)
    },

    createBullet() {
        this.bullet = new Bullet(this.ctx, 100, 100, 30, 30)
    },

    checkColisions() {},

    gameOver() {},

    checkGameOver() {},

    drawAll() {
        this.background.drawBackground()
        this.bullet.drawBullet()
        this.car.drawCar()
        this.enemy.drawEnemy()
        this.enemy.carTracking(this.car.carPos.x, this.car.carPos.y)
    },

    setEventListeners() {
        document.onkeydown = event => {
            if (event.code === 'ArrowUp') {
                if (this.car.carPos.y < 10) {
                    return
                } else {
                    this.car.moveUp()
                }
            }
            if (event.code === 'ArrowDown') {
                if (this.car.carPos.y >= this.gameSize.height - this.car.carSize.height) {
                    return
                } else {
                    this.car.moveDown()
                }
            }
            if (event.code === 'ArrowLeft') {
                if (this.car.carPos.x < 5) {
                    return
                } else {
                    this.car.moveLeft()
                }
            }
            if (event.code === 'ArrowRight') {


                if (this.car.carPos.x >= this.gameSize.width - this.car.carSize.width) {
                    return
                } else {
                    this.car.moveRight()
                }
            }
            if (event.code === 'KeyW') {
                this.bullet.shootUp()
            }
            if (event.code === 'KeyS') {
                this.bullet.shootDown()
            }
            if (event.code === 'KeyD') {
                this.bullet.shootRight()
            }
            if (event.code === 'KeyS') {
                this.bullet.shootDown()
            }
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },


    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 30)
    },



}