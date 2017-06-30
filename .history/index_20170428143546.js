var game = new Phaser.Game(320, 568, Phaser.AUTO, '#game')
var states = {
    preload: function () {
        console.log('--preload--')
    },
    created: function () {
        console.log('--created--')
    },
    play: function () {
        console.log('--created--')
    },
    over: function () {

    }
}

Object.keys(states).map(function (key) {
    game.state.add(key, states[key])
})