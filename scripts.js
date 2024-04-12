window.onload = function() {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const container = document.querySelector('#container');
    let i = 0;
    let j = 0;

    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= 4; j++) {
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

};
