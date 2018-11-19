import JSONLevelScene from './JSONLevelScene';
// import Prefab from '../prefabs/Prefab.js';
// import TextPrefab from '../prefabs/TextPrefab.js';
import Player2 from '../prefabs/Player2.js';

class MayorScene extends Phaser.Scene {
  constructor() {
    super('MayorScene');
  }

  preload() {
    this.load.spritesheet('characters', 'assets/images/world/modern5.png', { frameWidth: 46, frameHeight: 64 });
  }

  create() {
    let player1 = new Player2(this, 200, 175, 'characters', 31, 5);
    let player2 = new Player2(this, 600, 175, 'characters', 64, 5);
  }

  update() {
    let enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (enterKey.isDown) {
      this.start_game();
    };
  }

  start_game() {
      this.scene.start('BootScene', {scene: 'town'});
  }
}

export default MayorScene;