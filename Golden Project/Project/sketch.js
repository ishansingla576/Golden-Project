var _canvasWidth = 1500, _canvasHeight = 800;
var groundSprite, groundSprite1, groundGroup;

var player, playerGroundCheck;
var playerIdle, playerRun, playerJump, playerFall;
var leftPressed, rightPressed, jumpPressed, sprintPressed;
var isJumping = false;

var player_isGrounded;

function preload() 
{
    playerIdle = loadAnimation("Assets/Player Animations/Idle/0.png", "Assets/Player Animations/Idle/1.png", "Assets/Player Animations/Idle/2.png", "Assets/Player Animations/Idle/3.png", "Assets/Player Animations/Idle/4.png", "Assets/Player Animations/Idle/5.png");
    playerRun = loadAnimation("Assets/Player Animations/Run/0.png", "Assets/Player Animations/Run/1.png", "Assets/Player Animations/Run/2.png", "Assets/Player Animations/Run/3.png", "Assets/Player Animations/Run/4.png", "Assets/Player Animations/Run/5.png", "Assets/Player Animations/Run/6.png", "Assets/Player Animations/Run/7.png");
    playerJump = loadAnimation("Assets/Player Animations/Jump/0.png", "Assets/Player Animations/Jump/1.png");
    playerFall = loadAnimation("Assets/Player Animations/Fall/0.png", "Assets/Player Animations/Fall/1.png");
}

//called only once at start
function setup() 
{
    //create the canvas
    createCanvas(_canvasWidth, _canvasHeight);

    groundGroup = new Group();

    //create ground
    groundSprite = createSprite(_canvasWidth / 2, 750, _canvasWidth, 20);
    groundSprite1 = createSprite(_canvasWidth / 2, 600, 200, 20);

    groundGroup.add(groundSprite);
    groundGroup.add(groundSprite1);
    //color the ground
    groundSprite.shapeColor = "brown";

    //create the player
    player = createSprite(100, 500, 50, 120);

    player.addAnimation("Player Idle", playerIdle);
    player.addAnimation("Player Run", playerRun);
    player.addAnimation("Player Jump", playerJump);
    player.addAnimation("Player Fall", playerFall);

    player.setCollider("rectangle", 0, 0, 70, 90);

    playerGroundCheck = createSprite(player.x,player.y + 20, 25, 25);
    playerGroundCheck.visible = false;

}//setup

//called every frame
function draw() 
{
    //set the background color
    background(255);

    playerGroundCheck.x = player.x;
    playerGroundCheck.y = player.y + 45;

    player_isGrounded = playerGroundCheck.isTouching(groundGroup);

    KeyboardInput();
    MoveThePlayer();
    AnimateThePlayer();
    ClampThePlayer();
    gravity();

    //enable player collision with the ground
    player.collide(groundGroup);

    //player.debug = true;
    //groundSprite1.debug = true;

    //draw all the sprites
    drawSprites();

}//draw

function KeyboardInput() 
{
    if (keyIsDown(LEFT_ARROW) || keyDown("a")) 
    {
        leftPressed = true;
    }
    else leftPressed = false;

    if (keyIsDown(RIGHT_ARROW) || keyDown("d")) 
    {
        rightPressed = true;
    }
    else rightPressed = false;

    if (keyDown("space")) 
    {
        jumpPressed = true;
    }
    else jumpPressed = false;
}// KeyboardInput


function MoveThePlayer() 
{
    //move the player to the left
    if (leftPressed) 
    {
        //stop the player if both left and right are pressed
        if(rightPressed)
        {
            player.velocityX = 0;
        }

        else
        { 
            player.velocityX = -10;
        }
    }

    //move the player to the right
    else if (rightPressed) 
    {
        //stop the player if both left and right are pressed
        if(leftPressed)
        {
            player.velocityX = 0;
        }

        else
        {
            player.velocityX = 10;
        }
    }

    else 
    {
        player.velocityX = 0;
    }

    //player jump if already not jumping
    if (jumpPressed && isJumping === false)
    {
        player.velocityY = -25;
        console.log(player_isGrounded);
        isJumping = true;
    }

    //check if the player is jumping 
    if (player_isGrounded)
    {
        isJumping = false;
    }
}//move the player


function AnimateThePlayer() 
{
    if (player_isGrounded)
    {
        if (player.velocityX < 0) 
        {
            player.mirrorX(-1);
            player.changeAnimation("Player Run");
        }

        else if (player.velocityX > 0) 
        {
            player.mirrorX(1);
            player.changeAnimation("Player Run")
        }

        else if (player.velocityX === 0) 
        {
            //player.mirrorX(1);
            player.changeAnimation("Player Idle");
        }

    }

    else
    {
        if(player.velocityY < 0)
        {
            if (player.velocityX < 0) 
            {
                player.mirrorX(-1);
            }

            else if (player.velocityX > 0) 
            {
                player.mirrorX(1);
            }

            player.changeAnimation("Player Jump");
        }

        if(player.velocityY > 0)
        {
            if (player.velocityX < 0) 
            {
                player.mirrorX(-1);
            }

            else if (player.velocityX > 0) 
            {
                player.mirrorX(1);
            }

            player.changeAnimation("Player Fall");
        }
    }

}

function ClampThePlayer() 
{
    wall_1 = createSprite(0, 370, 30, _canvasHeight - 70);
    wall_1.visible = false;

    wall_2 = createSprite(_canvasWidth, 370, 30, _canvasHeight - 70);
    wall_2.visible = false;

    player.collide(wall_1);
    player.collide(wall_2);
}

function gravity() 
{
    player.velocityY += 2;
}//gravity