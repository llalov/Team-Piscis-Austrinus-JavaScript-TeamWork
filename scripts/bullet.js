/**
 * Created by samis_000 on 31.3.2015 г..
 */

var Bullet = (function(){
    function Bullet(x, y) {
        this.position = new Vector2(x, y);
        this.velocity = 12;

        this.width = 50;
        this.height = 30;

        this.animation = new Animation(this.width, this.height, 0, 0, 1, 'ressources/images/F5S4.png', 1, 0, 0);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);

    };

    Bullet.prototype.update = function () {
        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;
        this.animation.update();
    };

    Bullet.prototype.render = function (ctx) {
        this.animation.draw(ctx);
    };

    Bullet.prototype.shoot = function () {
        console.log("bullet moved");
        this.position.y -= this.velocity;

    };
    return Bullet;
}());








