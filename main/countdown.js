const countdown = document.getElementById('countdown');

// Date de l'ouverture du serveur
const serverOpeningDate = new Date('April 23, 2023 12:00:00').getTime();

// Mise à jour du compte à rebours chaque seconde
const x = setInterval(function() {

	// Date et heure actuelles
	const now = new Date().getTime();

	// Calcul du temps restant en millisecondes
	const distance = serverOpeningDate - now;

	// Calcul des jours, heures, minutes et secondes restants
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Affichage du compte à rebours
	countdown.innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

	// Si le compte à rebours est terminé, afficher un message
	if (distance < 0) {
		clearInterval(x);
		countdown.innerHTML = "Date pas encore estimée.";
	}

}, 1000);
