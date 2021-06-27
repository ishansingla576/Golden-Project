var enemy;
function CreateEnemies()
{
    enemy = createSprite(500,600,30,100);
    enemy.shapeColor = "red";
}

function CollideEnemies()
{
    enemy.collide(player);
    enemy.collide(groundGroup);
}

function EnemyGravity()
{
    enemy.velocityX = 0;
}
