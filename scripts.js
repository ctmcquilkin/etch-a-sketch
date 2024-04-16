window.onload = function() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const container = document.querySelector('#container');
    const button = document.querySelector('button');
    let totalSquares = 16;

    function createGrid(totalSquares) {
        container.innerHTML = '';
        const gridSize = Math.sqrt(totalSquares);
        const squareSize = 32;
        const containerSize = gridSize * squareSize;

        container.style.width = `${containerSize}px`;
        container.style.height = `${containerSize}px`;

        // Calculate the number of squares per row
        const squaresPerRow = Math.floor(containerSize / squareSize);

        for (i = 0; i < totalSquares; i++) {
            if (i >= squaresPerRow * Math.floor(totalSquares / squaresPerRow)) {
                // Skip creating squares beyond the last complete row
                break;
            }
            
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseover', () => {
                setColorToEl(square);
            });

            square.addEventListener('mouseout', () => {
                removeColorFromEl(square);
            });

            container.appendChild(square);
        };
    };
    createGrid(totalSquares);

    function setColorToEl(element) {
        const color = getRandomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    };

    function removeColorFromEl(element) {
        element.style.background = '#1D1D1D';
        element.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    button.addEventListener('click', () => {
        totalSquares = prompt('How many squares', 16);
        if (totalSquares > 100) {
            totalSquares = prompt('Choose a number equal to or less than 100', 16);
            if (totalSquares > 100) {
                totalSquares = 100;
            };
        };
        createGrid(totalSquares);
    })

};