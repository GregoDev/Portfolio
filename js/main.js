// Animation douce pour le défilement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Ici, vous pourrez ajouter le code pour envoyer les données à un serveur
    console.log('Formulaire soumis :', { nom, email, message });
    
    // Réinitialisation du formulaire
    this.reset();
    alert('Message envoyé avec succès !');
});

// Animation des compétences au scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.competence-item').forEach(item => {
    observer.observe(item);
}); 