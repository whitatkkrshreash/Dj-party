var song = "";
left_wrist_X=0;
left_wrist_y=0;
right_wrist_X=0;
right_wrist_y=0;
function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(400, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);

}
function modelLoaded() {
    console.log('Posenet is Intitialized');
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        left_wrist_X=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        right_wrist_X=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;
        console.log("Left Wrist X="+left_wrist_X+"Left wrist Y="+left_wrist_y);
        console.log("right Wrist X="+right_wrist_X+"right wrist Y="+right_wrist_y);
    }
}

function draw() {
    image(video, 0, 0, 400, 600);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(2);
}