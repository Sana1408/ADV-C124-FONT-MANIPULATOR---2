function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#BF40BF');
}

function modelLoaded(){
    console.log("poseNet Is Intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}