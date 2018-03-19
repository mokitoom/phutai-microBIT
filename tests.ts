https://github.com/mokitoom/pxt-phutaiRobotinput.onButtonPressed(Button.A, () => {
    phutaiRobot.Turn(turn.Left, 50)
    basic.pause(1000)
    phutaiRobot.Turn(turn.Right, 50)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, () => {
    phutaiRobot.Spin(spin.Left, 50)
    basic.pause(1000)
    phutaiRobot.Spin(spin.Right, 50)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC0))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC1))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC2))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC3))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC4))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC5))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC6))
    basic.showNumber(phutaiRobot.ReadADC(readADC.ADC7))
})

basic.forever(() => {
    for (let Speed = 0; Speed <= 100; Speed++) {
        phutaiRobot.Motor(motor.Forward, Speed)
        basic.pause(50)
    }
    basic.pause(1000)
    for (let Speed = 0; Speed <= 100; Speed++) {
        phutaiRobot.Motor(motor.Backward, Speed)
        basic.pause(50)
    }
    basic.pause(1000)
    phutaiRobot.MotorStop()
    for (let Degree = 0; Degree <= 180; Degree++) {
        phutaiRobot.Servo(servo.SV1, Degree)
        phutaiRobot.Servo(servo.SV2, Degree)
        basic.pause(30)
    }
    phutaiRobot.Servo(servo.SV1, 0)
    phutaiRobot.Servo(servo.SV2, 0)
})
