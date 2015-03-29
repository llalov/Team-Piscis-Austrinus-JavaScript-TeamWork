var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var input = new Input();
attachListeners(input);

var player = new Player(400, 500);
var enemy = new Enemy(200, 20);

function update(){
    this.tick();
    this.render(ctx);
    requestAnimationFrame(update);
};

function tick(){
    movePlayer();
    player.update();
	enemy.update();
}

function render(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);
	enemy.render(ctx);
}

function movePlayer(){
    player.movement.right = !!input.right;
    player.movement.left = !!input.left;
    player.movement.up = !!input.up;
    player.movement.down = !!input.down;
}

update();

