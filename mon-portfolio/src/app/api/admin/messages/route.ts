// src/app/api/admin/messages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Vérifie si l'utilisateur est authentifié
function isAuthenticated(request: NextRequest) {
  const cookie = request.cookies.get('admin_auth');
  return cookie?.value === 'true';
}

export async function GET(request: NextRequest) {
  // Vérifier l'authentification
  if (!isAuthenticated(request)) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }
  
  try {
    const filePath = path.join(process.cwd(), 'data/contacts.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([], { status: 200 });
    }
    
    const contactsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    // Trier par date (plus récent en premier)
    contactsData.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return NextResponse.json(contactsData, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des messages' }, 
      { status: 500 }
    );
  }
}