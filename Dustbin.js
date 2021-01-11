class D1 {
    constructor(x,y,width,height) {
        var options = {
            'isStatic':true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.visible = false;
        World.add(world, this.body);
      }


      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        //rect(pos.x, pos.y, this.width, this.height);
      }

     
    };
        
 class D2 {
    constructor(x,y,width,height) {
        var options = {
            'isStatic':true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }


      display(){
        var pos1 =this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        pop();
        //rect(pos.x, pos.y, this.width, this.height);
      }

     
    };




    class D3 {
        constructor(x,y,width,height) {
            var options = {
                'isStatic':true
            }
    
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
          }
    
    
          display(){
            var pos2 =this.body.position;
            push();
            rectMode(CENTER);
            fill("white");
            pop();
            //rect(pos.x, pos.y, this.width, this.height);
          }
    
         
        };


        class D4 {
          constructor(x,y,width,height) {
              var options = {
                  'isStatic':true
              }
      
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;

              this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
              //super(x,y,width,height);
              
              
              this.image = loadImage("iimgs/dustbingreen.png");
              //this.scale = 5;
              
              //World.add(world, this.body);
              World.add(world, this.image);
            }
      
      
            display(){
              var pos =this.body.position;
              push();
              rectMode(CENTER);
              //fill("gray");
              imageMode(CENTER);
              image(this.image,pos.x,pos.y, this.width, this.height);
              pop();
              //rect(pos.x, pos.y, this.width, this.height);
            }
      
           
          };



 