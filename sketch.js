var img1,img2,img3,img4,form
var gameState=0

function preload() {
img1=loadImage("./img/image.jpg")
img2=loadImage("./img/image1.jpg")
img3=loadImage("./img/img3.jpg")
img4=loadImage("./img/img4.jpg")
}


function setup() {
  canvas = createCanvas(1100,700);

 form=new Form() 
 form.display()

}

function draw() {

  background(128);
  if(gameState===1){
    background(img4)
  }
 
}




