var _canvasWidth = 1500, _canvasHeight = 800;
var groundSprite, groundSprite1, groundGroup;

var player, playerGroundCheck;
var playerIdle, playerRun, playerJump, playerFall;
var leftPressed, rightPressed, jumpPressed, sprintPressed;
var isJumping = false;

var player_isGrounded;

function preload() 
{
    LoadPlayerAnimations();
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

    CreatePlayer();

}//setup

//called every frame
function draw() 
{
    //set the background color
    background(255);

    SetGroundCheckPosition();

    player_isGrounded = playerGroundCheck.isTouching(groundGroup);

    KeyboardInput();
    MoveThePlayer();
    AnimateThePlayer();
    ClampThePlayer();
    gravity();

    //enable player collision with the ground
    player.collide(groundGroup);

    //draw all the sprites
    drawSprites();

}//draw