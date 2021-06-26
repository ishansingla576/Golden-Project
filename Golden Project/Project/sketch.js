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

    CreateLevel();
    CreatePlayer();

}//setup

//called every frame
function draw() 
{
    //set the background color
    background(255);

    CallPlayerFunctions();

    //draw all the sprites
    drawSprites();

}//draw