// src/app/api/auth/route.ts
import { NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Lire le fichier d'authentification
    const authFilePath = path.join(process.cwd(), 'data/auth.json');
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(authFilePath)) {
      return NextResponse.json(
        { message: 'Configuration d\'authentification non trouvée' }, 
        { status: 500 }
      );
    }
    
    // Lire les données d'authentification
    const authData = JSON.parse(fs.readFileSync(authFilePath, 'utf-8'));
    
    // Vérifier le mot de passe
    const passwordMatches = await compare(password, authData.passwordHash);
    
    if (passwordMatches) {
      // Créer un cookie pour la session
      return NextResponse.json({ success: true }, {
        status: 200,
        headers: {
          'Set-Cookie': `admin_auth=true; Path=/; HttpOnly; Max-Age=${60 * 60 * 24}` // 24h
        }
      });
    }
    
    return NextResponse.json({ message: 'Mot de passe incorrect' }, { status: 401 });
  } catch (error) {
    console.error('Erreur d\'authentification:', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}