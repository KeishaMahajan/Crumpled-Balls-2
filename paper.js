class Paper {

constructor (x,y,diameter) {

var options={
    isStatic:false,
    restitution:0.1,
    friction:1.5,
    density:1.2

}
this.body=Bodies.circle (x,y,diameter/2,options)
this.diameter=diameter;
this.x=x;
this.y=y;
World.add (world,this.body)

this.PaperImg=loadImage ("paper.png");
this.width=width;
this.height=height;
}

display(){

push();
fill ("blue")
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
imageMode (CENTER)
image (this.PaperImg,0,0,this.diameter,this.diameter);

pop();
}
}