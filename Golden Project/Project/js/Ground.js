function CreateLevel()
{
    groundGroup = new Group();

    //create ground
    groundSprite = createSprite(_canvasWidth / 2, 750, _canvasWidth, 20);
    groundSprite1 = createSprite(_canvasWidth / 2, 600, 200, 20);

    groundGroup.add(groundSprite);
    groundGroup.add(groundSprite1);
    //color the ground
    groundSprite.shapeColor = "brown";

}