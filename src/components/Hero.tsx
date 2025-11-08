import { Watch, ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;
  const opacity = Math.max(1 - scrollY / 500, 0);
  const scale = Math.max(1 - scrollY / 2000, 0.8);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900/20"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/10"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div className="mb-8 animate-fadeInUp">
          <Watch
            size={80}
            className="mx-auto mb-6 text-amber-400 animate-pulse"
            strokeWidth={1.5}
          />
        </div>

        <h1
          className="text-6xl md:text-8xl font-bold mb-6 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            SHAFI WATCHES
          </span>
        </h1>

        <p
          className="text-xl md:text-3xl text-gray-300 mb-8 font-light tracking-wider animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Where Every Second Tells Your Story
        </p>

        <p
          className="text-lg md:text-xl text-amber-300/80 mb-12 max-w-3xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          Discover precision craftsmanship meets timeless elegance.
          <br />
          Premium watches for those who value every moment.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="https://wa.me/923018787357"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <button
            onClick={() =>
              document
                .getElementById('products')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 border-2 border-amber-500/50 rounded-full font-semibold text-lg hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300 hover:scale-105"
          >
            View Collection
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity }}
      >
        <ChevronDown size={40} className="text-amber-400" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
