controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bee`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (0 < projectile.vx) {
        projectile.image.flipX()
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Flower`, SpriteKind.Player)
game.onUpdate(function () {
    controller.moveSprite(mySprite)
})
