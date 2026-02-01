# ProClim972 - Site Web Corporatif

Site web professionnel pour ProClim972, spécialiste de la climatisation et des énergies renouvelables en Martinique, Guadeloupe et Guyane.

## 🛠 Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## 📁 Structure du Projet

```
app/
├── components/          # Composants réutilisables
│   ├── Header.tsx       # En-tête avec navigation
│   ├── Footer.tsx       # Pied de page
│   ├── Hero.tsx         # Section héro
│   ├── Expertise.tsx    # Section expertise
│   ├── Services.tsx     # Section services
│   ├── Products.tsx     # Section produits
│   ├── Partners.tsx     # Section partenaires
│   ├── ContactForm.tsx  # Formulaire de contact
│   └── ContactSection.tsx
├── contact/             # Page contact
├── prestations/
│   ├── climatisation/   # Page climatisation
│   └── photovoltaique/  # Page photovoltaïque
├── globals.css          # Styles globaux
├── layout.tsx           # Layout principal
└── page.tsx             # Page d'accueil
public/
└── images/              # Assets images
```

## 🚀 Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm run start

# Linting
npm run lint
```

## 🎨 Charte Graphique

- **Couleur primaire**: Bleu (#2563eb)
- **Couleur accent**: Vert (#10b981)
- **Typographie**: Inter (Google Fonts)

## 📱 Pages

- **Accueil** (`/`) - Page principale avec toutes les sections
- **Contact** (`/contact`) - Formulaire de contact et coordonnées
- **Climatisation** (`/prestations/climatisation`) - Services de climatisation
- **Photovoltaïque** (`/prestations/photovoltaique`) - Panneaux solaires

## 📞 Informations Entreprise

- **Nom**: ProClim972
- **Téléphone**: 0596 45 23 67
- **Email**: contact@proclim972.fr
- **Zones**: Martinique, Guadeloupe, Guyane

## 📝 License

Site réalisé par [nerdyweb.fr](https://nerdyweb.fr)
