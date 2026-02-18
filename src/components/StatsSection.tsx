import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years of Presence", value: "14+", suffix: "" },
  { label: "Acres Land Area", value: "19+", suffix: "" },
  { label: "sq. ft. Construction", value: "10 Lac+", suffix: "" },
  { label: "Export Countries", value: "6+", suffix: "" },
  { label: "Women Employees", value: "247+", suffix: "" },
  { label: "Team Members", value: "1,417+", suffix: "" },
  { label: "Service Centres", value: "265+", suffix: "" },
  { label: "Branches", value: "8+", suffix: "" },
];

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-muted" ref={ref}>
      <div className="section-container px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
          Numbers That Matter
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-secondary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
