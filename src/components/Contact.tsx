import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Jahanian, Pakistan, 58200',
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '0301 8787357',
      link: 'tel:+923018787357',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92 306 6243502',
      link: 'https://wa.me/923066243502',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sohaibsalik613@gmail.com',
      link: 'mailto:sohaibsalik613@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We're here to help you find the perfect timepiece
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
            >
              <item.icon className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-amber-300 font-semibold mb-2 text-sm">
                {item.label}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm break-words"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-amber-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-amber-400" size={32} />
                <h3 className="text-2xl font-bold text-amber-300">
                  Business Hours
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-2">
                Always Open - 24/7 Service
              </p>
              <p className="text-gray-400 text-sm">
                We're committed to serving you anytime, anywhere
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923018787357"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="tel:+923018787357"
                className="group/btn relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black px-6 py-3 rounded-full border border-amber-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm">
              Currently Available - Response within minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
