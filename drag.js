var drag = function(){
    console.log('x: ' + event.x);
    console.log('Y: ' + event.y);

    let limX = event.x -40;
    let limY = event.y -20;

    if(event.y <= 230){
        limY = 210;     
    }

    if(event.y >= 565){
        limY = 565;
    }

    if(event.x >= 590){
        limX = 590;
    }

    if(event.x <= 180){
        limX = 135; 
    }

    event.target.style.position = 'absolute';
    event.target.style.top = limY + 'px';
    event.target.style.left = limX + 'px';
}

var drop = function(){
    let limX = event.x -40;
    let limY = event.y -20;

    if(event.y <= 230){
        limY = 210;     
    }

    if(event.y >= 565){
        limY = 565;
    }

    if(event.x >= 590){
        limX = 590;
    }

    if(event.x <= 180){
        limX = 135; 
    }

    event.target.style.position = 'absolute';
    event.target.style.top = limY + 'px';
    event.target.style.left = limX + 'px';
}