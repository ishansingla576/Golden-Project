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