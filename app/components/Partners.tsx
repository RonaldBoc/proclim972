import Image from 'next/image';

const partners = [
  {
    name: 'SynerCiel',
    logo: '/images/partenaires/logo_synerciel.svg',
    benefits: [
      'Expertise certifiée',
      'Solutions personnalisées',
    ],
    description: 'Réseau de professionnels qualifiés pour des installations de qualité.',
    gradient: 'from-sky-400 to-cyan-500',
    bgGradient: 'from-sky-50 to-cyan-50',
  },
  {
    name: 'Domofinance',
    logo: '/images/partenaires/logodomofinance.png',
    benefits: [
      'Accès facilité au financement',
      'Investissement intelligent et rentable',
    ],
    description: 'Solutions de financement adaptées à vos projets d\'amélioration énergétique.',
    gradient: 'from-teal-400 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
  },
];

const Partners = () => {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-linear-to-r from-cyan-100 via-sky-100 to-teal-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-sky-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Partenariats
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            Partenaires de{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-cyan-500">
              confiance
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous collaborons avec les meilleurs acteurs du secteur pour vous offrir des solutions complètes et des avantages exclusifs.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`bg-linear-to-br ${partner.bgGradient} rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={80}
                    height={60}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
                  <span className={`inline-block text-xs font-semibold text-white bg-linear-to-r ${partner.gradient} px-3 py-1 rounded-full mt-1`}>
                    Partenaire certifié
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>
              
              <ul className="space-y-3">
                {partner.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-3 group">
                    <div className={`w-7 h-7 bg-linear-to-br ${partner.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-linear-to-r from-sky-500 via-cyan-500 to-teal-500 rounded-3xl p-8 sm:p-10 shadow-xl">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white mb-2">Certification et qualité garanties</h4>
              <p className="text-white/90">Nos partenariats vous assurent des prestations de haute qualité et des financements adaptés.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
