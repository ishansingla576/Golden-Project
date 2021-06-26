var playerIdle, playerRun, playerJump, playerFall;

function LoadPlayerAnimations()
{
    playerIdle = loadAnimation("Assets/Player Animations/Idle/0.png", "Assets/Player Animations/Idle/1.png", "Assets/Player Animations/Idle/2.png", "Assets/Player Animations/Idle/3.png", "Assets/Player Animations/Idle/4.png", "Assets/Player Animations/Idle/5.png");
    playerRun = loadAnimation("Assets/Player Animations/Run/0.png", "Assets/Player Animations/Run/1.png", "Assets/Player Animations/Run/2.png", "Assets/Player Animations/Run/3.png", "Assets/Player Animations/Run/4.png", "Assets/Player Animations/Run/5.png", "Assets/Player Animations/Run/6.png", "Assets/Player Animations/Run/7.png");
    playerJump = loadAnimation("Assets/Player Animations/Jump/0.png", "Assets/Player Animations/Jump/1.png");
    playerFall = loadAnimation("Assets/Player Animations/Fall/0.png", "Assets/Player Animations/Fall/1.png");
}

function AnimateThePlayer() 
{
    if (isPlayerGrounded)
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