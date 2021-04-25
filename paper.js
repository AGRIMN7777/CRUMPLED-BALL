class paper
{
	constructor(x,y,w,h)
	{
	var options={
		 isStatic:false,
         'restitution':0.3,
         'friction':0,
         'density':1.3		
			}

            this.image = loadImage("paper.png") ;
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);


	}
	display()  
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
            imageMode(CENTER);
			image(this.image ,0, 0, this.width/20, this.height/20);
			pop()
	}

}
