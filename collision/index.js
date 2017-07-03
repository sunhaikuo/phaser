var game = new Phaser.Game(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'game')
var boot = {
    // 初始一些配置
    create: function () {
        if (window.orientation == 180 || window.orientation == 0) {
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
        } else if (window.orientation == 90 || window.orientation == -90) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        }
        // 屏幕旋转
        window.onorientationchange = function () {
            game.state.start('boot')
        }
        // 启动物理系统
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load')
    }
}
var load = {
    preload: function () {
        // 加载资源
        game.load.image('mushroom', '../assets/sprites/mushroom2.png')
        // 加载进度
        game.load.onFileComplete.add(function (process) {
            console.log(process)
        })
    },
    create: function () {
        game.state.start('start')
    }
}
var start = {
    create: function () {
        game.state.start('play')
    }
}
var play = {
    create: function () {
        this.mushroomArr = game.add.group()
        this.mushroomArr.createMultiple(10, 'mushroom')
        this.mushroomArr.enableBody = true
        // 设置自动销毁 1.超出屏幕 2.自动销毁
        this.mushroomArr.setAll('outOfBoundsKill', true)
        this.mushroomArr.setAll('checkWorldBounds', true)
        // const mushroom = game.add.sprite(0, 0, 'mushroom')
        // mushroom.scale.setTo(0.5)
        this.startTm = 0
    },
    update: function () {
        var now = +(new Date())
        if (this.startTm == 0 || (now - this.startTm) > 5000) {
            console.log('--create')
            var x = 0
            var y = game.rnd.integerInRange(0, game.world.height)
            var height = y > game.height / 2 ? (y - game.height / 2) : y
            var speed = game.rnd.integerInRange(50, 100)
            var mushroom = this.mushroomArr.getFirstExists(false)
            mushroom.reset(x, y)
            mushroom.scale.setTo(0.3)
            game.physics.arcade.enable(mushroom)
            var deg = Math.atan((game.width / 2) / height) * 180 / Math.PI
            // deg = y > game.height / 2 ? (180 - deg) : deg
            deg = Math.floor(deg)
            console.log(y, (game.width / 2), deg)
            // mushroom.body.velocity.x = speedX
            // mushroom.body.velocity.y = speedY
            // mushroom.body.velocity.angularVelocity = deg
            // game.physics.arcade.velocityFromRotation(Math.floor(deg), 20, mushroom.body.velocity)
            // game.physics.arcade.velocityFromAngle(Math.floor(deg), 20)
            game.physics.arcade.velocityFromAngle(deg, 10, mushroom.body.velocity)
            this.startTm = +(new Date())
        }
    }
}
var over = {}
game.state.add('boot', boot)
game.state.add('load', load)
game.state.add('start', start)
game.state.add('play', play)
game.state.add('over', over)
game.state.start('boot')