const btn = document.getElementById('click');
const container = document.getElementById('container');

btn.addEventListener('click', ()=> {
    container.classList.toggle('active');
})