import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient with tropical colors */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-500 via-cyan-500 to-teal-500"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-20 lg:pt-32 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/30 mt-8 lg:mt-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Plus de 45 ans d&apos;expertise en climatisation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              ProClim972, le spécialiste de la{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-200">
                climatisation
              </span>{' '}
              à la Martinique
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Forts de notre expérience de plus de 45 ans dans le génie climatique, nous mettons tout en œuvre pour satisfaire votre confort au quotidien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Demander un devis
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/prestations/climatisation" 
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-lg font-semibold px-8 py-4 rounded-xl border-2 border-white/40 transition-all duration-300"
              >
                Nos prestations
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-extrabold text-orange-300">45+</div>
                  <div className="text-sm text-white/80">Années d&apos;expérience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-extrabold text-cyan-200">3</div>
                  <div className="text-sm text-white/80">Territoires couverts</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-extrabold text-teal-200">100%</div>
                  <div className="text-sm text-white/80">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-cyan-400 rounded-3xl rotate-6 scale-105"></div>
              <Image
                src="/images/vitaly-gariev-KAtjmpNceHA-unsplash.jpg"
                alt="Climatisation professionnelle en Martinique"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Floating card - Certification */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Certifié</div>
                  <div className="text-sm text-teal-600 font-medium">SynerCiel</div>
                </div>
              </div>
            </div>

            {/* Floating card - Phone */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Appelez-nous</div>
                  <div className="font-bold text-gray-800">0596 45 23 67</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
