import Phaser from "phaser";

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: "LoadingScene"
        });
    }
    preload() {

    }
    create() {
        this.scene.start("MainScene")
    }
    update() {

    }
}