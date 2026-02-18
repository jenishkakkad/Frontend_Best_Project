import Layout from "@/components/Layout";
import StatsSection from "@/components/StatsSection";
import heroAbout from "@/assets/hero-about.jpg";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={heroAbout} alt="Bediya Factory" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative h-full section-container flex items-end pb-8 sm:pb-10 md:pb-12">
          <div className="px-4 sm:px-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-extrabold text-primary-foreground leading-tight">
              INDIA'S LARGEST <span className="text-primary-foreground/60">SINGLE-LOCATION</span>
              <br />
              <span className="text-primary-foreground/60">VERTICALLY INTEGRATED</span>{" "}
              <span className="text-secondary">PLANT</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="section-container max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            Founded in 1981, Silver Consumer Electricals Limited launched BEDIYA in 2021, marking a significant expansion in our diverse product portfolio. Our commitment to innovation, quality, and customer satisfaction sets us apart. Since 1981, under the renowned SILVER brand, we have led the way in manufacturing pumps, motors, solar pumps, and agricultural equipment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            BEDIYA is more than a new chapter in our legacy; it symbolizes our relentless pursuit of excellence. Through meticulous research, cutting-edge technology, and superior craftsmanship, BEDIYA has emerged as a leading player in fans, heating products, lighting solutions, and appliances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-muted rounded-xl p-4 sm:p-6 border border-border">
              <h4 className="font-heading font-bold text-foreground mb-2 text-sm sm:text-base">Mission</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Catalyzing Change, Amplifying Impact:</strong> Our mission is to catalyze transformative change through pioneering solutions, amplifying positive impact and driving progress for generations to come.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-4 sm:p-6 border border-border">
              <h4 className="font-heading font-bold text-foreground mb-2 text-sm sm:text-base">Vision</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Empowering Connections, Energizing Futures:</strong> Our vision is to forge enduring connections through electrifying innovations, powering dreams and aspirations across every corner of the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-8 sm:py-12 md:py-16 bg-muted">
        <div className="section-container max-w-4xl px-4">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">Shri Dharamshi Bediya</h3>
            <p className="text-secondary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Founder & Chairman</p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Shri Dharamshi Bhai Bediya established Silver Engineering Company in 1981, starting with the hands-on manufacturing of mono pumps. Over the past four decades, he has grown the business with unwavering ethics and principles. His leadership continues to steer the company toward innovation.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">Mr. Vinit Bediya</h3>
            <p className="text-secondary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Chairman & Managing Director</p>
            <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Mr. Vinit Bediya, the dynamic and visionary MD of Silver Consumer Electricals Limited, is a strategic thinker dedicated to delivering excellence. As the driving and inspiring force behind the company, he is committed to transforming Silver Consumer Electricals into a leading Indian brand.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Under his leadership, Mr. Vinit has implemented an ownership-driven work culture, fostering rapid organizational growth while maintaining the company's core values and ethos. He was recognized in Forbes 30 Under 30 for his exceptional leadership.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />
    </Layout>
  );
};

export default AboutPage;
