var isJumping = false;

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
        isJumping = true;
    }

    //check if the player is jumping 
    if (isPlayerGrounded)
    {
        isJumping = false;
    }
}//move the player


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