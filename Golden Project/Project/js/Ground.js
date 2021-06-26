function CreateLevel()
{
    groundGroup = new Group();

    //create ground
    ground1 = createGround(_canvasWidth / 2, 750, _canvasWidth, 20);
    ground2 = createGround(750, 600, 200, 20);
    ground3 = createGround(1050, 500, 200, 20);
    ground3 = createGround(650, 400, 200, 20);
    ground4 = createGround(200, 450, 200, 20);

}

function createGround(x, y, w, h)
{
    _ground = createSprite(x, y, w, h);
    _ground.shapeColor = "Brown";
    groundGroup.add(_ground);

    return _ground;
}