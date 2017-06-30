var game = new Phaser.Game(320, 568, Phaser.AUTO, '#game')
var states = {
    preload: function () {

    },
    created: function () {

    },
    play: function () {

    },
    over: function () {

    }
}

Object.keys(states).map(function (key) {
    game.state.add(key, states[key])
})