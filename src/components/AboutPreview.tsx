import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              About Bediya
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Bediya is making waves in the market with its high-performance electrical appliances, offering a comprehensive range of products that cater to diverse consumer needs. Our design ethos focuses on sleek, modern lines that seamlessly blend with contemporary interiors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Innovation is at the heart of Bediya's product development strategy, featuring advanced technologies like energy-efficient motors in fans, smart thermostatic controls in heaters, and customisable lighting options in LEDs.
            </p>
            <Link
              to="/about"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-muted rounded-2xl p-6 sm:p-8 border border-border">
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              We are also the proud owners of <strong className="text-foreground">SILVER</strong> — one of the leading names in pump manufacturing in India. With a shared dedication to excellence, Silver continues to push boundaries with its commitment to quality and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
