class Bob { 
    constructor(x,y,radius){

        var options = {
            isStatic:false,
            restitution:1,
            friction:0.2,
            density:1.2
        }
        
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options); 

        World.add(world, this.body); 
    }

    display(){
     var angle = this.body.angle;
     
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(angle);
     fill("magenta");
     strokeWeight(2);
     ellipseMode(CENTER);
     ellipse(10,10, this.radius,this.radius);
     pop();
     
    } 
}
