function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
}

function handleProjectileCollisions() {
  // Recorre todos los proyectiles
  for (let p = 0; p < projectiles.length; p++) {
    const projectile = projectiles[p];
    // Recorre todos los objetos del juego
    for (let g = 0; g < gameObjects.length; g++) {
      const gameObject = gameObjects[g];
      // Solo colisiona si el objeto tiene hp positivo
      if (gameObject.hp > 0 && isCollidingWithProjectile(gameObject, projectile)) {
        handleProjectileObjectCollision(p, g);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
