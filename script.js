document.addEventListener("DOMContentLoaded", () => {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    const numberOfSnowflakes = 12 + Math.floor(Math.random() * 5); // Between 12 and 16 snowflakes

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.width = `${5 + Math.random() * 10}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDuration = `${5 + Math.random() * 5}s`; // Fall speed
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Delay before start

        snowflake.addEventListener('animationend', () => {
            snowflake.remove(); // Remove snowflake after animation ends
            createSnowflake(); // Create new snowflake
        });

        snowflakesContainer.appendChild(snowflake);
    }

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
});
