input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showIcon(IconNames.Rabbit)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
basic.showIcon(IconNames.Ghost)
