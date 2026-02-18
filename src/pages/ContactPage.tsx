import Layout from "@/components/Layout";
import { MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      {/* Find Us */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="section-container px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 sm:mb-8">Find Us Near You</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 border border-border rounded-lg overflow-hidden mb-4">
                <input type="text" placeholder="Enter a Location" className="form-field border-0 text-sm sm:text-base" />
                <button className="px-3 sm:px-4 py-3 bg-secondary text-secondary-foreground shrink-0" aria-label="Search location">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold">
                Number Of Shops: 265+
              </div>
            </div>
            <div className="lg:col-span-2 h-56 sm:h-64 md:h-80 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7373258808!2d70.7512!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BEDIYA Office Location - Rajkot, Gujarat"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order Inquiry */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="section-container max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8">Bulk Order Inquiry</h2>
          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Full Name*</label>
                <input type="text" placeholder="Enter Your Name" className="form-field text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Company Name (Optional)</label>
                <input type="text" placeholder="Company Name" className="form-field text-sm sm:text-base" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Email*</label>
                <input type="email" placeholder="Enter Your Email" className="form-field text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Phone Number*</label>
                <input type="tel" placeholder="Enter Your Phone Number" className="form-field text-sm sm:text-base" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Product Type*</label>
                <input type="text" placeholder="Product Type" className="form-field text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Quantity Required*</label>
                <input type="text" placeholder="Quantity" className="form-field text-sm sm:text-base" />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-foreground mb-2">Your Message</label>
              <textarea rows={4} placeholder="Write your message..." className="form-field resize-none text-sm sm:text-base" />
            </div>

            <button
              type="submit"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Office Addresses */}
      <section className="py-8 sm:py-10 md:py-12 bg-muted">
        <div className="section-container px-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                city: "Rajkot (HQ)", 
                address: "Silver Consumer Electricals Ltd., GIDC, Metoda, Rajkot - 360021, Gujarat, India",
                phone: "+91 281 234 5678",
                email: "info@bediya.com"
              },
              { 
                city: "Mumbai", 
                address: "Silver Consumer Electricals Ltd., Andheri East, Mumbai - 400069, Maharashtra, India",
                phone: "+91 22 2345 6789",
                email: "mumbai@bediya.com"
              },
              { 
                city: "Delhi", 
                address: "Silver Consumer Electricals Ltd., Okhla Industrial Area, New Delhi - 110020, India",
                phone: "+91 11 2345 6789",
                email: "delhi@bediya.com"
              },
            ].map((office) => (
              <div key={office.city} className="bg-background rounded-xl p-4 sm:p-6 border border-border">
                <h4 className="font-heading font-bold text-foreground mb-3 text-sm sm:text-base">{office.city}</h4>
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <p>{office.address}</p>
                  <p className="font-medium text-foreground">Phone: {office.phone}</p>
                  <p className="font-medium text-foreground">Email: {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
