var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var Player = (function(){
    function Player(x, y) {
        this.position = new Vector2(x, y);
        this.movement = {left: false, right: false, up: false, down: false, fire: false};
        this.velocity = 8;
        this.fireCooldown = false;
        this.bulletArray = [];

        this.width = 60;
        this.height = 100;

        this.animation = new Animation(this.width, this.height, 0, 0, 1, 'ressources/images/F5S4.png', 1, 0, 0);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
        //Background.prototype.canvasWidth = this.canvas.width;

    }

    Player.prototype.update = function () {
        if (this.movement.right) {
            this.animation = new Animation(this.width, this.height, 0, 0, 1,
                'ressources/images/F5S4-right.png', 1, 0, 0);
            this.position.x += this.velocity;

            if(this.position.x >= canvas.width - this.width){
                this.position.x = canvas.width - this.width;
            }
        } else if (this.movement.left) {
            this.animation = new Animation(this.width, this.height, 0, 0, 1,
                'ressources/images/F5S4-left.png', 1, 0, 0);
            this.position.x -= this.velocity;

            if(this.position.x <= 0){
                this.position.x = 0;
            }
        } else{
            this.animation = new Animation(this.width, this.height, 0, 0, 1,'ressources/images/F5S4.png', 1, 0, 0);
        }
        if (this.movement.up) {
            this.position.y -= this.velocity;

            if(this.position.y <= canvas.height/4.5*3){
                this.position.y = canvas.height/4.5*3;
            }
        } else if (this.movement.down) {
            this.position.y += this.velocity;

            if(this.position.y >= canvas.height - this.height){
                this.position.y = canvas.height - this.height;
            }
        }

        if(this.movement.fire){

            this.fireBullet();
        }

        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
    };

    Player.prototype.render = function (ctx) {
        this.animation.draw(ctx);
    };

    Player.prototype.fireBullet = function(){
        console.log(this.fireCooldown);
        if(this.fireCooldown === false){
            var bull = new Bullet(this.position.x,this.position.y);
            this.bulletArray.push(bull);
            this.fireCooldown = true;
            window.setTimeout(function(){
                player.fireCooldown = false;
            },100);
        }else{

        }
    }




    return Player;
}());