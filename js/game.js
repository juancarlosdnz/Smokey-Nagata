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
    bullets: [],
    frameIndex: 0,
    direction: undefined,

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')


        this.setDimensions()
        this.setEventListeners()
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
    
        let positionX =[-60,this.gameSize.width+100]
        let positionY=[-100,this.gameSize.height+100]
        let randomPosX = positionX[Math.floor(Math.random() * positionX.length)]
        let randomPosY = positionY[Math.floor(Math.random() * positionY.length)];
        this.cops.push(new Enemy(this.ctx,randomPosX, randomPosY, 100, 50))
    },

    checkColisions() { },

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

        })
        this.frameIndex++
    },

    setEventListeners() {
        document.onkeyup = event => {
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
                this.direction = 'up'
            }
            if (event.code === 'KeyS') {
                console.log('S')
                this.direction = 'down'
                this.direction
            }
            if (event.code === 'KeyD') {
                console.log('D')
                this.direction = 'right'
                this.direction
            }
            if (event.code === 'KeyA') {
                console.log('A')
                this.direction = 'left'
            }
        }
        return this.direction

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