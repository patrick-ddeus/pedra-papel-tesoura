class Page {
    constructor() {
        this.app = document.getElementById("app")
        this.header()
        this.startGame()
        this.chooseStart()
        this.gameSection()
    } 
    header() {
        this.app.innerHTML += `
        <header class="score-area">
      <ul class="score-text-list">
        <li class="score-text-item">Pedra</li>
        <li class="score-text-item">Papel</li>
        <li class="score-text-item">Tesoura</li>
      </ul>
      <button class="score-button">
        <p>score</p>
        <div class="score">0</div>
      </button>
    </header>
        `
    }

    startGame() {
        this.app.innerHTML += `
        <section class="startGame">
            <button id="startBtn">Iniciar jogo</button>
        </section>
        `
    }

    chooseStart(){
        this.app.innerHTML += `
        <section class="choose-section hidden">
        <div class="buttonGame" id="rock">
          <img src="images/rock.svg" alt="">
        </div>
        <div class="buttonGame" id="paper">
          <img src="images/paper.svg" alt="">
        </div>
        <div class="buttonGame" id="scissors">
          <img src="images/scissors.svg" alt="">
        </div>
      </section>
        `
    }

    gameSection(){
        this.app.innerHTML +=`
        <section class="game-section hidden">
        <div class="yourPick">
          <p>Sua escolha</p>
          <div class="buttonGame your-pick-choice winner" id="scissors">
            <img src="images/scissors.svg" alt="" class="gameImage">
          </div>
        </div>
        <div class="who-win">
          <h2 class="who-win-message">-</h2>
          <a href="#" id="play-again">Jogar Dnv</a>
        </div>
        <div class="computerPick">
          <p>A escolha da casa</p>
          <div class="defaultButton">
            <div class="default"></div>
          </div>
        </div>
      </section>
        `
    }

}

export default Page