let x = 0
let y = 0
basic.forever(function () {
    music.setVolume(20)
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
    x = 2
    y = 4
    for (let index = 0; index < 3; index++) {
        led.toggle(x, y)
        basic.pause(1000)
        led.toggle(x, y)
        y += -1
    }
    music.stopAllSounds()
    music.play(music.createSoundExpression(WaveShape.Noise, 4054, 4053, 255, 0, 1344, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
