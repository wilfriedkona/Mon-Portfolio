"use client"

import { useState, useEffect } from 'react';
import { FaTrashAlt, FaExclamationTriangle, FaEnvelope, FaPhone, FaUser, FaClock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface Contact {
  id: string;
  name: string;
  number: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const router = useRouter();

  
  useEffect(() => {
    
    async function fetchMessages() {
      try {
        const response = await fetch('/api/admin/messages');
        
        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = '/';
            return;
          }
          throw new Error('Erreur lors de la récupération des messages');
        }
        
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMessages();
  }, []);
  
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du message');
      }
      
      setMessages(messages.filter(message => message.id !== id));
      setDeleteId(null);
    } catch (err) {
      setError(err.message);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md" role="alert">
          <p className="font-bold">Erreur</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Messages de contact
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Gestion des messages reçus via le formulaire de contact
          </p>
        </div>
        
        {messages.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-blue-600 dark:text-blue-400 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Aucun message pour le moment
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Les messages envoyés via le formulaire de contact apparaîtront ici.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map(message => (
              <div 
                key={message.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white text-lg flex items-center">
                      <FaUser className="mr-2" /> {message.name}
                    </h3>
                    <span className="text-xs text-blue-100 flex items-center">
                      <FaClock className="mr-1" /> {formatDate(message.timestamp)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Email</p>
                        <p className="text-gray-800 dark:text-gray-200 break-all">{message.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Téléphone</p>
                        <p className="text-gray-800 dark:text-gray-200">{message.number}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Message</p>
                      <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                        {message.message}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    {deleteId === message.id ? (
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg flex items-center animate-pulse">
                        <FaExclamationTriangle className="text-red-500 mr-2" />
                        <span className="text-sm text-red-600 dark:text-red-400 mr-3">Confirmer la suppression?</span>
                        <button
                          onClick={() => handleDelete(message.id)}
                          className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2 transition-colors"
                        >
                          Oui
                        </button>
                        <button
                          onClick={() => setDeleteId(null)}
                          className="text-xs bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition-colors"
                        >
                          Non
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteId(message.id)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/10"
                        aria-label="Supprimer"
                        title="Supprimer"
                      >
                        <FaTrashAlt />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}