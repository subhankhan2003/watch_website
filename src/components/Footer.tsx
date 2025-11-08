import { Watch, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-amber-500/20 py-12 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/shafi logo.JPG"
                alt="SHAFI WATCHES"
                className="h-12 w-12 object-contain rounded-full ring-2 ring-amber-500/50"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                SHAFI WATCHES
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium timepieces for those who value every second. Precision
              craftsmanship meets timeless elegance.
            </p>
          </div>

          <div>
            <h4 className="text-amber-300 font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('home')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('products')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Featured Products
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-300 font-semibold mb-4 text-lg">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Jahanian, Pakistan, 58200</li>
              <li>
                <a
                  href="tel:+923018787357"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  0301 8787357
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923066243502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-1"
                >
                  WhatsApp: +92 306 6243502
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sohaibsalik613@gmail.com"
                  className="hover:text-amber-400 transition-colors duration-300 break-all"
                >
                  sohaibsalik613@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} SHAFI WATCHES. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>for Watch Enthusiasts</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300"
            >
              <Watch
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Authorized dealer of premium watch brands • 100% Original Timepieces
            • Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
