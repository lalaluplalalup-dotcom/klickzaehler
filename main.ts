input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    zaehler += 1
    basic.showNumber(zaehler)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    zaehler = zaehler - 1
    basic.showNumber(zaehler)
})
let zaehler = 0
zaehler = 0
