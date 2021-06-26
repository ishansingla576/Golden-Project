var _canvasWidth = 1500, _canvasHeight = 800;
var groundSprite;

var player, playerIdle;
var leftPressed, rightPressed, jumpPressed, sprintPressed;
var isJumping = false;

function preload()
{
    animationLocation = "Assets/Player Animations"
    playerIdle = LoadAnimation([animationLocation + "Idle/0.png", animationLocation + "Idle/1.png",animationLocation + "Idle/2.png",animationLocation + "Idle/3.png",animationLocation + "Idle/4.png",animationLocation + "Idle/5.png"])
    
}

//called only once at start
function setup()
{
    //create the canvas
    createCanvas(_canvasWidth,_canvasHeight);

    console.log(playerIdle);
    //create ground
    groundSprite = createSprite(_canvasWidth/2, 750, _canvasWidth, 20);
    //color the ground
    groundSprite.shapeColor = "brown";

    //create the player
    player = createSprite(100,500, 50,120);
    //color the player
    player.shapeColor = "red";
    
}//setup

//called every frame
function draw()
{
    //set the background color
    background(255);

    KeyboardInput();
    MoveThePlayer();
    ClampThePlayer();
    gravity();

    //enable player collision with the ground
    player.collide(groundSprite);

    player.debug = true;
    groundSprite.debug = true;

    //draw all the sprites
    drawSprites();

}//draw

function KeyboardInput()
{
    if(keyIsDown(LEFT_ARROW) || keyDown("a"))
    {
        leftPressed = true;
    }
    else leftPressed = false;

    if(keyIsDown(RIGHT_ARROW) || keyDown("d"))
    {
        rightPressed = true;
    }
    else rightPressed = false;

    if(keyDown("space"))
    {
        jumpPressed = true;
    }
    else jumpPressed = false;
}// KeyboardInput


function MoveThePlayer()
{
    //move the player to the left
    if(leftPressed)
    {
        player.x -= 10;
    }

    //move the player to the right
    if(rightPressed)
    {
        player.x += 10;
    }

    //player jump if already not jumping
    if(jumpPressed && isJumping === false)
    {
        player.velocityY = -25;
        console.log(player.isTouching(groundSprite));
        isJumping = true;
    }

    //check if the player is jumping 
    if(player.isTouching(groundSprite))
    {
        isJumping = false;
    }
}//move the player

function ClampThePlayer()
{
    wall_1 = createSprite(0,370, 30, _canvasHeight-70);
    wall_1.visible = false;

    wall_2 = createSprite(_canvasWidth,370, 30, _canvasHeight-70);
    wall_2.visible = false;

    player.collide(wall_1);
    player.collide(wall_2);
}

function gravity()
{
    player.velocityY += 2;
}//gravity

function LoadAnimation(sprite)
{
    var animation = loadAnimation(sprite[0],sprite[1],sprite[2],sprite[3],sprite[4],sprite[5]);
    return animation;
}