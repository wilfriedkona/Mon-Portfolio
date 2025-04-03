// scripts/setup-auth.js
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

async function setup() {
  try {
    // Mot de passe à hacher
    const password = '0111Rosine.';
    
    // Générer un hash avec bcrypt (coût de 10)
    const passwordHash = await bcrypt.hash(password, 10);
    
    // Créer l'objet à sauvegarder
    const authData = {
      passwordHash
    };
    
    // S'assurer que le dossier data existe
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Écrire le fichier
    const authFilePath = path.join(dataDir, 'auth.json');
    fs.writeFileSync(authFilePath, JSON.stringify(authData, null, 2));
    
    console.log('Fichier auth.json créé avec succès!');
  } catch (error) {
    console.error('Erreur lors de la configuration de l\'authentification:', error);
  }
}

setup();