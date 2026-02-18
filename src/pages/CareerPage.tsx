import { useState } from "react";
import Layout from "@/components/Layout";
import heroCareer from "@/assets/hero-career.jpg";
import { Upload } from "lucide-react";

const CareerPage = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={heroCareer} alt="Join Bediya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative h-full section-container flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-primary-foreground mb-3 sm:mb-4">
              Join Bediya
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-accent font-heading font-bold">
              WHERE AMBITION & INNOVATION
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground font-heading font-bold">
              MEET TO DRIVE SUCCESS
            </p>
            <div className="w-32 sm:w-40 md:w-48 h-1 bg-primary-foreground mx-auto mt-4 sm:mt-6" />
          </div>
        </div>
      </section>

      {/* Career Info */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="section-container max-w-3xl text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">Careers at Bediya</h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Join us in shaping the future of innovation and technology! At Bediya, we believe in empowering talent, fostering creativity, and building solutions that make a difference. Whether you're an experienced professional or just starting your career, we offer a dynamic work environment, opportunities to grow, and a culture that values collaboration and excellence.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-8 sm:pb-12 md:pb-16">
        <div className="section-container max-w-3xl px-4">
          <div className="bg-primary rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary-foreground mb-6 sm:mb-8">
              To become a part of the accelerated growth at Bediya.
            </h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Full Name*</label>
                <input type="text" placeholder="Enter Your Name" className="form-field-dark text-sm sm:text-base" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Mobile No.*</label>
                  <input type="tel" placeholder="Enter Your Mobile" className="form-field-dark text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Email*</label>
                  <input type="email" placeholder="Enter Your Email" className="form-field-dark text-sm sm:text-base" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Date of Birth*</label>
                  <input type="date" className="form-field-dark text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Select Department*</label>
                  <select className="form-field-dark text-sm sm:text-base">
                    <option value="">— Please choose an option —</option>
                    <option value="1">Engineering</option>
                    <option value="2">Marketing</option>
                    <option value="3">Operations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Qualification / Highest Education*</label>
                <input type="text" placeholder="Your Qualification" className="form-field-dark text-sm sm:text-base" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-primary-foreground mb-2">Upload Your CV</label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <label className="cursor-pointer inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                    <Upload className="h-4 w-4" />
                    Upload your CV
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-xs sm:text-sm text-primary-foreground/60 break-all">{fileName}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-2.5 sm:py-3 rounded-lg font-heading font-bold text-base sm:text-lg hover:bg-accent/90 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
