
const typingElement = document.getElementById('typing');
const words = ["Développeuse Front-End", "Étudiante"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', type);