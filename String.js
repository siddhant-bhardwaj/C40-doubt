class String{
    constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        lenght:50 
    }

    this.string= Constraint.create(options)
    World.add(world,this.string)
}

display(){
    var pointA = this.string.bodyA.position;
    var pointB = this.string.bodyB.position;
    strokeWeight(3);
    
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    
}


}