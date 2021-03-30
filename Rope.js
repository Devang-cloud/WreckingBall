class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           
            strokeWeight(10);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
           
            
            pop();
        }
    }
    
