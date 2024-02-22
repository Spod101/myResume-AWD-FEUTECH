const button = document.querySelector('button');
const element = document.querySelector('.resume');

button.addEventListener('click', () => {
    if (element.style.backgroundColor === 'darkgreen') {
        element.style.color = '';
        element.style.backgroundColor = '';
        element.style.boxShadow = '';
        document.querySelector('hr').style.borderColor = '';
        document.querySelector('body').style.backgroundColor = '';
        document.querySelector('img').src = './assets/ID.png';
    } else {
        element.style.color = 'white';
        element.style.backgroundColor = 'darkgreen';
        element.style.boxShadow = '0 0 100px darkgreen';
        document.querySelector('hr').style.borderColor = 'white';
        document.querySelector('body').style.backgroundColor = '#252526';
        document.querySelector('img').src = './assets/id.jpg';
    }
    element.style.transition = 'all 0.3s ease-in-out';
    document.querySelector('hr').style.transition = 'border-color 0.3s ease-in-out';
    document.querySelector('body').style.transition = 'background-color 0.3s ease-in-out';
    document.querySelector('img').style.transition = 'src 0.3s ease-in-out ease-in-out';
});
