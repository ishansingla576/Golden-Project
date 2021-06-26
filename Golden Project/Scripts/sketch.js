var _canvasWidth = 1500, _canvasHeight = 800;
var groundSprite;

var player;
var leftPressed, rightPressed, jumpPressed, sprintPressed;
var isJumping = false;

//called only once at start
function setup()
{
    //create the canvas
    createCanvas(_canvasWidth,_canvasHeight);

    //create ground
    groundSprite = createSprite(_canvasWidth/2, 750, _canvasWidth, 20);
    //color the ground
    groundSprite.shapeColor = "brown";

    //create the player
    player = createSprite(100,500, 50,120);
    //color the player
    player.shapeColor = "red";
    
}

//called every frame
function draw()
{
    //set the background color
    background(255);

    KeyboardInput();
    MoveThePlayer();
    gravity();

    //enable player collision with the ground
    player.collide(groundSprite);

    player.debug = true;
    groundSprite.debug = true;

    //draw all the sprites
    drawSprites();
}

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
}

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

    if(player.isTouching(groundSprite))
    {
        isJumping = false;
    }
}

function gravity()
{
    
    player.velocityY += 2;
}