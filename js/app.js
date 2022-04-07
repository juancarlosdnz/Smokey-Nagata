const initialScreen = document.querySelector('.inital-screen')

document.getElementById('start').onclick = () => {

        Game.init('canvas')
        initialScreen.classList.add('hidden')
    }
    //document.getElementById('start').onclick = () => className('hidden')
    // document.getElementById("start").className =
    //     document.getElementById("start").className.replace('hidden')