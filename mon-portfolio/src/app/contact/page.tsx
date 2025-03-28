"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  Facebook, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { 
      icon: Mail, 
      href: "mailto:wilfried.konan@epitech.eu", 
      label: "wilfried.konan@epitech.eu" 
    },
    { 
      icon: Phone, 
      href: "tel:+2250170006031", 
      label: "+225 01 70 00 60 31 / +225 07 87 09 36 07" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/wilfried-konan/", 
      label: "LinkedIn Profile" 
    },
    { 
      icon: Github, 
      href: "https://github.com/wilfried-konan", 
      label: "GitHub Profile" 
    }
  ];

  const softwareSkills = [
    { 
      name: "Canva", 
      percent: 100, 
      logo: "/images/skills/canva.jpg" 
    },
    { 
      name: "Photoshop", 
      percent: 75, 
      logo: "/images/skills/ps.jpg" 
    },
    { 
      name: "Illustrator", 
      percent: 85, 
      logo: "/images/skills/ai.jpg" 
    },
    { 
      name: "Figma", 
      percent: 70, 
      logo: "/images/skills/figma.jpg" 
    }
  ];

  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900">
      {/* Image de fond avec opacity */}
            <div className="absolute inset-0 opacity-10 dark:opacity-15">
              <Image 
                src="/images/signature.png" 
                alt="Background de compétences" 
                layout="fill" 
                objectFit="cover" 
                quality={50}
              />
            </div>
      <div className="relative z-1 max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Partie Contactez-moi */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-6 text-blue-300">
            Contactez-moi
          </h1>
          
          <div className="space-y-6 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-blue-300 transition"
              >
                <link.icon className="w-6 h-6" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Votre nom"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Votre email"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Votre message"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form> */}
        </div>

        {/* Partie Infographie */}
        <div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              Compétences Infographiques
            </h2>
            <div className="space-y-6">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Image 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{width: `${skill.percent}%`}}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Localisation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              Ma Localisation
            </h2>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-blue-500" />
              <div>
                <p>Abidjan, Côte d'Ivoire</p>
                <p className="text-sm text-gray-400">Disponible pour missions et freelance</p>
              </div>
            </div>
          </div>

          {/* Section Remerciement et Engagement */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              Mon Engagement
            </h2>
            <div className="flex items-center space-x-6">
              <div className="flex-1">
                <p className="mb-4 italic text-gray-300">
                  "Merci de prendre le temps de me découvrir et de me contacter."
                </p>
                <p className="mb-4">
                  Je m'engage à offrir des solutions web innovantes et sur-mesure. <br />
                  Chaque projet est une opportunité unique de créer quelque chose 
                  de remarquable qui répond précisément aux besoins de mes clients.
                </p>
                <p>
                  Ma passion pour le développement web et le design me pousse 
                  à toujours me surpasser et à apporter une valeur ajoutée 
                  à chaque collaboration.
                </p>
              </div>
              <div className="w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/job.jpeg" 
                    alt="Illustration de l'engagement"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}