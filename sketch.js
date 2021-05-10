var dog;
var database;
var happyDog;
var foodStock;
var dogIMG;
var foodS;

function preload()
{
dogIMG=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogIMG);
  dog.scale=0.15;

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  textSize(20);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog);

}
  drawSprites();
  fill("black")
text("food remaining"+foodS,170,200)
text("Note:Press Up arrow key to feed drago milk",130,50)

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
x=0;
}
else{
x=x-1;
}
database.ref('/').update({
Food:x
})
}

