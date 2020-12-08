class  Rectangle {
constructor(x, y, width, height) {
     
var options = {
isStatic:true
}
this.body = Bodies.rectangle(x, y, width, height, options);
       
this.width = width;
this.height = height;
 World.add(world, this.body);

 this.DustbinImg=loadImage ("dustbingreen.png");
}
display(){
var pos= this.body.position
push();
fill ("red")
//rectMode(CENTER);
imageMode (CENTER)
image (this.DustbinImg,pos.x,pos.y,this.width,this.height+200);

       // rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}
