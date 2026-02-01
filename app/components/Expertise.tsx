import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-100 to-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-teal-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-cyan-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Notre expertise
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            L&apos;expertise{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-teal-500">
              antillaise
            </span>{' '}
            à votre service
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Fondée il y a plus de 45 ans, notre entreprise s&apos;est imposée comme une référence dans le domaine du génie climatique aux Antilles-Guyane. Notre expertise couvre l&apos;ensemble des solutions de climatisation et d&apos;énergies renouvelables, incluant les panneaux photovoltaïques et les chauffe-eau thermodynamiques.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-16">
            Présents en Martinique, en Guadeloupe et en Guyane, nous accompagnons nos clients avec passion et dévouement. Notre équipe de professionnels qualifiés met tout son savoir-faire au service de votre confort, en proposant des solutions sur-mesure adaptées au climat tropical de notre région.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group bg-linear-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 hover:-translate-y-2 border border-cyan-100">
            <div className="w-20 h-20 bg-linear-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">3 Territoires</h3>
            <p className="text-gray-600">Martinique, Guadeloupe et Guyane française</p>
          </div>

          <div className="group bg-linear-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-teal-100 transition-all duration-300 hover:-translate-y-2 border border-teal-100">
            <div className="w-20 h-20 bg-linear-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">45+ Années</h3>
            <p className="text-gray-600">D&apos;expérience dans le génie climatique</p>
          </div>

          <div className="group bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 hover:-translate-y-2 border border-orange-100">
            <div className="w-20 h-20 bg-linear-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Équipe dédiée</h3>
            <p className="text-gray-600">Professionnels qualifiés et passionnés</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
