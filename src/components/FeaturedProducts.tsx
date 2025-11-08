import { MessageCircle, Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  scrollY: number;
}

const products = [
  {
    id: 1,
    name: 'SEIKO 5 AUTOMATIC',
    image: '/images/products/post1.JPG',
    description:
      'SEIKO 5 AUTOMATIC WATCHES ARE AVAILABLE AT REASONABLE PRICE 100% ORIGINAL',
    contact: 'CONTACT WATSAPP NUMBER FOR MORE DETAILS',
    features: ['Automatic Movement', '100% Original', 'Reasonable Price'],
  },
  {
    id: 2,
    name: 'ALBA BY SEIKO',
    image: '/images/products/post2.JPG',
    description: 'ALBA BY SEIKO WATCH - JAPAN MOVEMENT',
    price: '10,500',
    features: [
      'Japan Movement',
      'Chronograph Working',
      '42 MM Dial Size',
      'All Original',
      'New Condition',
    ],
  },
  {
    id: 3,
    name: 'CASIO ORIGINAL',
    image: '/images/products/post3.JPG',
    description: 'CASIO ORIGINAL WATCH - MADE IN CHINA',
    price: '6,800',
    features: [
      'Vibrating Alarm',
      'LED Light',
      'Digital Display',
      'Water Resist',
      'Stopwatch',
    ],
  },
];

export default function FeaturedProducts({ scrollY }: FeaturedProductsProps) {
  const productsOffset = Math.max(0, scrollY - 1200);
  const floatY = Math.sin(productsOffset * 0.001) * 30;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923018787357', '_blank');
  };

  return (
    <section
      id="products"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black" />

      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Sparkles
              size={Math.random() * 20 + 10}
              className="text-amber-400"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="text-center mb-20"
          style={{
            transform: `translateY(${floatY * 0.3}px)`,
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked selection of premium timepieces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const cardFloat = Math.sin((productsOffset + index * 500) * 0.002) * 20;
            const rotateY = Math.sin((productsOffset + index * 300) * 0.001) * 5;

            return (
              <div
                key={product.id}
                className="group relative"
                style={{
                  transform: `translateY(${cardFloat}px) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-black font-bold text-sm">
                        NEW
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-amber-300 group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {product.price && (
                      <div className="pt-4 border-t border-amber-500/20">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-gray-400">Price:</span>
                          <span className="text-3xl font-bold text-amber-400">
                            Rs {product.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          With delivery included
                        </p>
                      </div>
                    )}

                    {!product.price && (
                      <p className="text-amber-300 text-sm italic pt-4 border-t border-amber-500/20">
                        {product.contact}
                      </p>
                    )}

                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full mt-6 group/btn relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <MessageCircle size={20} />
                        Order on WhatsApp
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>

                <div
                  className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    transform: 'translateZ(-50px)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
