//배열
let message = "행복한새해가되시길바래요";

//UI
let input;

let snow1;
let snow2;
let snow1Y = 0;
let snow2Y = 0;

function preload(){
  snow1 = loadImage("snow01.png");
  snow2 = loadImage("snow02.png");
}


function setup() {
  createCanvas(400, 600);
  input = createInput();
  input.input(typing);
  textFont("Gamja Flower");
  getParam();
}

function typing(){
  message = input.value();
  setParam();
}
//이렇게 작동이된다.
function setParam(){
  let url = new URL(location.href);//주소가져오기
  url.searchParams.set("message",message);//주소에 값넣기
  history.pushState({},null,url);//주소창에 반영하기
}

function getParam(){
  let url = new URL(location.href);
  message = url.searchParams.get("message");
  if(message == null){
    message = "기본메세지"
  }
}



function draw() {
  background("rgb(1,1,107)");
  
  fallSnow1()
  rectMode(CENTER);
  textSize(40);
  textAlign(CENTER,CENTER);
  
  //1번줄
  let tongueMove = 0;
  if(frameCount%60 > 30){
       tongueMove = -10;
     }
  
  stroke("white");
  fill("pink");
  rect(75 + tongueMove, 120, 30, 10);
  
  fill("skyblue");
  arc(125,125,100,100, radians(180),radians(270),PIE);
  fill("white");
  ellipse(110,110, 20, 20);
  fill("black");
  ellipse(105,110, 10, 10);
  
  fill("skyblue");
  rect(150,100,50,50);
  rect(200,100,50,50);
  rect(250,100,50,50);
  arc(275,125,100,100, radians(-90),radians(0),PIE);
  
  fill("white");
  text(message[0], 150, 100);
  text(message[1], 200, 100);
  text(message[2], 250, 100);
  
  //허리
  
  fill("skyblue");
  rect(300,150, 50,50);
  
  
    
  //2번줄
  arc(125,225,100,100, radians(180),radians(270),PIE);
  rect(150,200,50,50);
  rect(200,200,50,50);
  rect(250,200,50,50);
  arc(275,175,100,100, radians(0),radians(90),PIE);
  
  fill("white");
  text(message[3], 150, 200);
  text(message[4], 200, 200);
  text(message[5], 250, 200);
  
  //허리
  fill("skyblue");
  rect(100,250, 50,50);
  
  //3번줄
  arc(125,275,100,100, radians(90),radians(180),PIE);
  rect(150,300,50,50);
  rect(200,300,50,50);
  rect(250,300,50,50);
  arc(275,325,100,100, radians(-90),radians(0),PIE);
  
  fill("white");
  text(message[6], 150, 300);
  text(message[7], 200, 300);
  text(message[8], 250, 300);
  
  //허리
  fill("skyblue");
  rect(300,350, 50,50);
  
  //4번줄
  arc(125,425,100,100, radians(180),radians(270),PIE);
  rect(150,400,50,50);
  rect(200,400,50,50);
  rect(250,400,50,50);
  arc(275,375,100,100, radians(0),radians(90),PIE);
  
  fill("white");
  text(message[9], 150, 400);
  text(message[10], 200, 400);
  text(message[11], 250, 400);
  
  textSize(100);
  text(2025, 200,500);
  
  fallSnow2()
}

function fallSnow1(){
  snow1Y = (snow1Y + 0.5) % height;
  image(snow1,0,snow1Y - height, 400, 600);
  image(snow1,0,snow1Y, 400, 600);
}

function fallSnow2(){
  snow2Y = (snow2Y + 1) % height;
  image(snow2,0,snow2Y - height, 400, 600);
  image(snow2,0,snow2Y, 400, 600);  
}


