mouseX=0;
mouseY=0;


function preload(){
    mouse_no = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}




function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}


function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mouseX = results[0].pose.nose.x -13;
        mouseY = results[0].pose.nose.y +5;
        console.log("mouse x =" + mouseX);
        console.log("mouse y =" + mouseY);
    }
}


function draw(){
    image(video, 0, 0, 300, 300);
    image(mouse_no, mouseX, mouseY, 30, 30);
}

