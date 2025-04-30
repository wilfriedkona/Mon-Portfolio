import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Vérifie si l'utilisateur est authentifié
function isAuthenticated(request: NextRequest) {
  const cookie = request.cookies.get('admin_auth');
  return cookie?.value === 'true';
}

// src/app/api/admin/messages/[id]/route.ts
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Vérifier l'authentification
  if (!isAuthenticated(request)) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }
  
  const id = params.id;
  
  try {
    const filePath = path.join(process.cwd(), 'data/contacts.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { message: 'Fichier de contacts non trouvé' }, 
        { status: 404 }
      );
    }
    
    const contactsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    // Filtrer pour supprimer le message spécifié
    const updatedContacts = contactsData.filter((contact: { id: string; }) => contact.id !== id);
    
    if (updatedContacts.length === contactsData.length) {
      return NextResponse.json(
        { message: 'Message non trouvé' }, 
        { status: 404 }
      );
    }
    
    // Enregistrer les données mises à jour
    fs.writeFileSync(filePath, JSON.stringify(updatedContacts, null, 2));
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la suppression du message:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la suppression du message' }, 
      { status: 500 }
    );
  }
}