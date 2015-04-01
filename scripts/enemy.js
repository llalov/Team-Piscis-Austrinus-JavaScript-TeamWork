var Enemy = (function() {
    function Enemy (x, y){
        this.width = 100;
        this.height = 85;
        this.velocity = 1;
		this.fireCooldown = false;
        this.velocityModifier = 0;
		this.bulletArray = [];

        this.position = new Vector2(x, y);
        this.animation = new Animation(this.width, this.height, 0, 0, 1,'ressources/images/enemy2.png',1,0,0);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Enemy.prototype.update = function () {
        this.position.y += this.velocity + this.velocityModifier;
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
		this.fireBullet();
    };
    Enemy.prototype.render = function (ctx) {
        this.animation.draw(ctx);
    };
	   Enemy.prototype.fireBullet = function(){
        console.log(this.fireCooldown);
        if(this.fireCooldown === false){
            var bull = new Bullet(this.position.x,this.position.y, -12);
            this.bulletArray.push(bull);
            this.fireCooldown = true;
            window.setTimeout(function(){
                enemy.fireCooldown = false;
            },2000);
        }else{

        }
    };

    return Enemy
}());