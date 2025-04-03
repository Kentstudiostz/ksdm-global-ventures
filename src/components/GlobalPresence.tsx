
import { MapPin } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    {
      country: "United States",
      cities: ["New York", "Miami", "Chicago"],
      desc: "Real estate investments and technology ventures across major metropolitan areas.",
      flag: "🇺🇸"
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver"],
      desc: "Premium real estate properties and strategic investments in growing markets.",
      flag: "🇨🇦"
    },
    {
      country: "Tanzania",
      cities: ["Dar es Salaam", "Zanzibar", "Serengeti Region"],
      desc: "Tourism operations, real estate development, and local business investments.",
      flag: "🇹🇿"
    },
    {
      country: "Global",
      cities: ["Various Locations"],
      desc: "Strategic investments and partnerships with businesses worldwide.",
      flag: "🌎"
    }
  ];

  return (
    <section id="global" className="section-padding gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Presence</h2>
          <p className="text-lg opacity-90">
            KSDM LLC operates across multiple continents, with strategic investments and ventures in key markets worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover-scale"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{location.country}</h3>
                <span className="text-3xl">{location.flag}</span>
              </div>

              <div className="mb-4">
                {location.cities.map((city, idx) => (
                  <div key={idx} className="flex items-center mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm opacity-90">
                {location.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="max-w-2xl mx-auto opacity-90">
            Our global network continues to expand as we identify new opportunities for growth and investment. 
            Contact us to discuss potential ventures in your region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
