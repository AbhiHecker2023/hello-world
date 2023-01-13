input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showIcon(IconNames.Rabbit)
})
input.onButtonPressed(Button.B, function () {
    let sprite: game.LedSprite = null
    sprite.set(LedSpriteProperty.X, 0)
})
basic.showIcon(IconNames.Ghost)
