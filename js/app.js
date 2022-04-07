const initialScreen = document.querySelector('.inital-screen')
const gameOver = document.querySelector('#game-over')
const canvas = document.querySelector('#canvas')
    //gameOver.classList.add('hidden')


document.getElementById('start').onclick = () => {

    Game.init('canvas')
    initialScreen.classList.add('hidden')
}
document.getElementById('restart').onclick = () => {

    // Game.init('canvas')
    // canvas.classList.remove('hidden')
    // gameOver.classList.remove('game-over')
    location.reload()

}


//document.getElementById('start').onclick = () => className('hidden')
// document.getElementById("start").className =
//     document.getElementById("start").className.replace('hidden')