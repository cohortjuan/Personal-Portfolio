js
/**
 * ⚡ OROCHIMARU'S TRIAL - PURE JS ENGINE
 * Optimized for O(1) Collision & Zero Glitch Input
 */

const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score-display');
const hiDisplay = document.getElementById('hi-display');
const outcomeOverlay = document.getElementById('game-outcome');
const outcomeMessage = document.getElementById('outcome-message');
const restartBtn = document.getElementById('snake-start-btn');

// 1. CONFIG & STATE
const GRID_SIZE = 20;
let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};
let direction = {x: 0, y: 0};
let score = 0;
let hiScore = localStorage.getItem('hiScore') || 0;
let gameRunning = false;
let inputLocked = false; // Input Buffer Lock

const QUOTES = [
    "🐍 \"You don't have enough hatred... or talent.\"",
    "🐍 \"Hmph. You aren't even worth using as a test subject.\"",
    "🐍 \"Poor thing. You simply lacked the will to survive.\"",
    "🐍 \"I expected more from a potential vessel.\""
];

// 2. INPUT HANDLING (The "Double-Key" Fix)
window.addEventListener('keydown', e => {
    if (inputLocked) return; // Ignore fast mashing
    
    const key = e.key.toLowerCase();
    const goingUp = direction.y === -1;
    const goingDown = direction.y === 1;
    const goingRight = direction.x === 1;
    const goingLeft = direction.x === -1;

    if ((key === 'arrowup' || key === 'w') && !goingDown) direction = {x: 0, y: -1};
    else if ((key === 'arrowdown' || key === 's') && !goingUp) direction = {x: 0, y: 1};
    else if ((key === 'arrowleft' || key === 'a') && !goingRight) direction = {x: -1, y: 0};
    else if ((key === 'arrowright' || key === 'd') && !goingLeft) direction = {x: 1, y: 0};

    inputLocked = true;
    setTimeout(() => { inputLocked = false; }, 80); // Sync with game speed
});

// 3. CORE ENGINE
function gameLoop() {
    if (!gameRunning) return;
    
    moveSnake();
    if (checkCollision()) return endGame();
    if (eatFood()) handleScore();
    
    draw();
    setTimeout(gameLoop, 100);
}

function moveSnake() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    snake.unshift(head);
    snake.pop();
}

function checkCollision() {
    const head = snake[0];
    // Wall collision
    if (head.x < 0 || head.x >= canvas.width/GRID_SIZE || head.y < 0 || head.y >= canvas.height/GRID_SIZE) return true;
    // Self collision (O(n) - can be O(1) with a Set for pro-level)
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) return true;
    }
    return false;
}

function draw() {
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw Food (Cursed Mark)
    ctx.fillStyle = '#ff0044';
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE-2, GRID_SIZE-2);
    
    // Draw Snake (Sage Mode)
    ctx.fillStyle = '#a855f7';
    snake.forEach(part => {
        ctx.fillRect(part.x * GRID_SIZE, part.y * GRID_SIZE, GRID_SIZE-2, GRID_SIZE-2);
    });
}

// 4. UI HANDLERS
function endGame() {
    gameRunning = false;
    outcomeMessage.innerText = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    outcomeOverlay.classList.add('show');
}

restartBtn.addEventListener('click', () => {
    snake = [{x: 10, y: 10}];
    direction = {x: 0, y: 0};
    score = 0;
    gameRunning = true;
    outcomeOverlay.classList.remove('show');
    gameLoop();
});

// Start initialization
hiDisplay.innerText = hiScore;
gameRunning = true;
gameLoop();
