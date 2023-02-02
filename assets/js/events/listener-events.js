import GameControl from "./game-control.js";
import Renders from "../content/renders.js"

class StartEvents{
    constructor(){
        this.startButton = document.getElementById("startBtn")
        this.buttonsGame = document.querySelectorAll(".choose-section .buttonGame");
    }

    listenerEvents(){
        this.startButton.addEventListener("click", e =>{
            const currentElement = e.currentTarget
            Renders.changeModal(currentElement)
        })
        this.buttonsGame.forEach(button => button.addEventListener("click", (e)=>{
            GameControl.setYourPick(e)
        }))
    }
}

export default new StartEvents