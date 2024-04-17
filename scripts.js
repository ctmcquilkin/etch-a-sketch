// Function that builds a grid in the "container"
function createGrid(x) {
    const container = document.getElementById('container');
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            const square = document.createElement('div');
            square.classList.add('grid');
            container.appendChild(square);
        }
    }
    const gridSize = 960 / x;
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;
    });
}

// Function that clears the grid
function clearGrid() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.remove());
}

// Function that prompts the user to select the number of boxes in a new grid
// The function then also creates that new grid
function refreshGrid() {
    const z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
}

// Create a 16x16 grid when the page loads
// Creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// Allows the click of a button to prompt the user to create a new grid
document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    createGrid(16);

    document.querySelectorAll('.grid').forEach(grid => {
        grid.addEventListener('mouseover', function() {
            setColorToEl(grid);
        });
    });

    function setColorToEl(element) {
        const color = getRandomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    };

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    document.querySelector('.newGrid').addEventListener('click', function() {
        refreshGrid();

        document.querySelectorAll('.grid').forEach(grid => {
            grid.addEventListener('mouseover', function() {
                setColorToEl(grid);
            });
        });
    });
});