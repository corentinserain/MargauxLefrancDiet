document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const infoBox = document.getElementById('info-box');

    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseover', () => {
            const info = bubble.getAttribute('data-info');
            infoBox.innerHTML = info; // Met à jour le contenu de la boîte d'information
            infoBox.style.display = 'block'; // Affiche la boîte d'information
        });

        bubble.addEventListener('mouseout', () => {
            infoBox.style.display = 'none'; // Masque la boîte d'information lorsqu'on ne survole plus
        });
    });
});

