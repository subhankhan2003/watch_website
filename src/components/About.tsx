import { Clock, Award, Star, Sparkles } from 'lucide-react';

interface AboutProps {
  scrollY: number;
}

export default function About({ scrollY }: AboutProps) {
  const aboutOffset = Math.max(0, scrollY - 600);
  const floatY = Math.sin(aboutOffset * 0.002) * 20;
  const scale = Math.min(1, (scrollY - 400) / 400);
  const opacity = Math.min(1, (scrollY - 500) / 300);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"
          style={{
            transform: `translateY(${floatY}px) scale(${scale})`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
          style={{
            transform: `translateY(${-floatY}px) scale(${scale})`,
          }}
        />
      </div>

      <div
        className="relative z-10 max-w-6xl mx-auto"
        style={{
          opacity,
          transform: `translateY(${Math.max(0, 50 - scrollY / 10)}px)`,
        }}
      >
        <div className="text-center mb-16">
          <div
            className="inline-block mb-6"
            style={{
              transform: `translateY(${floatY}px) rotateY(${aboutOffset * 0.1}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <Sparkles
              size={60}
              className="text-amber-400 mx-auto animate-pulse"
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            About SHAFI WATCHES
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12" />

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            At Shafi Watches, we believe a watch is more than just a way to
            tell time — it's a statement of who you are. Our collection blends
            precision craftsmanship with timeless style, designed for those who
            value every second. Discover the perfect piece that speaks your
            story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div
            className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
            style={{
              transform: `translateY(${floatY * 0.5}px)`,
              animationDelay: '0s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <Clock
              size={48}
              className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold mb-3 text-amber-300">
              Precision
            </h3>
            <p className="text-gray-400">
              Every timepiece is crafted with meticulous attention to detail,
              ensuring accuracy and reliability.
            </p>
          </div>

          <div
            className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
            style={{
              transform: `translateY(${floatY * 0.7}px)`,
              animationDelay: '0.2s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <Award
              size={48}
              className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold mb-3 text-amber-300">Quality</h3>
            <p className="text-gray-400">
              100% original watches from renowned brands, guaranteeing
              authenticity and excellence.
            </p>
          </div>

          <div
            className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
            style={{
              transform: `translateY(${floatY * 0.9}px)`,
              animationDelay: '0.4s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <Star
              size={48}
              className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold mb-3 text-amber-300">Style</h3>
            <p className="text-gray-400">
              Timeless designs that complement your personality and elevate your
              everyday look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
