var context = getContext();

var toRadian = Math.PI/180;
var startAngle = 30 * toRadian;
var endAngle = 330 * toRadian;

var pos = {};
pos.x = 100;
pos.y = 100;

var countLoop = 0 ;
var toggleMouth = 1;
var mouthAngle = 0;

var moove = (function moovePac() {

    countLoop++;
         
    var computMouthAngle = (function(countLoop) {
        //alert('countLoop = '+ countLoop%15);
        if(countLoop%30 === 0 && countLoop > 1)
            toggleMouth*=-1;
        toggleMouth > 0 ? mouthAngle = countLoop%30 : mouthAngle--;
    })(countLoop);
   
    context.clearRect(0,0,800,600);
    drawPac();
    
    if(pos.x < 700 && pos.y === 100) {
        pos.x++;
        startAngle = (30-mouthAngle) * toRadian;
        endAngle = (330+mouthAngle) * toRadian;
    }
    else if(pos.x === 700 && pos.y < 500) {
        pos.y++;
        startAngle = (120-mouthAngle) * toRadian;
        endAngle = (60+mouthAngle) * toRadian;
    }
    else if(pos.x <= 700 && pos.x > 100 && pos.y === 500) {
        pos.x--;
        startAngle = (210-mouthAngle) * toRadian;
        endAngle = (150+mouthAngle) * toRadian;
    }
    else if(pos.x === 100 && pos.y > 100 && pos.y <= 500) {
        pos.y--;
        startAngle = (300-mouthAngle) * toRadian;
        endAngle = (240+mouthAngle) * toRadian;
    }
    setTimeout(moovePac,1000/700); //recurssivité
})();

function drawPac() {
    context.beginPath();
    context.fillStyle = "blue";
    context.moveTo(pos.x,pos.y); // début
    context.arc(pos.x,pos.y,80,startAngle,endAngle,false);
    context.lineTo(pos.x,pos.y);
    context.fill();
}