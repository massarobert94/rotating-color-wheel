const circle = document.getElementById('circle');
const box = document.getElementById('box');

init();

function init() {
    circle.addEventListener('mouseover', () => {
        circle.style.backgroundImage = 'linear-gradient('
        + 'to right' + ', ' + 'darkmagenta' + ', ' + 'cyan' + ')';
    })
    box.addEventListener('mouseover', () => {
        box.style.backgroundImage = 'linear-gradient('
        + 'to left' + ', ' + 'darkmagenta' + ', ' + 'cyan' + ')';
    })
    box.addEventListener('mouseout', () => {
        box.style.backgroundImage = 'linear-gradient('
        + 'to right' + ', ' + 'darkmagenta' + ', ' + 'cyan' + ')';
        circle.style.backgroundImage = 'linear-gradient('
        + 'to left' + ', ' + 'darkmagenta' + ', ' + 'cyan' + ')'
    })
}