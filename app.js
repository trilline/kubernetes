// Importer le module HTTP
const http = require('http');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  // Définir l'en-tête de la réponse HTTP
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Envoyer la réponse
  res.end('Hello, Maeva NGOBAN!');
});

// Définir le port d'écoute du serveur
const port = 3000;

// Démarrer le serveur et écouter les requêtes sur le port spécifié
server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
