import Layout from "@/components/Layout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productFan from "@/assets/product-fan.jpg";
import productAppliance from "@/assets/product-appliance.jpg";
import productHeater from "@/assets/product-heater.jpg";
import productLight from "@/assets/product-light.jpg";
import heroHome from "@/assets/hero-home.jpg";

const pressNotes = [
  {
    title: "Silver Consumer Electricals Signs Hardik Pandya as Brand Ambassador",
    excerpt: "Silver Consumer Electricals partners with Indian cricket vice-captain to promote pumps, motors, and consumer electricals.",
    image: heroHome,
  },
  {
    title: "Silver Consumer Electricals Poised for Growth, Valued at ₹3,600 Crores",
    excerpt: "Silver achieves ten-fold growth in five years, led by MD Vinit Bediya's visionary leadership.",
    image: productFan,
  },
  {
    title: "Silver Consumer Electricals Closes Private Placement Round at ₹4000 Million",
    excerpt: "Silver raises ₹4000 Million through private placement, with 10% stakes from two investors finalized.",
    image: productAppliance,
  },
  {
    title: "BEDIYA Launches New Range of Energy Efficient Products",
    excerpt: "Introducing innovative ceiling fans and LED lighting solutions for modern homes.",
    image: productLight,
  },
  {
    title: "BEDIYA Expands Manufacturing Capacity",
    excerpt: "New production facility to meet growing demand for premium home appliances.",
    image: productHeater,
  },
  {
    title: "BEDIYA Wins Excellence Award for Innovation",
    excerpt: "Recognition for outstanding contribution to consumer electronics industry.",
    image: heroHome,
  },
];

const tvcAds = [
  { title: "BEDIYA FAN | Latest TVC featuring Hardik Pandya", videoId: "7TrXFAK_PxE" },
  { title: "BEDIYA GEYSERS TVC | Featuring Hardik Pandya", videoId: "giqkWQMJExs" },
  { title: "BEDIYA LIGHT BULB | Latest TVC", videoId: "2ZFU3yOIKFI" },
];

const MediaPage = () => {
  return (
    <Layout>
      {/* Press Notes */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="section-container px-4">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Press Note</h1>
            <div className="flex gap-2">
              <button className="p-1.5 sm:p-2 rounded-full border border-border hover:bg-muted transition-colors" aria-label="Previous">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button className="p-1.5 sm:p-2 rounded-full border border-border hover:bg-muted transition-colors" aria-label="Next">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {pressNotes.map((note) => (
              <div key={note.title} className="group cursor-pointer">
                <div className="h-40 sm:h-48 md:h-56 rounded-xl mb-3 sm:mb-4 overflow-hidden border border-border group-hover:shadow-lg transition-shadow">
                  <img 
                    src={note.image} 
                    alt={note.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-bold text-foreground line-clamp-2 group-hover:text-secondary transition-colors text-sm sm:text-base">
                  {note.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2">{note.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TVC Ads */}
      <section className="py-8 sm:py-10 md:py-12 bg-muted">
        <div className="section-container px-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8">TVC Ads</h2>

          {/* Featured Video */}
          <div className="mb-6 sm:mb-8">
            <div className="aspect-video rounded-xl overflow-hidden bg-foreground/5 border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${tvcAds[0].videoId}`}
                title={tvcAds[0].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* More Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {tvcAds.map((ad) => (
              <div key={ad.videoId} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden border border-border">
                  <iframe
                    src={`https://www.youtube.com/embed/${ad.videoId}`}
                    title={ad.title}
                    className="w-full h-full pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <h4 className="font-heading font-semibold text-foreground mt-3 text-xs sm:text-sm line-clamp-2 group-hover:text-secondary transition-colors">
                  {ad.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MediaPage;
