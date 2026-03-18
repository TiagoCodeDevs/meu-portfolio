const textElement = document.getElementById('typing-text');
const professions = ["Front-end", "em ADS", "Python"];
let profIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = professions[profIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pausa antes de começar a deletar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        profIndex = (profIndex + 1) % professions.length;
        typeSpeed = 500; // Pausa antes de começar a digitar o próximo
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);