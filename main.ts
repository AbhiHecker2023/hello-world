input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showIcon(IconNames.Rabbit)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    music.playTone(698, music.beat(BeatFraction.Breve))
    basic.showIcon(IconNames.TShirt)
})
basic.showIcon(IconNames.Ghost)
