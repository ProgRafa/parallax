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

        this.createClouds(20);
        this.createRocks(20);
    }

    move(force, angle){
        let distance = force * this.weight;


        this.positionX = this.positionX + distance;

        this.rotation += this.positionX + distance * 15;

        this.ball.style.transform = 'translateX(' + this.positionX + 'px)' + ' rotateZ('+ this.rotation +'deg)';
        this.clouds.style.transform = 'translateX(' + (-this.positionX/3) + 'px)';
        this.heaven.style.transform = 'translateX(' + (-this.positionX) + 'px)';
        this.ground.style.transform = 'translateX(' + (-this.positionX/2) + 'px)';
    }

    createClouds(i){
        let cloud;

        for(let j = 0; j < i; j++){
            cloud = document.createElement('div');
            this.clouds.appendChild(cloud);    
        }
    }

    createRocks(i){
        let rock;

        for(let j = 0; j < i; j++){
            rock = document.createElement('div');
            rock.style.margin = Number((Math.random() * 50) + 10) + 'px';
            this.ground.appendChild(rock);    
        } 
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

var time = 0;
var timeOver;

var fire = function(){
    if(event.type == 'mouseover'){
        timeOver = setInterval(function(){
            time += 5;
        }, 100);
    }else if(event.type == 'mouseout'){
        clearInterval(timeOver);
        ball.move(time, 0.5);
        time = 0;
    }
}

window.onload = function(){
    ball = new Ball();
}