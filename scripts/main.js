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
    player.update();
}

function render(ctx){
    player.render(ctx);
}

update();

