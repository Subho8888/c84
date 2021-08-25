canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_X=10;
rover_Y=10;

background_image="mars.jpg";

rover_image="rover.png";

function add(){
    background_imagetag= new Image();
    background_imagetag.onload= uploadBackground;
    background_imagetag.src= background_image; 
    
    rover_imagetag= new Image();
    rover_imagetag.onload= uploadRover;
    rover_imagetag.src= rover_image;  
}

function uploadBackground(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
 ctx.drawImage(rover_imagetag,rover_X,rover_Y,rover_width,rover_height);
}

window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    Keypressed=e.keyCode;
    console.log(Keypressed);

    if(Keypressed=='38'){
        up();
        console.log("up")
    }
    if(Keypressed=='40'){
        down();
        console.log("down")
    }

    if(Keypressed=='39'){
        right();
        console.log("right")
    }

    if(Keypressed=='37'){
       left();
        console.log("left")
    }
}

function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_X>=0){
        rover_X=rover_X+10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadRover();
    }
}