let x = 0
let y = 0
basic.forever(function () {
    x = 2
    y = 4
    for (let index = 0; index < 3; index++) {
        led.toggle(x, y)
        basic.pause(500)
        led.toggle(x, y)
        y += -1
    }
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
