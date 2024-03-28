import * as PIXI from "pixi.js";

export class Textures {
  static getTexture(id: string) {
    const loader = PIXI.Loader.shared;
    // @ts-ignore: Unreachable code error//
    //loader["test12"] = "medved";
    // @ts-ignore: Unreachable code error
    //console.error("AAAA Textures", (loader as any)["test12"]);
    console.error("AAAA Textures TextureCache", PIXI.utils.TextureCache);


    if (loader.resources[id] == null) {
      console.error(
        `Error. id= `, id
      );
    }
    return loader.resources[id].texture;
  }
}
