



export default class Target {
  constructor(data) {
    console.log("We created BOB the target")
    this.health = data.health
    this.maxHealth = data.health
    this.hits = 0
    this.attacks = data.attacks
  }
}