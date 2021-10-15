import { Texture } from '@pixi/core'
import { TilingSprite } from '@pixi/sprite-tiling'

export default class Background extends TilingSprite {
    constructor() {
        const texture = Texture.from('ground')
        super(texture, 1, texture.height) //width 1 because we will call onResize from App anyway
    }

    onResize(width, height) {
        this.width = width
        this.y = height - this.height
    }

    onUpdate(delta, sx) {
    	//this.tilePosition.x -= delta * 2
        this.tilePosition.x = sx;
    }
}