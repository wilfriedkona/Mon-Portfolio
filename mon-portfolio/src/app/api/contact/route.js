import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; // Vous devrez installer ce package: npm install uuid

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    
    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Tous les champs sont requis' }),
        { status: 400 }
      );
    }
    
    // Création d'un ID unique
    const id = uuidv4();
    const timestamp = new Date().toISOString();
    
    // Formatage de l'entrée
    const entry = {
      id,
      name,
      email,
      message,
      timestamp
    };
    
    // Chemin vers le fichier de contacts
    const filePath = path.join(process.cwd(), 'data', 'contacts.json');
    
    // Vérifier si le répertoire data existe, sinon le créer
    const dirPath = path.join(process.cwd(), 'data');
    try {
      await fs.access(dirPath);
    } catch (error) {
      await fs.mkdir(dirPath, { recursive: true });
    }
    
    // Charger les données existantes ou créer une liste vide
    let contacts = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      contacts = JSON.parse(fileContent);
    } catch (error) {
      // Le fichier n'existe probablement pas encore, c'est normal
    }
    
    // Ajouter la nouvelle entrée
    contacts.push(entry);
    
    // Écrire les données mises à jour dans le fichier
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    
    return new Response(
      JSON.stringify({ message: 'Message enregistré avec succès', id }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du message:', error);
    return new Response(
      JSON.stringify({ message: 'Une erreur s\'est produite lors de l\'enregistrement du message' }),
      { status: 500 }
    );
  }
}