import Target from "../models/Target.js"
//NOTE private area


let _targetConfigObj = {
  health: 1000,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,
    wetWilly: 50
  }
}

let _target = new Target(_targetConfigObj)


//NOTE public area
export default class GameService {
  wetWilly() {
    _target.health -= _target.attacks.wetWilly
  }
  slap() {
    _target.health -= _target.attacks.slap
  }

  //NOTE this method could clean up having slap, and wet willy, and punch, and kick all at once
  attack(attackName) {
    _target.health -= _target.attacks[attackName]
    if (_target.health < 0) {
      _target.health = 0
    }
  }


  get TargetHealth() {
    return _target.health.toString()
  }

  reset() {
    _target.health = _target.maxHealth
  }


  constructor() {
    console.log("hello from gameService")
  }
}