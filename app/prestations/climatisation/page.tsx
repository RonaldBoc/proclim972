import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Climatisation',
  description: 'Découvrez nos solutions de climatisation pour particuliers et professionnels en Martinique. Installation, maintenance et SAV par des experts certifiés.',
};

const brands = [
  {
    name: 'Daikin',
    logo: '/images/produits/climatiseurs/daikin/daikinlogo.jpg',
    image: '/images/produits/climatiseurs/daikin/daikinclim.jpg',
    description: 'Leader mondial de la climatisation, Daikin propose des solutions innovantes et économes en énergie.',
  },
  {
    name: 'Mitsubishi Electric',
    logo: '/images/produits/climatiseurs/mitsubishi/mitsubishi logo.jpg',
    image: '/images/produits/climatiseurs/mitsubishi/mitsubishiclim.jpg',
    description: 'Excellence japonaise, Mitsubishi Electric offre des climatiseurs silencieux et performants.',
  },
  {
    name: 'Samsung',
    logo: '/images/produits/climatiseurs/samsung/samsunglogo.jpg',
    image: '/images/produits/climatiseurs/samsung/samsungclim.jpg',
    description: 'Innovation et design au service du confort avec les climatiseurs Samsung WindFree.',
  },
  {
    name: 'Toshiba',
    logo: '/images/produits/climatiseurs/toshiba/toshibalogo.jpg',
    image: '/images/produits/climatiseurs/toshiba/toshibaclim.jpg',
    description: 'Pioneer de la technologie inverter, Toshiba garantit des performances optimales.',
  },
];

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Étude personnalisée',
    description: 'Analyse de vos besoins et dimensionnement optimal.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Installation professionnelle',
    description: 'Pose soignée par des techniciens certifiés.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Maintenance régulière',
    description: 'Contrats d\'entretien pour garantir la longévité.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'SAV réactif',
    description: 'Intervention rapide en cas de panne.',
  },
];

export default function ClimatisationPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-linear-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Solutions climatisation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Climatisation professionnelle pour votre confort
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                Experts en climatisation depuis plus de 45 ans, nous vous proposons les meilleures marques du marché avec une installation soignée et un service après-vente réactif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
                  Demander un devis
                </Link>
                <a href="tel:0596452367" className="btn border-2 border-white text-white hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0596 45 23 67
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/climinterieure.webp"
                alt="Climatisation intérieure"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Nos services climatisation
            </h2>
            <p className="text-lg text-neutral-600">
              Un accompagnement complet de l&apos;étude de votre projet à la maintenance de vos équipements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of AC */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Solutions adaptées à tous vos besoins
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Que vous soyez particulier ou professionnel, nous avons la solution de climatisation adaptée à vos besoins et à votre budget. Notre expertise nous permet de vous conseiller le système le plus efficace pour votre espace.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Climatisation résidentielle</h3>
                    <p className="text-sm text-neutral-600">Split, multi-split et gainable pour votre maison ou appartement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Climatisation professionnelle</h3>
                    <p className="text-sm text-neutral-600">Solutions pour bureaux, commerces et locaux industriels.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Systèmes réversibles</h3>
                    <p className="text-sm text-neutral-600">Chauffage et climatisation en un seul équipement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/climexterieure.webp"
                alt="Unité extérieure de climatisation"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Les meilleures marques du marché
            </h2>
            <p className="text-lg text-neutral-600">
              Nous travaillons exclusivement avec des fabricants reconnus pour leur qualité et leur fiabilité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={`Climatiseur ${brand.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      width={60}
                      height={30}
                      className="h-8 w-auto object-contain"
                    />
                    <h3 className="font-semibold text-neutral-800">{brand.name}</h3>
                  </div>
                  <p className="text-sm text-neutral-600">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à améliorer votre confort ?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d&apos;experts vous accompagne dans votre projet de climatisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              Demander un devis gratuit
            </Link>
            <a href="tel:0596452367" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Appelez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
