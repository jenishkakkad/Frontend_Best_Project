import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import productFan from "@/assets/product-fan.jpg";
import productAppliance from "@/assets/product-appliance.jpg";
import productHeater from "@/assets/product-heater.jpg";
import productLight from "@/assets/product-light.jpg";
import Layout from "@/components/Layout";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import HeroSlider from "@/components/HeroSlider";

const categories = [
  {
    name: "FANS",
    tagline: "Sleek fans for a breezy, stylish living",
    image: productFan,
    bgClass: "bg-category-fan",
  },
  {
    name: "APPLIANCES",
    tagline: "Performance crafted for culinary perfection",
    image: productAppliance,
    bgClass: "bg-category-appliance",
  },
  {
    name: "HEATERS",
    tagline: "Efficient heating, steadfast reliability",
    image: productHeater,
    bgClass: "bg-category-heater",
  },
  {
    name: "LIGHTS",
    tagline: "Illuminate with efficiency and brilliance",
    image: productLight,
    bgClass: "bg-category-light",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Product Categories */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="category-card group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`${cat.bgClass} rounded-xl p-4 sm:p-5 md:p-6 h-64 sm:h-72 md:h-80 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="relative z-10">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-primary-foreground">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1">{cat.tagline}</p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary-foreground mt-2 sm:mt-3 hover:gap-2 transition-all"
                    >
                      View Products <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                  <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 opacity-80">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  {/* Background text */}
                  <span className="absolute bottom-2 left-2 sm:left-4 text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-primary-foreground/10 uppercase">
                    {cat.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <AboutPreview />

      {/* Stats */}
      <StatsSection />

      {/* Contact Form CTA */}
      <section className="py-8 sm:py-12 md:py-16 bg-primary">
        <div className="section-container text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Have questions about our products? Reach out to us and we'll be happy to assist.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
