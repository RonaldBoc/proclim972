import Image from 'next/image';
import Link from 'next/link';

const TwoColumnSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-br from-cyan-50 to-teal-100 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-sky-50 to-cyan-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 group">
              <Image
                src="/images/imagesalleclimatisee.webp"
                alt="Installation climatisation professionnelle"
                width={600}
                height={450}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover group-hover:shadow-cyan-500/20 transition-shadow duration-500"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-14 h-14 bg-linear-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Garantie</p>
                  <p className="text-xl font-bold text-gray-800">5 ans</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-linear-to-br from-cyan-200 to-teal-300 rounded-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-orange-200 to-amber-300 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-teal-500 to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-teal-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Qualité & Expertise
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Des conseils experts pour votre{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-500">
                confort optimal
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Bénéficiez de conseils experts et d&apos;une installation parfaite, sélectionnant les meilleurs produits du marché pour répondre à vos besoins spécifiques en matière de climatisation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Notre expertise prend en compte chaque environnement pour optimiser votre confort thermique tout en minimisant la consommation énergétique, vous offrant ainsi la tranquillité d&apos;esprit tout au long de l&apos;année.
            </p>

            {/* Features list */}
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-linear-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">Analyse personnalisée de vos besoins</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-linear-to-br from-cyan-400 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">Produits de qualité supérieure</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">Économies d&apos;énergie optimisées</span>
              </li>
            </ul>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
            >
              Demander un devis gratuit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
