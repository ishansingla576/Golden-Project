var _canvasWidth = 1500, _canvasHeight = 800;
var camera;

function preload()
{
    bg1 = loadImage("Assets/Level/background1.png");
    bg2 = loadImage("Assets/Level/background2.png");
    bg3 = loadImage("Assets/Level/background3.png");
    bg4 = loadImage("Assets/Level/background4a.png");

    LoadPlayerAnimations();
}

//called only once at start
function setup() 
{
    //create the canvas
    createCanvas(_canvasWidth, _canvasHeight);

    CreateLevel();
    CreateEnemies();
    CreatePlayer();
    enemy.debug = true;

}//setup

//called every frame
function draw() 
{
    //set the background color
    background(255);

    image(bg1,0,0,_canvasWidth, _canvasHeight);
    image(bg2,0,0,_canvasWidth, _canvasHeight);
    image(bg3,0,0,_canvasWidth, _canvasHeight);
    image(bg4,0,0,_canvasWidth, _canvasHeight);

   
    CollideEnemies();
    EnemyGravity();
    CallPlayerFunctions();

    //draw all the sprites
    drawSprites();

}//draw