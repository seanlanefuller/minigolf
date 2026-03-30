// =====================
// Canvas setup
// =====================
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// =====================
// Game constants
// =====================
const friction = 0.96;
const bounceLoss = 0.8;
const holeCount = 18;

// =====================
// Game state
// =====================
let currentHoleIndex = 0;
let scores = Array(holeCount).fill(0);
let isDragging = false;
let dragPos = { x: 0, y: 0 };

// =====================
// Ball
// =====================
const ball = {
    x: 0,
    y: 0,
    radius: 10,
    vx: 0,
    vy: 0
};

// =====================
// UI
// =====================
const scoreboard = document.getElementById("scoreboard");
const nextHoleBtn = document.getElementById("nextHoleBtn");

// =====================
// Utility
// =====================
function currentHole() {
    return holes[currentHoleIndex];
}

// =====================
// Drawing
// =====================
function drawCourse() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Putting surface
    ctx.fillStyle = "#4caf50";
    ctx.beginPath();
    const b = currentHole().boundaries;
    ctx.moveTo(b[0].x, b[0].y);
    for (let p of b) ctx.lineTo(p.x, p.y);
    ctx.closePath();
    ctx.fill();

    // Hole cup
    const h = currentHole().hole;
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.radius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // Obstacles
    for (const obs of currentHole().obstacles) {
        if (obs.type === "wall") {
            ctx.strokeStyle = "#8b4513";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(obs.x1, obs.y1);
            ctx.lineTo(obs.x2, obs.y2);
            ctx.stroke();
        }

        if (obs.type === "windmill") {
            ctx.save();
            ctx.translate(obs.x, obs.y);
            ctx.rotate(obs.angle);
            ctx.fillStyle = "#aaa";
            ctx.fillRect(-2, -obs.radius, 4, obs.radius * 2);
            ctx.fillRect(-obs.radius, -2, obs.radius * 2, 4);
            ctx.restore();
        }
    }

    // Ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Drag line
    if (isDragging) {
        ctx.beginPath();
        ctx.moveTo(ball.x, ball.y);
        ctx.lineTo(dragPos.x, dragPos.y);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// =====================
// Physics
// =====================
function updateBall() {
    ball.x += ball.vx;
    ball.y += ball.vy;

    ball.vx *= friction;
    ball.vy *= friction;

    if (Math.abs(ball.vx) < 0.01) ball.vx = 0;
    if (Math.abs(ball.vy) < 0.01) ball.vy = 0;

    // Canvas wall bounce
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.vx *= -bounceLoss;
    }
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.vy *= -bounceLoss;
    }
}

// =====================
// Windmills
// =====================
function updateWindmills() {
    try {
        for (const obs of currentHole().obstacles) {
            if (obs.type === "windmill") {
                obs.angle += obs.speed;

                // Simple collision push
                const dx = ball.x - obs.x;
                const dy = ball.y - obs.y;
                const dist = Math.hypot(dx, dy);

                if (dist < obs.radius + ball.radius) {
                    ball.vx += dx * 0.02;
                    ball.vy += dy * 0.02;
                }
            }
        }
    } catch (e) {
        console.error(e);
    }
}

// =====================
// Hole detection
// =====================
function checkHoleComplete() {
    const h = currentHole().hole;
    const dx = ball.x - h.x;
    const dy = ball.y - h.y;

    if (Math.hypot(dx, dy) < ball.radius + h.radius && ball.vx === 0 && ball.vy === 0) {
        nextHoleBtn.disabled = false;
    }
}

// =====================
// Game loop
// =====================
function gameLoop() {
    updateBall();
    updateWindmills();
    checkHoleComplete();
    drawCourse();
    requestAnimationFrame(gameLoop);
}

// =====================
// Input
// =====================
canvas.addEventListener("mousedown", e => {
    if (ball.vx || ball.vy) return;
    isDragging = true;
    dragPos = { x: e.offsetX, y: e.offsetY };
});

canvas.addEventListener("mousemove", e => {
    if (isDragging) {
        dragPos = { x: e.offsetX, y: e.offsetY };
    }
});

canvas.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    ball.vx = (ball.x - dragPos.x) * 0.15;
    ball.vy = (ball.y - dragPos.y) * 0.15;

    scores[currentHoleIndex]++;
    updateScoreboard();
});

// =====================
// Hole progression
// =====================
nextHoleBtn.addEventListener("click", () => {
    currentHoleIndex++;
    if (currentHoleIndex >= holes.length) {
        alert("Game complete! Total strokes: " + scores.reduce((a, b) => a + b, 0));
        return;
    }
    loadHole();
});

function loadHole() {
    const h = currentHole();
    ball.x = h.start.x;
    ball.y = h.start.y;
    ball.vx = ball.vy = 0;
    nextHoleBtn.disabled = true;
    updateScoreboard();
}

// =====================
// UI
// =====================
function updateScoreboard() {
    scoreboard.textContent =
        `Hole ${currentHoleIndex + 1} | Strokes: ${scores[currentHoleIndex]} | Total: ${scores.reduce((a, b) => a + b, 0)}`;
}

// =====================
// Start game
// =====================
loadHole();
gameLoop();
