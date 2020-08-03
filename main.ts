// 20초 알람
input.onGesture(Gesture.TiltRight, function () {
    if (start == 0) {
        start = 1
        for (let index = 0; index < 20; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.pause(500)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
        }
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.EigthNote)
            basic.pause(200)
            basic.showIcon(IconNames.QuarterNote)
            basic.pause(200)
        }
        if (start == 1) {
            basic.clearScreen()
        }
        start = 2
    }
})
// 15초 알람
input.onGesture(Gesture.TiltLeft, function () {
    if (start == 0) {
        start = 1
        for (let index = 0; index < 15; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.pause(500)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
        }
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.EigthNote)
            basic.pause(200)
            basic.showIcon(IconNames.QuarterNote)
            basic.pause(200)
        }
        if (start == 1) {
            basic.clearScreen()
        }
        start = 2
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (start == 2) {
        start = 0
        basic.showIcon(IconNames.Yes)
    }
})
// 5초 알람
input.onGesture(Gesture.ScreenUp, function () {
    if (start == 0) {
        start = 1
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.pause(500)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
        }
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.EigthNote)
            basic.pause(200)
            basic.showIcon(IconNames.QuarterNote)
            basic.pause(200)
        }
        if (start == 1) {
            basic.clearScreen()
        }
        start = 2
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
// 10초 알람
input.onGesture(Gesture.ScreenDown, function () {
    if (start == 0) {
        start = 1
        for (let index = 0; index < 10; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.pause(500)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
        }
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.EigthNote)
            basic.pause(200)
            basic.showIcon(IconNames.QuarterNote)
            basic.pause(200)
        }
        if (start == 1) {
            basic.clearScreen()
        }
        start = 2
    }
})
let start = 0
basic.showIcon(IconNames.Yes)
