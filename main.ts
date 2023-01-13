input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Rabbit)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.TShirt)
})
basic.showIcon(IconNames.Ghost)
