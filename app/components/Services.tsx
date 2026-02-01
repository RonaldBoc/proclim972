import Image from 'next/image';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Conseil',
    description: 'Un expert à votre écoute, attentif et soucieux de vos besoins et de votre intérêt.',
    gradient: 'from-sky-400 to-cyan-500',
    bgGradient: 'from-sky-50 to-cyan-50',
    shadowColor: 'shadow-sky-500/30',
    borderColor: 'border-sky-100',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Installation',
    description: 'Un service clé en main jusqu\'à l\'installation du matériel à votre domicile ou dans vos locaux professionnels.',
    gradient: 'from-teal-400 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
    shadowColor: 'shadow-teal-500/30',
    borderColor: 'border-teal-100',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Vente',
    description: 'Sélection des produits les plus compétitifs et fiables du marché.',
    gradient: 'from-orange-400 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    shadowColor: 'shadow-orange-500/30',
    borderColor: 'border-orange-100',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'S.A.V',
    description: 'Service après-vente performant, disponible et dévoué pour assurer votre satisfaction.',
    gradient: 'from-purple-400 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50',
    shadowColor: 'shadow-purple-500/30',
    borderColor: 'border-purple-100',
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-orange-100 to-amber-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-orange-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Services complets
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            Nos services{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              exclusifs
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Chez ProClim972, nous allons au-delà de la simple vente et installation. Nous sommes votre partenaire de confiance, vous accompagnant à chaque étape de votre projet de climatisation ou d&apos;énergie renouvelable.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-linear-to-br ${service.bgGradient} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${service.borderColor}`}
            >
              <div className={`w-20 h-20 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional image section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/services_exclusifs.webp"
            alt="Services ProClim972"
            width={1200}
            height={400}
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-sky-900/90 via-cyan-800/80 to-teal-700/70 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-xl text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Un accompagnement{' '}
                  <span className="text-orange-300">sur-mesure</span>
                </h3>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  De l&apos;étude de votre projet à la maintenance de vos équipements, nous restons à vos côtés pour garantir votre satisfaction.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
                >
                  Contactez-nous
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
