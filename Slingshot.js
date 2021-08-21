class Slingshot {

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:500
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.color = color(random(250,255),random(100,255),random(250,255));
        World.add(world,this.sling);

    }
        
    display(){

        var posA = this.sling.bodyA.position;
        var posB = this.pointB;

        push();
        stroke(this.color);
        strokeWeight(7);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();

    }

}
