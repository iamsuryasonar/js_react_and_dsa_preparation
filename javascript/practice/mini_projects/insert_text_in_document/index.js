const text_area = document.querySelector('.textarea');
const text_input = document.getElementById('input_text');

text_area.addEventListener('input', (e) => {
    text_input.textContent = e.target.value;
});