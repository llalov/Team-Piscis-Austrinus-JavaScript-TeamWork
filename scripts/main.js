var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var input = new Input();
attachListeners(input);

var player = new Player(100, 100);

function update(){
    this.tick();
    this.render(ctx);
    requestAnimationFrame(update);
};

function tick(){
    player.movement.right = !!input.right;
    player.movement.left = !!input.left;
    player.movement.up = !!input.up;
    player.movement.down = !!input.down;
    player.update();
}

function render(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);
}

update();

