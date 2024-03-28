import * as PIXI from "pixi.js";

export class Textures {
  static getTexture(id: string) {
    const loader = PIXI.Loader.shared;
    if (loader.resources[id] == null) {
      console.error(
        `Error. id= `, id
      );
    }
    return loader.resources[id].texture;
  }
}
