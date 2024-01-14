const button = document.querySelector('button');
const element = document.querySelector('.resume');

button.addEventListener('click', () => {
    if (element.style.backgroundColor === 'darkgreen') {
        element.style.color = '';
        element.style.backgroundColor = '';
        element.style.boxShadow = '';
        document.querySelector('hr').style.borderColor = '';
        document.querySelector('body').style.backgroundColor = '';
 
