let sunX = 500; // Posição inicial do sol
let cloudX1 = 100; // Posição inicial da nuvem 1
let cloudX2 = 300; // Posição inicial da nuvem 2
let cloudX3 = 500; // Posição inicial da nuvem 3

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Cor do céu
  let skyColor = color(135, 206, 235); // Azul claro
  background(skyColor);

  // Desenhando as nuvens
  drawCloud(cloudX1, 80);
  drawCloud(cloudX2, 100);
  drawCloud(cloudX3, 60);

  // Movimento das nuvens
  cloudX1 += 0.2;
  cloudX2 += 0.3;
  cloudX3 += 0.1;

  // Reseta as nuvens quando saem da tela
  if (cloudX1 > width) cloudX1 = -100;
  if (cloudX2 > width) cloudX2 = -100;
  if (cloudX3 > width) cloudX3 = -100;

  // Sol
  noStroke();
  fill(255, 204, 0);
  ellipse(sunX, 100, 100, 100); // Posição do sol

  // Movimento do Sol
  sunX += 0.5;
  if (sunX > width) {
    sunX = -100; // Reseta a posição do sol para a esquerda
  }

  // Campo
  fill(34, 139, 34);
  rect(0, height - 50, width, 50);

  // Árvores
  drawTree(100, height - 50);
  drawTree(200, height - 40);
  drawTree(400, height - 50);
  drawTree(500, height - 60);
}

// Função para desenhar uma árvore
function drawTree(x, y) {
  // Tronco
  fill(139, 69, 19);
  rect(x - 5, y, 10, 20);

  // Folhagem
  fill(34, 139, 34);
  ellipse(x, y - 10, 30, 30);
  ellipse(x - 15, y - 20, 30, 30);
  ellipse(x + 15, y - 20, 30, 30);

  // Sombras das árvores
  fill(0, 100, 0, 150); // Sombra mais escura
  ellipse(x + 10, y + 10, 30, 20); // Sombra embaixo da árvore
}

// Função para desenhar uma nuvem
function drawCloud(x, y) {
  fill(255); // Cor branca da nuvem
  noStroke();
  ellipse(x, y, 80, 50); // Nuvem principal
  ellipse(x + 40, y, 60, 40); // Nuvem à direita
  ellipse(x - 40, y, 60, 40); // Nuvem à esquerda
}
