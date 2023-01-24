input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(988, music.beat(BeatFraction.Breve))
    }
})
input.onGesture(Gesture.LogoUp, function () {
    music.setVolume(255)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.LogoDown, function () {
    music.setVolume(136)
})
