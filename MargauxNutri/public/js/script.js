// Liste des services que tu proposes
const services = [
    "Consultation diététique",
    "Plan nutritionnel personnalisé",
    "Suivi de perte de poids",
    "Consultation en ligne"
];

// Sélectionne la liste dans laquelle on va ajouter les services
const servicesList = document.getElementById('services-list');

// Ajoute chaque service dans la liste de manière dynamique
services.forEach(service => {
    const li = document.createElement('li');
    li.textContent = service;
    servicesList.appendChild(li);
});

// Liste des images pour la galerie
const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

// Sélectionne le conteneur de la galerie
const galleryContainer = document.getElementById('gallery-container');

// Ajoute les images à la galerie de manière dynamique
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Image de la galerie";
    galleryContainer.appendChild(img);
});
