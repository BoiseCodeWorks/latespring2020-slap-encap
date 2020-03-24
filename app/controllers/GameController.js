import GameService from "../services/GameService.js"

//NOTE private area
let _gameService = new GameService()



//NOTE take the targets health and display on the screen replacing the innertext of the health element
function _draw() {
  document.getElementById("health").innerText = _gameService.TargetHealth
}


//NOTE public area 
export default class GameController {
  constructor() {
    console.log("hello from gameController")
    _draw()
  }

  slap() {
    _gameService.slap()
    _draw()
  }

  wetWilly() {
    _gameService.wetWilly()
    _draw()
  }

  attack(attackName) {
    _gameService.attack(attackName)
    _draw()
  }

  reset() {
    _gameService.reset()
    _draw()
  }

}



