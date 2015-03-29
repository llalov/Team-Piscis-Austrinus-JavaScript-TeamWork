var Player = (function(){
    function Player(x, y){
        this.position = new Vector2(x, y);
        this.movement = {left: false, right: false, up: false, down: false};
        this.velocity = 2;

        this.width = 173;
        this.height = 271;

        this.animation = new Animation(this.width, this.height, 1, 'ressources/images/F5S4.png', 1, 0, 0);
        this.boundingBox = new Ranctangle(x, y, this.width, this.height);
    }

    Player.prototype.update = function(){
        if(this.movement.right){
            this.position.x += this.velocity;
        } else if(this.movement.left){
            this.position.x -= this.velocity;
        }
        if(this.movement.up){
            this.position.y += this.velocity;
        } else if(this.movement.down){
            this.position.y -= this.velocity;
        }

        this.animation.update();
    };

    Player.prototype.render = function(ctx){
        this.animation.render(ctx);
    };

    return Player;
}());