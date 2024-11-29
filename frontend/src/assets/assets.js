import PP from './PP.png'
import heroImg from "./hero.png";
import logo from './logo.png'
import moraHero from "./moraHero.png";

import artedigital from "./artedigital.png";
import djLogo from "./dj.png";
import fotografia from "./fotografia.png";
import grafitiLogo from "./grafiti.png";
import indie from "./indie.png";
import tatuaje from "./tatuaje.png";

import githubSvg from "./svgs/github.svg";
import linkedinSvg from "./svgs/linkedin.svg";
import webpageSvg from "./svgs/webpage.svg";

export const footerLogos= {
  githubSvg,
  linkedinSvg,
  webpageSvg
}

export const assets = {
  logo,
  PP,
  heroImg,
  fotografia,
  moraHero
}

export const artData = [
  {
    art: 'Grafiti',
    image: grafitiLogo
  },
  {
    art: 'Indie',
    image: indie
  },
  {
    art: 'Tatuajes',
    image: tatuaje
  },
  {
    art: 'Fotografia',
    image: fotografia
  },
  {
    art: 'Diseño Grafico',
    image: artedigital
  },
  {
    art: 'Productor',
    image: djLogo
  },
];

//Fotos Personas
import fotografiaMujer from "./artists/fotografiaMujer.jpg";
import grafitiHombres1 from "./artists/grafitiHombres1.jpg";
import grafitiMujer1 from "./artists/grafitiMujer1.jpg";
import indieBanda1 from "./artists/indieBanda1.jpg";
import indieHombre from "./artists/indieHombre.jpg";
import indieHombre2 from "./artists/indieHombre2.jpg";
import productorAlien from "./artists/productorAlien.jpg";
import productorAlien2 from "./artists/productorAlien2.jpg";
import tatuajeMujer from "./artists/tatuajeMujer.jpg";



export const artists = [
  {
    _id: 'artist1',
    name: 'Carlos Soto',
    image: indieHombre,
    speciality: 'Indie',
    degree: 'Industrial Engineer',
    experience: '3 Years',
    about: 'Llevo desde la secundaria creando arte.',
    fees: 50,
    address: 'Tampico'
  },
  {
    _id: 'artist2',
    name: 'Emiliana Calles',
    image: grafitiMujer1,
    speciality: 'Grafiti',
    degree: 'Art Specialist',
    experience: '5 Years',
    about: 'Especialista en murales y graffiti inspirados en la cultura urbana.',
    fees: 80,
    address: {
      line1: 'Centro Histórico',
      line2: 'Ciudad de México'
    }
  },
  {
    _id: 'artist3',
    name: 'Luis Martínez',
    image: productorAlien,
    speciality: 'Productor',
    degree: 'Sound Engineer',
    experience: '7 Years',
    about: 'Productor musical especializado en trap y hip-hop.',
    fees: 100,
    address: {
      line1: 'Condesa',
      line2: 'Ciudad de México'
    }
  },
  {
    _id: 'artist4',
    name: 'Sofía Reyes',
    image: indieHombre2,
    speciality: 'Indie',
    degree: 'Composer',
    experience: '4 Years',
    about: 'Vocalista principal de una banda punk con giras nacionales.',
    fees: 70,
    address: {
      line1: 'Santa María la Ribera',
      line2: 'Ciudad de México'
    }
  },
  {
    _id: 'artist5',
    name: 'Ana Cecilia Hernandez Calles',
    image: tatuajeMujer,
    speciality: 'Tatuajes',
    degree: 'Visual Artist',
    experience: '6 Years',
    about: 'Tatuador profesional con estudios en arte visual.',
    fees: 90,
    address: {
      line1: 'Chapultepec',
      line2: 'Guadalajara'
    }
  },
  {
    _id: 'artist6',
    name: 'Ana Calles',
    image: grafitiMujer1,
    speciality: 'Diseño Grafico',
    degree: 'Digital Illustrator',
    experience: '3 Years',
    about: 'Ilustradora digital enfocada en diseños minimalistas y surrealistas.',
    fees: 60,
    address: {
      line1: 'Roma Norte',
      line2: 'Ciudad de México'
    }
  },  
  {
    _id: 'artist7',
    name: 'Zzzander Zzzooy',
    image: productorAlien2,
    speciality: 'Productor',
    degree: 'Digital Illustrator',
    experience: '3 Years',
    about: 'Ilustradora digital enfocada en diseños minimalistas y surrealistas.',
    fees: 60,
    address: {
      line1: 'Roma Norte',
      line2: 'Ciudad de México'
    }
  },

  {
    _id: 'artist8',
    name: 'Liliana Calles',
    image: fotografiaMujer,
    speciality: 'Fotografia',
    degree: 'Photographer',
    experience: '5 Years',
    about: 'Fotógrafa enfocada en capturar la esencia de la vida en las calles.',
    fees: 75,
    address: {
      line1: 'Colonia Americana',
      line2: 'Guadalajara'
    }
  },
  {
    _id: 'artist9',
    name: 'Subway Brothers',
    image: grafitiHombres1,
    speciality: 'Grafiti',
    degree: 'Muralist',
    experience: '8 Years',
    about: 'Creador de murales colaborativos en espacios urbanos.',
    fees: 120,
    address: {
      line1: 'Coyoacán',
      line2: 'Ciudad de México'
    }
  },
  {
    _id: 'artist10',
    name: 'Ratones',
    image: indieBanda1,
    speciality: 'Indie',
    degree: 'Muralist',
    experience: '8 Years',
    about: 'Creador de murales colaborativos en espacios urbanos.',
    fees: 120,
    address: {
      line1: 'Coyoacán',
      line2: 'Ciudad de México'
    }
  }
];
