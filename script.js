document.addEventListener("DOMContentLoaded", () => {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    const numberOfSnowflakes = 12 + Math.floor(Math.random() * 5); // Between 12 and 16 snowflakes

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.width = `${5 + Math.random() * 10}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDuration = `${5 + Math.random() * 5}s, ${3 + Math.random() * 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`;

        snowflakesContainer.appendChild(snowflake);
    }
});