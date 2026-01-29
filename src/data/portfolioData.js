// Import cover images
// Note: Ensure these files exist in src/assets/... before importing!
import PortraitCover from '../assets/portret/cover/cover_portret.jpg';
import MotionCover from '../assets/motion/cover/motion_cover.jpg';
import ArchCover from '../assets/Architectuur/cover/architecture_cover.jpg';
import ProductCover from '../assets/product/cover/product_cover.jpg';
import BestCover from '../assets/Mooiste/cover/mooiste_cover.jpg';

// Architecture Item 1 Images
import Arch1Image from '../assets/Architectuur/one/gebouw_edit.png';
import Arch1Original from '../assets/Architectuur/one/gebouw.JPG';

// Product Item 1 Images
import Product1Image from '../assets/product/one/product_after.png';
import Product1Original from '../assets/product/one/product_before.png';

// Product Item 2 Images
import Product2Image from '../assets/product/two/product_after.jpg';
import Product2Original from '../assets/product/two/product_before.jpg';

// Portrait Item 1 Images
import Portrait1Image from '../assets/portret/cover/one/portret_after.jpg';
import Portrait1Original from '../assets/portret/cover/one/portret_before.jpg';

// Portrait Item 2 Images
import Portrait2Image from '../assets/portret/cover/two/rouzbehsayadifar_after.jpg';
import Portrait2Original from '../assets/portret/cover/two/rouzbehsayadifar_before.jpg';

// Portrait Item 3 Images
import Portrait3Image from '../assets/portret/cover/three/harm_fennis_after.jpg';
import Portrait3Original from '../assets/portret/cover/three/harm_fennis_after.jpg'; // Using same image as fallback for before

// Personal Items
import Pers1Image from '../assets/personal/cover/one/dier_after.jpg';
import Pers1Original from '../assets/personal/cover/one/dier_before.jpg';

import Pers2Image from '../assets/personal/cover/two/diertje_after.jpg';
import Pers2Original from '../assets/personal/cover/two/diertje_before.jpg';

import Pers3Image from '../assets/personal/cover/three/diertje_after.jpg';
import Pers3Original from '../assets/personal/cover/three/diertje_before.jpg';

import Pers4Image from '../assets/personal/cover/four/wolf_after.jpg';
import Pers4Original from '../assets/personal/cover/four/wolf_before.jpg';

import Pers6Image from '../assets/personal/cover/boom_after.jpg';


// Motion Item 1 Images
import Motion1Image from '../assets/motion/cover/one/motion_after.png';
import Motion1Original from '../assets/motion/cover/one/motion_before.jpg';

// Motion Item 2 Images
import Motion2Image from '../assets/motion/cover/one/moving_object_after.png';
import Motion2Original from '../assets/motion/cover/one/moving_object_before.jpg';

// Best Of Items
import Best1Image from '../assets/Mooiste/one/mooie_after.JPG';
import Best1Original from '../assets/Mooiste/one/mooie_before.JPG';

export const portfolioCategories = [
    {
        id: 'motion',
        title: 'Bewegingsfoto’s',
        description: 'Dynamiek en snelheid vastgelegd in een enkel moment.',
        image: MotionCover
    },
    {
        id: 'portrait',
        title: 'Portretten Studio',
        description: 'Karakter en emotie in gecontroleerd licht.',
        image: PortraitCover
    },
    {
        id: 'architecture',
        title: 'Architectuur / Landschap',
        description: 'Lijnen, vormen en de omgeving.',
        image: ArchCover
    },
    {
        id: 'product',
        title: 'Productfotografie',
        description: 'Commerciële perfectie en detail.',
        image: ProductCover
    },
    {
        id: 'best',
        title: 'Mooiste Foto’s',
        description: 'Mijn persoonlijke favorieten.',
        image: BestCover
    },
    {
        id: 'personal',
        title: "Mijn Foto's",
        description: 'Vrij werk en persoonlijke projecten.',
        image: Pers4Image // Using the tree bark/structure image as cover
    }
];

export const categories = [
    { id: 'all', label: 'Alles' },
    { id: 'portrait', label: 'Portret' },
    { id: 'architecture', label: 'Architectuur' },
    { id: 'product', label: 'Product' },
    { id: 'motion', label: 'Beweging' },
    { id: 'personal', label: "Mijn Foto's" } // Added new category
];

export const portfolioItems = [
    // --- Motion ---
    {
        id: 'm1',
        categoryId: 'motion',
        title: 'De buurt vanuit de auto',
        image: Motion1Image,
        imageOriginal: Motion1Original,
        description: 'In een snele oogomslach een foto van uit de auto.',
        whyInteresting: 'De snelheid en dynamiek van de foto.',
        critique: 'De bewegingsonscherpte van de voorbijrazende auto contrasteert sterk met de statische architectuur. De grauwe lucht draagt bij aan de stedelijke sfeer.',
        specs: { shutter: '1/125s', aperture: 'f/7.1', iso: '100', camera: 'NIKON D5300' },
        editing: { process: 'Contrast verhoogd, schaduwen opgehelderd, kleurtemperatuur warmer.', comparison: ['Crop', 'Color Grade'] },
        analysis: {
            composition: 'Gekozen voor een vierkante kader.',
            frame: 'Het standpunt is genomen vanuit een vrij hoge plek, waardoor je op het onderwerp neerkijkt.',
            format: 'Vierkant',
            perspective: 'IS een soort vogel perspectief. Je kijkt van boven af naar beneden op de bewegende auto.',
            lighting: { direction: 'Diffuus', intensity: 'Bewolkt', source: 'Natuurlijk' },
            depthOfField: 'Doordat de achtergrond onscherp – in motion is en het object scherp, lijkt het alsof',
        }
    },
    {
        id: 'm2',
        categoryId: 'motion',
        title: 'Moving Object',
        image: Motion2Image,
        imageOriginal: Motion2Original,
        description: 'Een object in beweging vastgelegd.',
        whyInteresting: 'De bewegingsonscherpte suggereert snelheid.',
        critique: 'Goede scheiding tussen onderwerp en achtergrond.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: {
            composition: 'Soort rechthoekige kader',
            frame: 'Standpunt: total shot. Alles is op de foto waardoor je meer inhoudelijke informatie krijgt van de foto.',
            format: 'Landschap',
            perspective: 'Perspectief = als je staand naast de weg staat en je besluit te kijken naar de weg.',
            lighting: { direction: 'Natuurlijk', intensity: 'Neutraal', source: 'Daglicht' },
            depthOfField: 'Ik vind dit een mooie foto. Omdat de achtergrond semi-scherp is en het object onscherp kan je uit lezen dat het in beweging is.',
        },
        editing: { process: 'Standaard nabewerking.', comparison: ['Retouch'] }
    },

    // --- Portrait ---
    {
        id: 'p1',
        categoryId: 'portrait',
        title: 'Intense Blik',
        image: Portrait1Image,
        imageOriginal: Portrait1Original,
        description: 'Zwart-wit portret met een krachtig handgebaar.',
        whyInteresting: 'De blik is direct en zelfverzekerd.',
        critique: 'De omzetting naar zwart-wit versterkt het drama. De schaduwen zijn gewaagd.',
        specs: { shutter: '1/160s', aperture: 'f/8', iso: '100', camera: 'NIKON D5600' },
        analysis: {
            composition: 'Centraal, hand vormt een kader.',
            frame: 'Borstbeeld (Bust shot)',
            format: 'Rechthoek',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Hard licht', intensity: 'Hoog contrast', source: 'Studio' },
            depthOfField: 'Scherp',
        },
        editing: { process: 'Zwart-Wit contrast en schaduwen opgehelderd.', comparison: ['Retouch', 'Color Balance'] }
    },
    {
        id: 'p3',
        categoryId: 'portrait',
        title: 'Harm Fennis',
        image: Portrait3Image,
        imageOriginal: Portrait3Original,
        description: 'Een portret foto.',
        whyInteresting: 'Ik vind het een mooie foto.',
        critique: 'Ik vind het een nette en scherpe portret foto. Door de grijs witte effect lijkt het op een oldtimer. Ben er tevreden mee. Kon wat meer spelen met schaduwen poses etc.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: {
            composition: 'Verticaal',
            frame: 'Medium shot',
            format: 'Portret',
            perspective: 'Regular – staande perspectief',
            lighting: { direction: 'Zacht', intensity: 'Normaal', source: 'Studio' },
            depthOfField: 'Standpunten: staand recht tegenover de persoon',
        },
        editing: { process: 'Zwart-wit conversie.', comparison: ['Retouch', 'Contrast'] }
    },

    // --- Personal ---
    {
        id: 'pers1',
        categoryId: 'personal',
        title: 'Dier',
        image: Pers1Image,
        imageOriginal: Pers1Original,
        description: 'Een prachtig moment vastgelegd.',
        whyInteresting: 'De focus en compositie maken dit een sterk beeld.',
        critique: 'Goede scherpte en kleurbalans.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Centraal', frame: 'Medium shot', format: 'Landschap', perspective: 'Ooghoogte', lighting: { direction: 'Natuurlijk', intensity: 'Zacht', source: 'Daglicht' }, depthOfField: 'Ondiep' },
        editing: { process: 'Basis nabewerking.', comparison: ['Retouch'] }
    },
    {
        id: 'pers2',
        categoryId: 'personal',
        title: 'Diertje',
        image: Pers2Image,
        imageOriginal: Pers2Original,
        description: 'Detailopname in de natuur.',
        whyInteresting: 'De textuur en details zijn goed zichtbaar.',
        critique: 'Mooie scheiding van de achtergrond.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Derdenregel', frame: 'Close-up', format: 'Landschap', perspective: 'Ooghoogte', lighting: { direction: 'Zacht', intensity: 'Normaal', source: 'Natuurlijk' }, depthOfField: 'Ondiep' },
        editing: { process: 'Kleurcorrectie toegepast.', comparison: ['Retouch'] }
    },
    {
        id: 'pers3',
        categoryId: 'personal',
        title: 'Diertje in detail',
        image: Pers3Image,
        imageOriginal: Pers3Original,
        description: 'Een intieme blik op de natuur.',
        whyInteresting: 'Het onderwerp springt er echt uit.',
        critique: 'Scherp op de juiste plek.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Centraal', frame: 'Close-up', format: 'Landschap', perspective: 'Ooghoogte', lighting: { direction: 'Natuurlijk', intensity: 'Zacht', source: 'Daglicht' }, depthOfField: 'Ondiep' },
        editing: { process: 'Contrast en scherpte aangepast.', comparison: ['Retouch'] }
    },
    {
        id: 'pers4',
        categoryId: 'personal',
        title: 'Wolf',
        image: Pers4Image,
        imageOriginal: Pers4Original,
        description: 'Een krachtig portret van een wolf.',
        whyInteresting: 'De intense blik en de vachtstructuur.',
        critique: 'Indrukwekkend onderwerp met goede belichting.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Portret', frame: 'Medium shot', format: 'Portret', perspective: 'Ooghoogte', lighting: { direction: 'Zijlicht', intensity: 'Hard', source: 'Zonlicht' }, depthOfField: 'Focus op ogen.' },
        editing: { process: 'Scherpte verhoogd.', comparison: ['Retouch'] }
    },
    {
        id: 'pers6',
        categoryId: 'personal',
        title: 'Veldboom',
        image: Pers6Image,
        imageOriginal: Pers6Image,
        description: 'Eenzaamheid en groei in een open veld.',
        whyInteresting: 'De grillige takken steken sterk af tegen de strakke blauwe lucht.',
        critique: 'De compositie plaatst de boom in een context van ruimte, wat een gevoel van vrijheid geeft.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Diagonaal / Asymmetrisch.', frame: 'Totaal', format: 'Portret', perspective: 'Ooghoogte', lighting: { direction: 'Zonlicht', intensity: 'Helder', source: 'Natuurlijk' }, depthOfField: 'Alles scherp.' },
        editing: { process: 'Blauwe lucht verzadigd en contrast in het riet verhoogd.', comparison: ['Retouch'] }
    },

    // --- Architecture ---
    {
        id: 'a1',
        categoryId: 'architecture',
        title: 'Lichtspel in Beton',
        image: Arch1Image,
        imageOriginal: Arch1Original,
        description: 'Het spel van zonlicht op een betonnen trap in aanbouw.',
        whyInteresting: 'De herhaling van patronen werkt rustgevend.',
        critique: 'De harde schaduwen creëren een abstract patroon.',
        specs: { shutter: '1/500s', aperture: 'f/11', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Diagonale lijnen.',
            frame: 'Totaalshot',
            format: 'Landschap',
            perspective: 'Kikkerperspectief',
            lighting: { direction: 'Zonlicht', intensity: 'Hard', source: 'Zon' },
            depthOfField: 'Groot (alles scherp)',
        },
        editing: { process: 'Keystone correctie, blauwverzadiging verhoogd en contrast verhoogd.', comparison: ['Perspective', 'Saturation'] }
    },

    // --- Product ---
    {
        id: 'pr1',
        categoryId: 'product',
        title: 'Klassiek Beeldje',
        image: Product1Image,
        imageOriginal: Product1Original,
        description: 'Detailopname van een klassiek beeldje.',
        whyInteresting: 'De zachte verlichting benadrukt de vorm.',
        critique: 'De donkere achtergrond laat het onderwerp loskomen.',
        specs: { shutter: '1/125s', aperture: 'f/16', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Centraal',
            frame: 'Ten voeten uit',
            format: 'Rechthoek',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Zacht', intensity: 'Warm', source: 'Studio' },
            depthOfField: 'Groot (alles scherp)',
        },
        editing: { process: 'Kleur iets verhoogd en contrast verhoogd ook heb ik de foto gecroped.', comparison: ['Color Balance', 'croping'] }
    },
    {
        id: 'pr2',
        categoryId: 'product',
        title: 'Item Case',
        image: Product2Image,
        imageOriginal: Product2Original,
        description: 'Een productfoto.',
        whyInteresting: 'Mooie scherpe foto op het item houder.',
        critique: 'mocht wat meer gespeeld worden met belichting - om het nog aantrekkelijker te maken.',
        specs: { shutter: '1/100s', aperture: 'f/18', iso: '200', camera: 'NIKON D5600' },
        analysis: {
            composition: 'Cirkel',
            frame: 'Total-shot',
            format: 'Landschap',
            perspective: 'Vogel perspectief',
            lighting: { direction: 'Rim light', intensity: 'Accent', source: 'Studio' },
            depthOfField: 'Standpunt: rechtvoor het product. Toelichting: Mooie scherpe foto op het item houder - wat goed weergeeft wat je erin kan opslaan en door de belichting is alles goed herkenbaar.',
        },
        editing: { process: 'Lokale contrasten, kleurkalibratie.', comparison: ['Contrast', 'Color'] }
    },

    // --- Best Of ---
    {
        id: 'b1',
        categoryId: 'best',
        title: 'Vogeltje',
        image: Best1Image,
        imageOriginal: Best1Original,
        description: 'Een vogel zoekend naar eten.',
        whyInteresting: 'De kleurvariatie en focus.',
        critique: 'Enorm mooie foto waar je een vogeltje ziet zoeken naar eten op een natte achtergrond. de kleur variatie en de vervaagde zijkant zorgt dat de aandacht echt valt op de vogel.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: {
            composition: 'Horizontaal',
            frame: 'Total-shot',
            format: 'Landschap',
            perspective: 'Vogelperspectief',
            lighting: { direction: 'Natuurlijk', intensity: 'Neutraal', source: 'Daglicht' },
            depthOfField: 'Standpunt: vlak naast de vogel',
        },
        editing: { process: 'Standaard nabewerking.', comparison: ['Retouch'] }
    },
];
