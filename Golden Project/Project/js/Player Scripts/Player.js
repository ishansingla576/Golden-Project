var player, playerGroundCheck;
var isPlayerGrounded;

function CreatePlayer()
{
    //create the player
    player = createSprite(100, 500, 50, 120);

    player.addAnimation("Player Idle", playerIdle);
    player.addAnimation("Player Run", playerRun);
    player.addAnimation("Player Jump", playerJump);
    player.addAnimation("Player Fall", playerFall);

    player.setCollider("rectangle", 0, 0, 70, 90);

    playerGroundCheck = createSprite(player.x,player.y + 20, 25, 25);
    playerGroundCheck.visible = false;

    
}

function SetGroundCheckPosition()
{
    playerGroundCheck.x = player.x;
    playerGroundCheck.y = player.y + 45;

}

function CollidePlayer()
{
    //enable player collision with the ground
    player.collide(groundGroup);
    isPlayerGrounded = playerGroundCheck.isTouching(groundGroup);

}

function CallPlayerFunctions()
{
    SetGroundCheckPosition();
    KeyboardInput();
    MoveThePlayer();
    AnimateThePlayer();
    ClampThePlayer();
    gravity();
    CollidePlayer();
}