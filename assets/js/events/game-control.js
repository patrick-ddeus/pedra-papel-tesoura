import Renders from "../content/renders.js"

class GameControl {
    constructor() {
        this.score = 0;
        this.choices = {
            rock: {paper: "lose", scissors:"win", spock:"lose", lizard:"win",rock:"draw"}, 
            paper: {scissors: "lose", rock:"win", spock:"win",lizard:"lose", paper:"draw"}, 
            scissors: {rock:"lose", paper:"win", spock:"lose", lizard:"win", scissors:"draw"},
            lizard: {rock:"lose", paper:"win", spock:"win", scissors:"lose", lizard:"draw"},
            spock: {rock:"win", paper:"lose", lizard:"lose", scissors:"win", spock:"draw"},
        }
    }

    setYourPick(event) {
        const gameSectionButton = document.querySelector(".your-pick-choice")
        const gameImage = gameSectionButton.querySelector(".gameImage")
        const currentClick = event.currentTarget

        gameSectionButton.id = currentClick.id
        gameImage.src = `images/${currentClick.id}.svg`

        Renders.changeModal(currentClick)
        this.generateComputerChoice()
    }

    generateComputerChoice(){
        const options = ["rock", "paper", "scissors", "lizard", "spock"]
        const defaultButton = document.querySelector(".defaultButton")

        const interval = setInterval(() => {
            randomize()
        }, 400)

        setTimeout(() => {
            clearInterval(interval)
            this.comparePicks()
        }, 5000)

        function randomize() {
            const randomImage = Math.floor(Math.random() * options.length)
            defaultButton.innerHTML = `
            <div class="buttonGame computer-pick-choice" id="${options[randomImage]}">
                <img src="images/${options[randomImage]}.svg" alt="" class="gameImage">
            </div>
        `
        }
    }

    comparePicks() {
        const yourChoice = document.querySelector(".your-pick-choice");
        const computerChoice = document.querySelector(".computer-pick-choice");
        const resposta = this.choices[yourChoice.id][computerChoice.id]

        setTimeout(()=>{
            this.setScore(resposta)
            this.loadScore()
            Renders.createFinalPage(resposta)
        }, 700)
    }

    setScore(choose){
        switch(choose){
            case "win":
                this.score++;
                this.saveScore();
                break;
            case "lose":
                this.score = this.score < 0 ? 0 : this.score -1;
                this.saveScore();
                break;
            default:
                return
        }
    }

    loadScore(){
       const score = JSON.parse(localStorage.getItem("score"))
       this.score = Number(score)
       const scoreHTML = document.querySelector(".score")
       scoreHTML.innerHTML = this.score
    }

    saveScore(){
        localStorage.setItem("score", JSON.stringify(this.score))
    }
}

export default new GameControl