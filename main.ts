enum RadioMessage {
    message1 = 49434,
    left = 14947,
    right = 32391,
    forward = 16348,
    back = 39633,
    ok = 31318,
    clutch = 48290
}
radio.onReceivedMessage(RadioMessage.back, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, speed)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
})
radio.onReceivedNumber(function (receivedNumber) {
    speed = receivedNumber
})
radio.onReceivedMessage(RadioMessage.ok, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 200)
    basic.pause(10)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
})
radio.onReceivedMessage(RadioMessage.left, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 75)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
})
radio.onReceivedMessage(RadioMessage.clutch, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 0)
})
radio.onReceivedMessage(RadioMessage.forward, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speed)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
})
radio.onReceivedMessage(RadioMessage.right, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 85)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
let speed = 0
radio.setGroup(1)
radio.setTransmitPower(7)
Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
Tinybit.RGB_Car_Program().setBrightness(255)
basic.forever(function () {
	
})
