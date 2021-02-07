let y = 0
let x = 0
basic.forever(function () {
    y = 0
    for (let counter = 0; counter <= 4; counter++) {
        for (let index = 0; index <= counter; index++) {
            x = index
            y = y
            led.plot(x, y)
            basic.pause(100)
        }
        y = y + 1
    }
    basic.clearScreen()
    y = 4
    for (let counter = 0; counter <= 4; counter++) {
        for (let index = 0; index <= counter; index++) {
            x = index
            y = y
            led.plot(x, y)
            basic.pause(100)
        }
        y = y - 1
    }
    basic.clearScreen()
    y = 4
    for (let counter = 0; counter <= 4; counter++) {
        for (let index = 0; index <= counter; index++) {
            x = 4 - index
            y = y
            led.plot(x, y)
            basic.pause(100)
        }
        y = y - 1
    }
    basic.clearScreen()
    y = 0
    for (let counter = 0; counter <= 4; counter++) {
        for (let index = 0; index <= counter; index++) {
            x = 4 - index
            y = y
            led.plot(x, y)
            basic.pause(100)
        }
        y = y + 1
    }
    basic.clearScreen()
})
