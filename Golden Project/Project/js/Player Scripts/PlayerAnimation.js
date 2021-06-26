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