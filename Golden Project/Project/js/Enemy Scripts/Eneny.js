var enemy;
function CreateEnemies()
{
    enemy = createSprite(500,600,30,100);
    enemy.shapeColor = "red";
}

function CollideEnemies()
{
    player.collide(enemy);
    enemy.collide(groundGroup);
}

function EnemyGravity()
{
    enemy.velocityX = 0;
}
