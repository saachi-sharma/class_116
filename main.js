function preload() {
}

function setup() {
    canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('Posenet Is Initialized');
}

function draw(){
Image(0, 0,300, 300);
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log("nose x = " = results[0].pose.lips.x);
        console.log("nose y = " = results[0].pose.lips.y);
    }
}
function take_snapshot(){
    save('mustache.png');    
}
