window.onload = function() {
    const container = document.querySelector('#container');
    var i = 0;
    var j = 0;

    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= 4; j++) {
            var d = document.createElement('div');
            container.appendChild(d);
        };
    };
};
