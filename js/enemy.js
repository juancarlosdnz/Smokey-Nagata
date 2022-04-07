class Enemy {
    constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight, carPosX, carPosY) {
        this.ctx = ctx
        this.enemyPos = { x: enemyPosX, y: enemyPosY }
        this.enemySize = { width: enemyWidth, height: enemyHeight }
        this.carPosX = carPosX
        this.carPosY = carPosY
        this.imageInstance = undefined
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./img/jpcop.png"

    }
    drawEnemy() {
        this.ctx.drawImage(this.imageInstance, this.enemyPos.x, this.enemyPos.y, this.enemySize.width, this.enemySize.height)
    }
    moveAllways() {
        this.enemyPos.x += 3
    }
    carTracking(carCurrentX, carCurrentY) {

            if(this.enemyPos.y>=Game.gameSize.height/2){
                if (carCurrentX > this.enemyPos.x && carCurrentY > this.enemyPos.y) {
                    this.enemyPos.x += 7
                    this.enemyPos.y += 7
                } else if (carCurrentX > this.enemyPos.x && carCurrentY < this.enemyPos.y) {
                    this.enemyPos.x += 7
                    this.enemyPos.y -= 7
                } else if (carCurrentX < this.enemyPos.x && carCurrentY > this.enemyPos.y) {
                    this.enemyPos.x -= 7
                    this.enemyPos.y += 7
                } else if (carCurrentX < this.enemyPos.x && carCurrentY < this.enemyPos.y) {
                    this.enemyPos.x -= 7
                    this.enemyPos.y -= 7
                } else if (carCurrentY == this.enemyPos.y && carCurrentX > this.enemyPos.x) {
                    this.enemyPos.x += 7

                } else if (carCurrentY == this.enemyPos.y && carCurrentX < this.enemyPos.x) {
                    this.enemyPos.x -= 7

                } else if (carCurrentX == this.enemyPos.x && carCurrentY < this.enemyPos.y) {
                    this.enemyPos.y -= 7
                } else if (carCurrentX == this.enemyPos.x && carCurrentY > this.enemyPos.y) {
                    this.enemyPos.y += 7
                } else if (carCurrentX == this.enemyPos.x && carCurrentY == this.enemyPos.y) {
                    this.enemyPos.y += 0
                    this.enemyPos.x += 0
                } 
            }
            else {
                this.enemyPos.y += 2
                }
            

    }
}