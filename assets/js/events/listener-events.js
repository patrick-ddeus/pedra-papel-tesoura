import GameControl from "./game-control.js";
import Renders from "../content/renders.js"

class StartEvents{
    constructor(){
        this.startButton = document.getElementById("startBtn")
        this.buttonsGame = document.querySelectorAll(".choose-section .buttonGame");

        this.playAgain = document.getElementById("play-again")

        this.rulesModal = document.querySelector(".rules-modal")
        this.rulesBtn = document.getElementById("rulesBtn");
        this.closeBtn = document.querySelector(".closeButton")
    }

    listenerEvents(){
        this.startButton.addEventListener("click", e =>{
            const currentElement = e.currentTarget
            Renders.changeModal(currentElement)
        })

        this.buttonsGame.forEach(button => button.addEventListener("click", (e)=>{
            GameControl.setYourPick(e)
        }))

        this.playAgain.addEventListener("click", e=>{
            const btn = e.currentTarget
            const currentSection = btn.parentElement.parentElement
            const previousSection = currentSection.previousElementSibling
            currentSection.classList.add("hidden")
            currentSection.classList.remove("stretch")
            previousSection.classList.remove("hidden")
        })

        this.rulesBtn.addEventListener("click", _=>{
            this.rulesModal.classList.remove("hidden")
        })

        this.closeBtn.addEventListener("click", _=>{
            this.rulesModal.classList.add("hidden")
        })
    }
}

export default new StartEvents