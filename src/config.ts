import Phaser from "phaser";
import GameScene from "./scenes/gameScene.ts";
import LoadingScene from "./scenes/loadingScene.ts";
import MainScene from "./scenes/mainScene.ts";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    min: {
        width: 400,
        height: 400
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [LoadingScene, MainScene, GameScene]
}

export default config;