document.addEventListener('DOMContentLoaded', () => {
    console.log("Le script JavaScript est chargé avec succès !"); // Message de confirmation
    // Votre code existant...
});




document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const infoBox = document.getElementById('info-box');

    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseover', (event) => {
            const info = bubble.getAttribute('data-info');
            infoBox.innerHTML = info; // Met à jour le contenu
            infoBox.style.display = 'block'; // Affiche la boîte d'information
            infoBox.style.opacity = '1'; // Rend visible

            // Positionne la boîte d'information par rapport à la bulle
            const bubbleRect = bubble.getBoundingClientRect();
            infoBox.style.top = `${bubbleRect.top + window.scrollY - infoBox.offsetHeight - 10}px`;
            infoBox.style.left = `${bubbleRect.left + bubbleRect.width / 2 - infoBox.offsetWidth / 2}px`;
        });

        bubble.addEventListener('mouseout', () => {
            infoBox.style.opacity = '0'; // Rend invisible
            setTimeout(() => {
                infoBox.style.display = 'none'; // Cache complètement après la transition
            }, 300); // Attend la fin de la transition
        });
    });
});
