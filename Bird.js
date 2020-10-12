class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smImage = loadImage("sprites/smoke.png");

    this.bp = []; 

    }

  display() {
 
    var bpos = [this.body.position.x, this.body.position.y];
 
    if(bpos[0]>260 && this.body.velocity.x > 5){
      this.bp.push(bpos);
    }

    for(var i = 0; i < this.bp.length; i = i + 1){

      image(this.smImage, this.bp[i][0], this.bp[i][1])

    }

    super.display();
  }
}
