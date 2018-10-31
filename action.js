var iMove;
var iStop;

class Ball{
    constructor(){
        this.ball = document.getElementById('ball');
        this.clouds = document.getElementById('clouds');
        this.heaven = document.getElementById('heaven');
        this.ground = document.getElementById('ground');
        this.positionX = 0;
        this.positionY = 0;
        this.rotation = 0;
        this.angle = 0;
        this.weight = 5;
        this.acceleration = 0;
        this.velocity = 0;

        this.createClouds(5);
        this.createRocks(20);
    }

    move(force){
        ball.acceleration = force / ball.weight;
        
        iMove = setInterval(function(){
            console.log(ball.velocity);
            
            ball.createClouds(1);
            ball.createRocks(5);

            ball.velocity += ((ball.velocity + ball.acceleration) < 110 ? ball.acceleration : 0);
            
            if(ball.velocity == 0)
                clearInterval(iMove);
            
            ball.positionX += ball.velocity;

            ball.rotation += ball.velocity * 30;

            ball.heaven.style.transform = 'translateX(' + (-ball.positionX) + 'px)';
            ball.clouds.style.transform = 'translateX(' + (-ball.positionX/4) + 'px)';
            ball.ground.style.transform = 'translateX(' + (-2 * ball.positionX) + 'px)';
            ball.ball.style.transform = 'translateX(' + ball.positionX + 'px)'  + ' rotateZ('+ ball.rotation +'deg)';  
        }, 1010);
    }

    createClouds(i){
        let cloud;
        let tam = 0;

        for(let j = 0; j < i; j++){
            cloud = document.createElement('div');
            tam = Number((Math.random() * 30) + 30);
            cloud.style.width = (tam * 1.333) + 'px';
            cloud.style.height = tam + 'px';
            cloud.style.margin = Number(Math.random() * 40) + 'px';
            this.clouds.appendChild(cloud);    
        }
    }

    createRocks(i){
        let rock;
        let tam = 0;
        for(let j = 0; j < i; j++){
            rock = document.createElement('div');
            tam = Number((Math.random() * 20));
            rock.style.margin = tam + 'px';
            rock.style.width = tam + 10 + 'px';
            rock.style.height = tam + 10 + 'px';
            this.ground.appendChild(rock);    
        } 
    }
}

var command = function(){
    if(event.key == 'd'){
        ball.move(50);
    }

    if(event.key == 'a'){
        ball.acceleration = -ball.acceleration;
    }
}

class Fisica{  
    constructor(){
        this.Gforce = 10;
    } 

    deslocation(v, t){
        return v * t;
    }

    velocity(d, t){
        return d / t;
    }

    mqv(){

    }
}

window.onload = function(){
    ball = new Ball();
}