
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "KSDM clothing doesn't just enhance my wardrobe—it enhances my confidence. I'm not just noticed; I'm remembered.",
    author: "Alex Morgan",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    text: "The attention to detail in their accessories is unmatched. When I wear KSDM, I feel like my identity is being amplified, not hidden.",
    author: "Marcus Chen",
    title: "Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    text: "KSDM understands that fashion is about more than just clothes—it's about making a statement without saying a word.",
    author: "Sophia Williams",
    title: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ksdm-navy">
            What Our <span className="text-ksdm-gold">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-700">
            Those who wear KSDM don't just wear clothes. They embody a vision of awareness, 
            identity, and taste that stands out.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <Quote className="absolute text-ksdm-gold/20 h-24 w-24 -top-4 -left-4" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                  "{currentTestimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-ksdm-navy">{currentTestimonial.author}</h4>
                  <p className="text-gray-600">{currentTestimonial.title}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute right-8 bottom-8 flex gap-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-ksdm-navy hover:border-ksdm-navy transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-ksdm-navy hover:border-ksdm-navy transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
