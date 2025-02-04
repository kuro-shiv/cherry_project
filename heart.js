const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let heartSize = 250;
let scaleFactor = 1;
let growing = true;

// Heart shape function
function heartPath(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y + size / 4);
    ctx.closePath();
}

// Animate the heart
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Pulse effect (increase & decrease size)
    if (growing) {
        scaleFactor += 0.005;
        if (scaleFactor >= 1.2) growing = false;
    } else {
        scaleFactor -= 0.005;
        if (scaleFactor <= 0.8) growing = true;
    }

    const currentSize = heartSize * scaleFactor;

    // Draw heart (Black with glowing red outline)
    ctx.fillStyle = "black";
    ctx.shadowColor = "rgba(255, 0, 0, 0.8)";  // Red glowing effect
    ctx.shadowBlur = 30;
    ctx.beginPath();
    heartPath(ctx, centerX, centerY - 50, currentSize);
    ctx.fill();

    requestAnimationFrame(animate);
}

// Resize canvas when window resizes
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start animation
animate();
