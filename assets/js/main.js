import StartEvents from "./events/listener-events.js"
import GameControl from "./events/game-control.js"

document.body.onload = GameControl.loadScore()
StartEvents.listenerEvents()
