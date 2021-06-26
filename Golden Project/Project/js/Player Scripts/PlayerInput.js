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