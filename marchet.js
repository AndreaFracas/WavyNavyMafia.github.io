const texts = document.querySelectorAll('.percentuale-stock-testo');

texts.forEach((text) => {
    if (text.textContent.includes('+')) {
        text.classList.add('green');
    } else if (text.textContent.includes('-')) {
        text.classList.add('red');
    }
});
