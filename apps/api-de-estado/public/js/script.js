let loading = true
const API_URL = '/entity'
let entities
const CANVAS_WIDTH = 1100
const CANVAS_HEIGHT = 600
const camera = { x: 0, y: 0 }
const MAP_WIDTH = 300
const MAP_HEIGHT = 100
const MAP_REC_WIDTH = 50
const MAP_REC_HEIGHT = 20
const BIG_NUMBER = 999999999
const cameraXPosition = CANVAS_WIDTH / 2 - MAP_WIDTH / 2
const cameraYPosition = CANVAS_HEIGHT - MAP_HEIGHT - 10

let MAP_RELATION_WIDTH
let MAP_RELATION_HEIGHT

let minX = BIG_NUMBER, 
    maxX = -BIG_NUMBER,
    minY = BIG_NUMBER,
    maxY = - BIG_NUMBER


function drawMap() {
  entities.entities.forEach(entity => {
    const { x, y } = entity.position

    if (x < minX) minX = x
    if (y < minY) minY = y
    if (x > maxX) maxX = x
    if (y > maxY) maxY = y
  })

  MAP_RELATION_WIDTH = maxX - minX
  MAP_RELATION_HEIGHT = maxY - minY

  stroke('#fae');
  strokeWeight(2);
  fill(0);
  
  rect(cameraXPosition, cameraYPosition, MAP_WIDTH, MAP_HEIGHT);

  stroke('#fff');
  strokeWeight(1);
  fill(0);
  rect(cameraXPosition + camera.x, cameraYPosition + camera.y, MAP_REC_WIDTH, MAP_REC_HEIGHT);

  
  entities.entities.forEach(entity => {
    const { x, y } = entity.position
    const targetX = (x - minX) * 100/MAP_RELATION_WIDTH
    const targetY = (y - minY) * 100/MAP_RELATION_HEIGHT
    
    fill("#fff");
    rect(cameraXPosition + (targetX * MAP_WIDTH), cameraYPosition + (targetY * MAP_HEIGHT), 1, 1);
  })
  
}


/* metodos de processing */

function setup() {
  fetch(API_URL)
    .then(res => res.json())
    .then(e => entities = e)
  
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}


function draw() {
    background(0,0,0);
    stroke('#fae');
    strokeWeight(2);
    fill(0);
    rect(1, 1, CANVAS_WIDTH - 2, CANVAS_HEIGHT - 2);

    if (entities) {
      drawMap()
      entities.entities.forEach(entity => {
        const { x, y } = entity.position
        fill(entity.color);
        rect(x, y, 10, 10);
      })

      noStroke()
      textSize(12);
      text(`POPULATION: ${entities.entities.length}`, 10, CANVAS_HEIGHT - 10);
      text(`CAMERA POSITION: ${camera.x} ${camera.y}`, CANVAS_WIDTH - 145, CANVAS_HEIGHT - 10);
    }
  }

  function mouseClicked() {
    
    if (
      mouseX > cameraXPosition &&
      mouseX < cameraXPosition + MAP_WIDTH &&
      mouseY > cameraYPosition &&
      mouseY < cameraYPosition + MAP_HEIGHT
    ) {
      let xTarget = mouseX - (MAP_REC_WIDTH/2) - cameraXPosition
      let yTarget = mouseY - (MAP_REC_HEIGHT/2) -cameraYPosition

      if (xTarget < 0) xTarget = 0
      if (xTarget + MAP_REC_WIDTH > MAP_WIDTH - MAP_REC_WIDTH) xTarget = MAP_WIDTH - MAP_REC_WIDTH
      camera.x = xTarget
      
      if (yTarget < 0) yTarget = 0
      if (yTarget + MAP_REC_HEIGHT > MAP_HEIGHT - MAP_REC_HEIGHT) yTarget = MAP_HEIGHT - MAP_REC_HEIGHT
      camera.y = yTarget


    }
  }