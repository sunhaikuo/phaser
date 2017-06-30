var game = new Phaser.Game(320, 568, Phaser.AUTO, '#game')
var states = {
    preload: function () {
        console.log('--preload--')
    },
    created: function () {
        console.log('--preload--')
    },
    play: function () {

    },
    over: function () {

    }
}

Object.keys(states).map(function (key) {
    game.state.add(key, states[key])
})