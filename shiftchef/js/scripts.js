javascript
// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------
    // Gestion des Horaires
    // ----------------------------
    function afficherHoraires() {
        const horaires = [
            { jour: 'Lundi', heures: '09:00 - 17:00' },
            { jour: 'Mardi', heures: '09:00 - 17:00' },
            // Ajouter d'autres jours si nécessaire
        ];

        const horairesContainer = document.getElementById('horaires');
        if (horairesContainer) {
            horaires.forEach(horaire => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${horaire.jour}:</strong> ${horaire.heures}`;
                horairesContainer.appendChild(div);
            });
        }
    }

    // ----------------------------
    // Gestion des Tâches
    // ----------------------------
    function afficherTaches() {
        const taches = [
            { titre: 'Réunion avec l\'équipe', date: '2024-07-31' },
            { titre: 'Préparation du rapport', date: '2024-08-01' },
            // Ajouter d'autres tâches si nécessaire
        ];

        const tachesContainer = document.getElementById('taches');
        if (tachesContainer) {
            taches.forEach(tache => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${tache.titre}</strong> - ${tache.date}`;
                tachesContainer.appendChild(div);
            });
        }
    }

    // ----------------------------
    // Affichage du Graphique de Performance
    // ----------------------------
    function afficherPerformance() {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Performance',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // ----------------------------
    // Gestion des Congés
    // ----------------------------
    function gererConges() {
        const formulaireConges = document.getElementById('formulaireConges');
        if (formulaireConges) {
            formulaireConges.addEventListener('submit', (e) => {
                e.preventDefault();
                const nom = document.getElementById('nomConges').value;
                const dateDebut = document.getElementById('dateDebut').value;
                const dateFin = document.getElementById('dateFin').value;

                console.log(`Demande de congés : ${nom} du ${dateDebut} au ${dateFin}`);
                alert('Votre demande de congés a été soumise!');
            });
        }
    }

    // ----------------------------
    // Gestion du Chat Interne
    // ----------------------------
    function gererChat() {
        const formulaireChat = document.getElementById('formulaireChat');
        if (formulaireChat) {
            formulaireChat.addEventListener('submit', (e) => {
                e.preventDefault();
                const message = document.getElementById('messageChat').value;
                const chatContainer = document.getElementById('chatContainer');

                if (chatContainer) {
                    const div = document.createElement('div');
                    div.textContent = message;
                    chatContainer.appendChild(div);
                }

                document.getElementById('messageChat').value = '';
            });
        }
    }

    // ----------------------------
    // Intégration des Services de Paiement
    // ----------------------------
    function ouvrirPaiement() {
        const boutonPaiement = document.getElementById('paiementButton');
        if (boutonPaiement) {
            boutonPaiement.addEventListener('click', () => {
                window.location.href = 'https://example.com/paiement';
            });
        }
    }

    // ----------------------------
    // Envoi de Notifications par SMS
    // ----------------------------
    function envoyerNotificationSMS() {
        const boutonNotification = document.getElementById('notificationButton');
        if (boutonNotification) {
            boutonNotification.addEventListener('click', () => {
                alert('Notification SMS envoyée !');
            });
        }
    }

    // ----------------------------
    // Affichage de l'Organigramme
    // ----------------------------
    function afficherOrganigramme() {
        const organigrammeData = [
            { nom: 'Directeur', sousOrdres: ['Responsable 1', 'Responsable 2'] },
            { nom: 'Responsable 1', sousOrdres: ['Employé 1', 'Employé 2'] },
            // Ajouter d'autres niveaux si nécessaire
        ];

        const organigrammeContainer = document.getElementById('organigramme');
        if (organigrammeContainer) {
            organigrammeData.forEach(personne => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${personne.nom}</strong><ul>${personne.sousOrdres.map(s => `<li>${s}</li>`).join('')}</ul>`;
                organigrammeContainer.appendChild(div);
            });
        }
    }

    // ----------------------------
    // Gestion du Planificateur
    // ----------------------------
    function gererPlanificateur() {
        const formulairePlanificateur = document.getElementById('formulairePlanificateur');
        if (formulairePlanificateur) {
            formulairePlanificateur.addEventListener('submit', (e) => {
                e.preventDefault();
                const tache = document.getElementById('tachePlanificateur').value;
                const date = document.getElementById('datePlanificateur').value;

                console.log(`Planification : ${tache} pour le ${date}`);
                alert('Votre tâche a été ajoutée au planificateur!');
            });
        }
    }

    // Appel des Fonctions
    afficherHoraires();
    afficherTaches();
    afficherPerformance();
    gererConges();
    gererChat();
    ouvrirPaiement();
    envoyerNotificationSMS();
    afficherOrganigramme();
    gererPlanificateur();

});