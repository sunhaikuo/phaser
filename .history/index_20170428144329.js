var game = new Phaser.Game(320, 568, Phaser.AUTO, '#game')
var states = {
    preload: function () {
        game.stage.backgroundColor = '#aaa'
        console.log('--preload--')
    },
    created: function () {
        console.log('--created--')
    },
    play: function () {
        console.log('--play--')
    },
    over: function () {
        console.log('--over--')
    }
}

Object.keys(states).map(function (key) {
    game.state.add(key, states[key])
})