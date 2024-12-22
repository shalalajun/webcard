let faceType = 1;
let faceX = 200;
let faceY = 150;
let faceWidth = 160;
let faceScale = 0.6;

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
  getParam();
}

function draw() {
  background(120);
  
 
  // if(snow1Y > height){
  //   snow1Y = 0;
  // }
  fallSnow1()
  noStroke();
  ellipse(200,280,180,180);
  ellipse(200,450,240,240);
  //mouseX,mouseY

  face(faceX,faceY,faceType); 
  rect(0,height-100,400,200);
  
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


function mouseClicked(){
  
  if(mouseX >= faceX - faceWidth/2 && 
     mouseX <= faceX + faceWidth/2 && 
     mouseY >= faceY - faceWidth/2 && 
     mouseY <= faceY + faceWidth/2){
    
      faceType = faceType + 1;
    if(faceType>3){
         faceType = 1;
       }
    setParam()
    }
}


//이렇게 작동이된다.
function setParam(){
  let url = new URL(location.href);//주소가져오기
  url.searchParams.set("faceType",faceType);//주소에 값넣기
  history.pushState({},null,url);//주소창에 반영하기
}


function getParam(){
  let url = new URL(location.href);
  faceType = url.searchParams.get("faceType");
  if(faceType == null){
    faceType = 1
  }
}

function face(x,y,type){
  //전체좌표이동
  line(x,y,mouseX,mouseY);
  let d = dist(x, y, mouseX, mouseY);
  text(mouseY, mouseX, mouseY);
  
  push();
    translate(x,y);
    scale(faceScale);
    rectMode(CENTER);
    //fill();
    noStroke();
  
  if(mouseX >= faceX - faceWidth/2 && 
     mouseX <= faceX + faceWidth/2 && 
     mouseY >= faceY - faceWidth/2 && 
     mouseY <= faceY + faceWidth/2)
    {
    
      fill("pink");
    }else{
      fill(255);
    }
  
  // if(d<=80){
  //     fill(255,0,0);
  //   }else{
  //     fill(255);
  //   }
    
    //얼굴모양
    rect(0,0,faceWidth,faceWidth,30,30);
  
    //눈동자
    fill(0);
    ellipse(20,-6,20,20);
    ellipse(-20,-6,20,20);
  
    strokeWeight(5);  
  
    //코
    push();
  
    translate(0,14);
    //코1
    if(type==1){
       rectMode(CENTER);
       rect(0, 0,20,20);
       stroke(5)
       noFill();
        // arc(0,0,200, 200, radians(60), radians(120));
        arc(0,-20,80, 100, radians(60), radians(120));
       }
  
    //코2
    if(type==2)
      {
        ellipse(0,0,20,20);
        stroke(5)
        noFill();
        // arc(0,0,200, 200, radians(60), radians(120));
        arc(0,-20,80, 100, radians(60), radians(120));
      }
  
    if(type==3)
      {
        triangle(
         60,0,
         0,-10,
         0,10);
        
        stroke(0);
        noFill();
        // arc(0,0,200, 200, radians(60), radians(120));
        arc(0,-20,80, 100, radians(60), radians(120));
      }
    pop();
  
  
    //0~360 각도법, 0~TWO_PI 호도법, radians(각도)
    //입
    
    //rectMode(CENTER);
    //rect(0,90,100,10);
  pop();
  
}