import GameController from "./controllers/GameController.js"
import DogController from "./controllers/DogController.js"


class App {
  constructor() {
    this.gameController = new GameController()
    this.dogController = new DogController()
  }
}




window["app"] = new App()
