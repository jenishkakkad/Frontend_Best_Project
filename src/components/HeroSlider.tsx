import { useState, useEffect } from "react";
import productFan from "@/assets/product-fan.jpg";
import productAppliance from "@/assets/product-appliance.jpg";
import productHeater from "@/assets/product-heater.jpg";
import productLight from "@/assets/product-light.jpg";
import heroHome from "@/assets/hero-home.jpg";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Refreshing Every Corner",
    subtitle: "Superior airflow with India's leading consumer electricals brand",
    image: heroHome,
    cta: "Explore Products"
  },
  {
    id: 2,
    title: "Premium Ceiling Fans",
    subtitle: "Experience superior comfort with our energy-efficient ceiling fans",
    image: productFan,
    cta: "Explore Fans"
  },
  {
    id: 3,
    title: "Smart Home Appliances",
    subtitle: "Modern kitchen solutions for the contemporary home",
    image: productAppliance,
    cta: "View Appliances"
  },
  {
    id: 4,
    title: "LED Lighting Solutions",
    subtitle: "Illuminate your space with our energy-saving LED products",
    image: productLight,
    cta: "Shop Lights"
  },
  {
    id: 5,
    title: "Heating Solutions",
    subtitle: "Stay warm with our efficient room heaters and geysers",
    image: productHeater,
    cta: "Browse Heaters"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="section-container">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90">
                    {slide.subtitle}
                  </p>
                  {slide.cta && (
                    <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                      {slide.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;