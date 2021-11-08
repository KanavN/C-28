class SlingShot{
    constructor(bodyA, pointB){
    var options={
        bodyA : bodyA,
        pointB : pointB,
        length : 10,
        stiffness : 0.04,  
    }
    this.sling= Constraint.create(options);
    World.add(world,this.sling);
    this.pointB = pointB;
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
  }
}