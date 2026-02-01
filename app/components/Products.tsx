import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Chauffe-eau thermodynamiques',
    description: 'Optez pour un chauffe-eau thermodynamique et profitez d\'une eau chaude économique et écologique. Cette technologie innovante utilise l\'énergie de l\'air ambiant pour chauffer votre eau, réduisant jusqu\'à 70% votre consommation électrique par rapport à un chauffe-eau traditionnel.',
    features: [
      'Économie d\'énergie jusqu\'à 70%',
      'Solution écologique et durable',
      'Confort optimal toute l\'année',
      'Éligible aux aides financières',
    ],
    image: '/images/Climexia_chauffe-eau-thermodynamique_03-1.webp',
    link: '/contact',
    gradient: 'from-cyan-400 to-teal-500',
    bgColor: 'from-cyan-50 to-teal-50',
    decorColor: 'from-cyan-200 to-teal-300',
    iconColor: 'from-cyan-400 to-teal-500',
  },
  {
    title: 'Panneaux photovoltaïques',
    description: 'Produisez votre propre électricité grâce à l\'énergie solaire abondante de la Martinique. Nos installations photovoltaïques vous permettent de réduire significativement vos factures d\'électricité et même de revendre le surplus à EDF.',
    features: [
      'Réduction de vos factures d\'électricité',
      'Revente du surplus d\'énergie',
      'Investissement rentable',
      'Impact environnemental positif',
    ],
    image: '/images/produits/photovoltaique/Climexia_01_1.webp',
    link: '/prestations/photovoltaique',
    gradient: 'from-orange-400 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
    decorColor: 'from-orange-200 to-amber-300',
    iconColor: 'from-orange-400 to-amber-500',
  },
];

const Products = () => {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-linear-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-40 -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-linear-to-br from-orange-100 to-amber-100 rounded-full blur-3xl opacity-40 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-teal-500 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-teal-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Énergies renouvelables
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
            Nos solutions{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-500">
              durables
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez nos solutions énergétiques pour un avenir plus vert et des économies substantielles sur vos factures.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-linear-to-t ${product.gradient} opacity-10`}></div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-full h-full bg-linear-to-br ${product.decorColor} rounded-3xl -z-10`}></div>
                
                {/* Floating badge */}
                <div className={`absolute -top-4 ${index % 2 === 1 ? '-right-4' : '-left-4'} bg-white rounded-2xl shadow-xl p-4 z-20`}>
                  <div className={`w-12 h-12 bg-linear-to-br ${product.iconColor} rounded-xl flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`inline-block px-4 py-2 rounded-full bg-linear-to-r ${product.bgColor} mb-6`}>
                  <span className={`text-sm font-semibold bg-linear-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    Solution écologique
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
                  {product.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4 group">
                      <div className={`w-8 h-8 bg-linear-to-br ${product.iconColor} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={product.link} 
                  className={`inline-flex items-center gap-3 bg-linear-to-r ${product.gradient} text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1`}
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
