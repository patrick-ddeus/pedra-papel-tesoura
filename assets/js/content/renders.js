import Page from "./page.js"
class Renders {
    constructor(){
        new Page()
    }

    changeModal(btnClicked) {
        const currentPage = btnClicked.parentElement
        const nextPage = currentPage.nextElementSibling
        currentPage.classList.add("hidden")
        nextPage.classList.remove("hidden")
    }

    createFinalPage(resposta){
        const mainPage = document.querySelector(".main-page")
        const gameSection = mainPage.querySelector(".game-section")
        const finalMessage = document.querySelector(".who-win-message")

        if(resposta === "win"){
            finalMessage.innerText = "Você ganhou"
        } else if(resposta === "lose"){
            finalMessage.innerText = "Você perdeu"
        }else{
            finalMessage.innerText = "Empate"
        }

        gameSection.classList.add("stretch")

    }
}

export default new Renders