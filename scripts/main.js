var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var input = new Input();
attachListeners(input);

var player = new Player(400, 500);
var enemies = createEnemies(6,2,100,85);
var explosion = new Explosion(50, 50);

function update(){
    this.tick();
    this.render(ctx);
    requestAnimationFrame(update);
};

function tick(){
    movePlayer();
    player.update();
    enemies.forEach(function(enemy){
        enemy.update();
    });
	explosion.update();
    player.bulletArray.forEach(function(bullet){
        if(bullet.position.y < 0){
            player.bulletArray.remove(bullet);
        }
        bullet.update();
        bullet.shoot();
    });
    enemies.forEach(function(enemy){
        enemy.bulletArray.forEach(function(bullet){
            if(bullet.position.y > 600){
                player.bulletArray.remove(bullet);
            }
            bullet.update();
            bullet.shoot();
        })
    });

}

function render(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);
    enemies.forEach(function(enemy){
        enemy.render(ctx);
    });
	explosion.render(ctx);
    player.bulletArray.forEach(function(bullet){
        bullet.render(ctx);
    })
    enemies.forEach(function(enemy){
        enemy.bulletArray.forEach(function(bullet){
            bullet.render(ctx);
        })
    });

}

function movePlayer(){
    player.movement.right = !!input.right;
    player.movement.left = !!input.left;
    player.movement.up = !!input.up;
    player.movement.down = !!input.down;
    player.movement.fire = !!input.space;
}

update();

