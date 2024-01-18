// Initialisation d'EmailJS avec votre user ID
(function(){
    emailjs.init("6ohDBQBOaIWlsCD0R");
  })();
  
  // Gestionnaire d'événements pour le formulaire
  document.getElementById('mon-formulaire').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_8ynqxla', 'template_pgrkjx6', this)
      .then(function() {
        alert('Message envoyé avec succès!');
      }, function(error) {
        alert('Erreur lors de l\'envoi : ' + JSON.stringify(error));
      });
  });
  