var io = require('rpi-gpio')
var fb = require('firebase')
var config = {
  apiKey: "AIzaSyDJ31YrXt8JAPUZHYGNRS8WNjoHaz8ssuE",
  authDomain: "home-b7104.firebaseapp.com",
  databaseURL: "https://home-b7104.firebaseio.com",
  projectId: "home-b7104",
  storageBucket: "home-b7104.appspot.com",
  messagingSenderId: "42864256502"
}
firebase.initializeApp(config)

var pin = [3, 5, 7,
            8, 10, 12,
            11, 13, 15,
            16, 18, 19,
            22, 24, 26,
            29, 31, 32,
            33, 35, 37,
            38, 40]

io.setup(pin[0], DIR_OUT, () => {

})

io.setup(pin[1], DIR_OUT, () => {

})

io.setup(pin[2], DIR_OUT, () => {

})

io.setup(pin[3], DIR_OUT, () => {

})

io.setup(pin[4], DIR_OUT, () => {

})
\
io.setup(pin[5], DIR_OUT, () => {

})

io.setup(pin[6], DIR_OUT, () => {

})

io.setup(pin[7], DIR_OUT, () => {

})

io.setup(pin[8], DIR_OUT, () => {

})

io.setup(pin[9], DIR_OUT, () => {

})

io.setup(pin[10], DIR_OUT, () => {

})

io.setup(pin[11], DIR_OUT, () => {

})

io.setup(pin[12], DIR_OUT, () => {

})

io.setup(pin[13], DIR_OUT, () => {

})

io.setup(pin[14], DIR_OUT, () => {

})

io.setup(pin[15], DIR_OUT, () => {

})
