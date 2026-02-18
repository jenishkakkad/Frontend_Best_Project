import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import productFan from "@/assets/product-fan.jpg";
import productAppliance from "@/assets/product-appliance.jpg";
import productHeater from "@/assets/product-heater.jpg";
import productLight from "@/assets/product-light.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "#", hasDropdown: true },
  { label: "Media", path: "/media" },
  { label: "Career", path: "/career" },
  { label: "Contact Us", path: "/contact" },
];

const productCategories = [
  { name: "Fans", description: "Ceiling, Table, Pedestal & Wall Fans", image: productFan },
  { name: "Appliances", description: "Mixer Grinders, Irons & More", image: productAppliance },
  { name: "Heaters", description: "Room Heaters & Geysers", image: productHeater },
  { name: "Lights", description: "LED Bulbs, Panels & Battens", image: productLight },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProductsOpen(false), 200);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <nav className="section-container flex items-center justify-between h-16 lg:h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
            BEDIYA<sup className="text-[8px] sm:text-xs">®</sup>
          </span>
          <span className="hidden sm:block text-[9px] md:text-[10px] text-muted-foreground tracking-widest uppercase leading-tight">
            Fans | Lighting | Appliances
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "nav-link-active"
                    : "text-foreground hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="ml-2 xl:ml-4 flex items-center border border-border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-2 xl:px-3 py-1.5 text-sm bg-transparent outline-none w-24 xl:w-32"
            />
            <button className="px-2 py-1.5 bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Products Dropdown Panel */}
      {productsOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 bg-background border-t border-border shadow-lg animate-slide-down z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section-container py-8">
            <div className="grid grid-cols-4 gap-6">
              {productCategories.map((cat) => (
                <Link
                  key={cat.name}
                  to="#"
                  className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-border group-hover:border-secondary transition-colors">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground">{cat.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 sm:p-6 gap-2 min-h-full">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 text-base sm:text-lg font-medium rounded-lg transition-colors text-left ${
                    mobileProductsOpen ? "bg-muted text-secondary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`} />
                  </span>
                </button>
                {mobileProductsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to="#"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                          <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{cat.name}</h4>
                          <p className="text-xs text-muted-foreground">{cat.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 sm:py-3 px-3 sm:px-4 text-base sm:text-lg font-medium rounded-lg transition-colors ${
                  isActive(link.path) ? "bg-muted text-secondary" : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Mobile Search */}
          <div className="mt-4 flex items-center border border-border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 text-sm bg-transparent outline-none flex-1"
            />
            <button className="px-3 py-2 bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
