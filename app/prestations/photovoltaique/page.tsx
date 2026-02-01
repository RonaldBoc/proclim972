import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Panneaux Photovoltaïques',
  description: 'Installation de panneaux photovoltaïques en Martinique. Produisez votre propre électricité et réduisez vos factures avec ProClim972.',
};

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Économies substantielles',
    description: 'Réduisez vos factures d\'électricité jusqu\'à 70% grâce à l\'énergie solaire gratuite et inépuisable de la Martinique.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Revenus complémentaires',
    description: 'Revendez votre surplus d\'électricité à EDF et générez des revenus passifs pendant 20 ans.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Impact écologique positif',
    description: 'Contribuez à la transition énergétique et réduisez votre empreinte carbone avec une énergie 100% verte.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Valorisation immobilière',
    description: 'Augmentez la valeur de votre bien immobilier grâce à une installation photovoltaïque de qualité.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Étude de faisabilité',
    description: 'Nous analysons votre toiture, votre consommation et votre environnement pour déterminer la solution optimale.',
  },
  {
    number: '02',
    title: 'Proposition personnalisée',
    description: 'Vous recevez un devis détaillé avec simulation de production et retour sur investissement.',
  },
  {
    number: '03',
    title: 'Installation professionnelle',
    description: 'Nos techniciens certifiés installent vos panneaux dans le respect des normes et de votre habitat.',
  },
  {
    number: '04',
    title: 'Mise en service',
    description: 'Raccordement au réseau, configuration du système et formation à l\'utilisation de votre installation.',
  },
];

export default function PhotovoltaiquePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-linear-to-br from-accent-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Énergie solaire
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Panneaux photovoltaïques pour un avenir durable
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Profitez du soleil martiniquais pour produire votre propre électricité. Réduisez vos factures et participez à la transition énergétique avec nos installations photovoltaïques de qualité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
                  Demander une étude gratuite
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
                src="/images/produits/photovoltaique/Climexia_01_1.webp"
                alt="Installation photovoltaïque"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Les avantages du photovoltaïque
            </h2>
            <p className="text-lg text-neutral-600">
              Investir dans le solaire, c&apos;est faire le choix d&apos;une énergie propre, économique et rentable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent-600 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-neutral-600">
              De l&apos;étude à la mise en service, nous vous accompagnons à chaque étape de votre projet solaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-8">
                  <div className="text-5xl font-bold text-primary-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Martinique advantage */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/vitaly-gariev-9lipzfFG3G4-unsplash.jpg"
                alt="Soleil tropical en Martinique"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent-200 rounded-2xl -z-10"></div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Climat idéal
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                La Martinique, paradis du solaire
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Avec un ensoleillement exceptionnel de plus de 2800 heures par an, la Martinique offre des conditions idéales pour la production d&apos;énergie solaire. Votre installation produira à plein régime toute l&apos;année.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-neutral-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600">2800h</div>
                  <div className="text-sm text-neutral-600">d&apos;ensoleillement/an</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600">70%</div>
                  <div className="text-sm text-neutral-600">d&apos;économies possibles</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600">20 ans</div>
                  <div className="text-sm text-neutral-600">de garantie production</div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600">6-8 ans</div>
                  <div className="text-sm text-neutral-600">retour sur investissement</div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary">
                Calculer mes économies
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financing options */}
      <section className="section bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Des solutions de financement adaptées
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Grâce à notre partenariat avec Domofinance, bénéficiez de solutions de financement avantageuses pour concrétiser votre projet solaire sans impacter votre budget.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Crédit à taux avantageux</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Mensualités adaptées à vos économies d&apos;énergie</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Accompagnement dans vos démarches administratives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Éligibilité aux aides et subventions</span>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/partenaires/logodomofinance.png"
                  alt="Logo Domofinance"
                  width={120}
                  height={50}
                  className="h-10 w-auto"
                />
                <span className="text-sm text-neutral-500">Partenaire financement</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Simulation rapide</h3>
              <p className="text-neutral-600 mb-6">
                Obtenez une estimation de vos économies et du coût de votre installation en quelques clics.
              </p>
              <Link href="/contact" className="btn btn-primary w-full">
                Demander une simulation gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section bg-linear-to-r from-accent-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passez à l&apos;énergie solaire dès maintenant
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Rejoignez les centaines de foyers martiniquais qui produisent leur propre électricité. Demandez votre étude gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              Étude gratuite
            </Link>
            <a href="tel:0596452367" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              0596 45 23 67
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
