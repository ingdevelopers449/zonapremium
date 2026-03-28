import { Service } from './types';
import primeVideoIcon from './assets/primevideo.svg';
import hboMaxIcon from './assets/hbomax.svg';
import paramountIcon from './assets/paramount.svg';
import crunchyrollIcon from './assets/Crunchyroll_Logo.svg';
import vixIcon from './assets/ViX_Logo.svg';
import plexIcon from './assets/Plex_logo_2022.svg';
import canvaIcon from './assets/canva-icon.svg';

export const SERVICES: Service[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'streaming',
    description: 'Pantallas originales con perfiles privados. Calidad 4K Ultra HD.',
    warranty: 'Garantía total por el tiempo contratado. Soporte inmediato vía WhatsApp.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png',
    options: [
      { label: 'Netflix x27 Días', price: 13000, days: 27 },
      { label: 'Netflix x33 Días', price: 16000, days: 33 }
    ]
  },
  {
    id: 'prime-video',
    name: 'Prime Video',
    category: 'streaming',
    description: 'Acceso a todo el catálogo de Amazon Prime Video.',
    warranty: 'Garantía de 30 días. Activación inmediata.',
    icon: primeVideoIcon,
    options: [{ label: 'Prime Video', price: 8000, days: 30 }]
  },
  {
    id: 'disney',
    name: 'Disney+',
    category: 'streaming',
    description: 'Lo mejor de Disney, Pixar, Marvel, Star Wars y National Geographic.',
    warranty: 'Garantía de 30 días. Soporte 24/7.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    options: [{ label: 'Disney+', price: 8000, days: 30 }]
  },
  {
    id: 'disney-espn',
    name: 'Disney+ & ESPN',
    category: 'streaming',
    description: 'Combo completo con deportes en vivo y entretenimiento.',
    warranty: 'Garantía de 30 días. Activación personalizada.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    options: [{ label: 'Disney+ & ESPN', price: 12000, days: 30 }]
  },
  {
    id: 'hbo-max',
    name: 'HBO MAX',
    category: 'streaming',
    description: 'Series exclusivas y películas taquilleras.',
    warranty: 'Garantía de 30 días.',
    icon: hboMaxIcon,
    options: [{ label: 'HBO MAX', price: 8000, days: 30 }]
  },
  {
    id: 'paramount',
    name: 'Paramount+',
    category: 'streaming',
    description: 'Montañas de entretenimiento.',
    warranty: 'Garantía de 30 días.',
    icon: paramountIcon,
    options: [{ label: 'Paramount+', price: 8000, days: 30 }]
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    category: 'streaming',
    description: 'El mejor anime del mundo.',
    warranty: 'Garantía de 30 días.',
    icon: crunchyrollIcon,
    options: [{ label: 'Crunchyroll', price: 8000, days: 30 }]
  },
  {
    id: 'vix',
    name: 'VIX+',
    category: 'streaming',
    description: 'Contenido premium en español.',
    warranty: 'Garantía de 30 días.',
    icon: vixIcon,
    options: [{ label: 'VIX+', price: 8000, days: 30 }]
  },
  {
    id: 'plex',
    name: 'Plex',
    category: 'streaming',
    description: 'Tu centro de medios personal.',
    warranty: 'Garantía de 30 días.',
    icon: plexIcon,
    options: [{ label: 'Plex', price: 8000, days: 30 }]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    category: 'tools',
    description: 'Inteligencia artificial avanzada con GPT-4.',
    warranty: 'Garantía de 30 días. Acceso compartido o personal.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    options: [{ label: 'ChatGPT Plus', price: 25000, days: 30 }]
  },
  {
    id: 'gemini',
    name: 'Gemini Advanced',
    category: 'tools',
    description: 'La IA más capaz de Google.',
    warranty: 'Garantía de 30 días.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
    options: [{ label: 'Gemini Advanced', price: 20000, days: 30 }]
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'tools',
    description: 'Diseño profesional para todos.',
    warranty: 'Garantía de 30 días.',
    icon: canvaIcon,
    options: [{ label: 'Canva Pro', price: 10000, days: 30 }]
  }
];

export const NEQUI_NUMBER = "314 213 4128";
export const WHATSAPP_NUMBER = "573142134128";
