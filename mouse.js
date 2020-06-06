class Mouse{
    constructor (x,y,width,height){
        var options={
            'restitution':0.7,
            'friction':2.0,
            'density':2.0

        
    }
        this.body=Bodies.rectangle (x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);

    }
     display () {
         var posi=this.body.position;
         posi.x=mouseX;
         posi.y=mouseY;
         rectMode(CENTER);
        fill ("yellow");
         rect (posi.x,posi.y,this.width,this.height);
         
     }



}
