var ball,db,position;

function setup(){
    
    db = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var movingball = db.ref('ball/position');
    movingball.on("value",reposition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   db.ref('ball/position').set({
    'x'  : position.x+x,
     'y' : position.y+y
   })
}
function reposition(data){
position = data.val();
console.log(position.x);
ball.x = position.x;
ball.y = position.y;
}

