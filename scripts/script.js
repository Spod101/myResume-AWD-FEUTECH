var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-mode');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
});
