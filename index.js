document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    let noClickCount = 0; // Track "No" clicks

    window.validateLogin = function(answer) {
        if (answer === "yes") {
            // Redirect to home.html when "Yes" is clicked
            window.location.href = "heart.html";
        } else {
            noClickCount++;

            if (noClickCount === 1) {
                // First "No" click - Change text
                loginContainer.innerHTML = `
                    <h2>Really? You don't love me? 💔</h2>
                    <h4>Are you absolutely sure? 😢</h4>
                    <button onclick="validateLogin('yes')">Yes, I do! ❤️</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onclick="validateLogin('no')" id="noButton">No... 😔</button>
                `;
            } else if (noClickCount === 2) {
                // Second "No" click - Change text again
                loginContainer.innerHTML = `
                    <h2>Think again... 🥺</h2>
                    <h4>You might regret this! 💔</h4>
                    <button onclick="validateLogin('yes')">Yes, I do! ❤️</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="movingNoButton">No... 😔</button>
                `;

                // Make "No" button move when hovered
                const movingNoButton = document.getElementById("movingNoButton");
                movingNoButton.addEventListener("mouseover", moveButton);
            }
        }
    };

    function moveButton() {
        const noButton = document.getElementById("movingNoButton");

        // Get viewport width & height
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get button dimensions
        const buttonWidth = noButton.clientWidth;
        const buttonHeight = noButton.clientHeight;

        // Define safe boundaries to prevent button from going off-screen
        const maxX = viewportWidth - buttonWidth - 20;  // 20px padding from the right
        const maxY = viewportHeight - buttonHeight - 20; // 20px padding from the bottom
        const minX = 20;  // 20px padding from the left
        const minY = 20;  // 20px padding from the top

        // Generate random positions within the safe area
        const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
        const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

        // Move the "No" button to the new position
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
});
