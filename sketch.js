const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine;
var world;
var polygonimg;
var score=0;
function preload(){
polygonimg = loadImage("polygon.png")
}

function setup(){
            createCanvas(1200,600)
            engine = Engine.create()
            world = engine.world
            ground=new Ground(600,580,1200,10);

            stand = new Ground(600,350,300,10);
            stand1 = new Ground(1000,250,230,10);

            polygon = Bodies.rectangle(100,300,30,30,{isStatic:false});
            World.add(world,polygon);

            console.log(polygon)
            slingshot = new SlingShot(polygon,{x:100,y:300});
            box1 = new Box(500,325,30,40);
            console.log(box1);
            box2 = new Box(530,325,30,40);
            box3 = new Box(560,325,30,40);
            box4 = new Box(590,325,30,40);
            box5 = new Box(620,325,30,40);
            box6 = new Box(650,325,30,40);
            box7 = new Box(680,325,30,40);
            box8 = new Box(710,325,30,40);

            box9  = new Box(530,285,30,40);
            box10 = new Box(560,285,30,40);
            box11 = new Box(590,285,30,40);
            box12 = new Box(620,285,30,40);
            box13 = new Box(650,285,30,40);
            box14 = new Box(680,285,30,40);

            box15 = new Box(560,245,30,40);
            box16 = new Box(590,245,30,40);
            box17 = new Box(620,245,30,40);
            box18 = new Box(650,245,30,40);

            box19 = new Box(590,205,30,40);
            box20 = new Box(620,205,30,40);

            box21  = new Box(925,225,30,40);
            box22 = new Box(955,225,30,40);
            box23 = new Box(985,225,30,40);
            box24 = new Box(1015,225,30,40);
            box25 = new Box(1045,225,30,40);
            box26 = new Box(1075,225,30,40);

            box27 = new Box(955,185,30,40);
            box28 = new Box(985,185,30,40);
            box29 = new Box(1015,185,30,40);
            box30 = new Box(1045,185,30,40);

            box31 = new Box(1015,145,30,40);
            box32 = new Box(985,145,30,40);
            box33 = new Box(1000,105,30,40);
}
function draw(){
        background("black")
        Engine.update(engine);
        ground.display()
        textSize(32);
        text("Score : "+score,1000,50)
        fill ("gold")
        stand.display()
        stand1.display()

        fill("blue")
        box1.display()
        box1.score();
        box2.display()
        box2.score();
        box3.display()
        box3.score();
        box4.display()
        box4.score();
        box5.display()
        box5.score();
        box6.display()
        box6.score();
        box7.display() 
        box7.score();
        box8.display()
        box8.score();
        fill("lime")
        box9.display()
        box9.score();
        box10.display()
        box10.score();
        box11.display()
        box11.score();
        box12.display()
        box12.score();
        box13.display()
        box13.score();
        box14.display()
        box14.score();
        
        fill("pink")
        box15.display()
        box15.score();
        box16.display()
        box16.score();
        box17.display()
        box17.score();
        box18.display()
        box18.score();

        fill("purple")
        box19.display()
        box19.score();
        box20.display()
        box20.score();

        fill("blue")
        box21.display()
        box21.score();
        box22.display()
        box22.score();
        box23.display()
        box23.score();
        box24.display()
        box24.score();
        box25.display()
        box25.score();
        box26.display()
        box26.score();

        fill("turquoise")
        box27.display()
        box27.score();
        box28.display()
        box28.score();
        box29.display()
        box29.score();
        box30.display()
        box30.score();

        fill("pink")
        box31.display()
        box31.score();
        box32.display()
        box32.score();

        fill("purple")
        box33.display()
        box33.score();

        imageMode(CENTER);
        image(polygonimg,polygon.position.x,polygon.position.y,30,30);
        slingshot.display()

}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}