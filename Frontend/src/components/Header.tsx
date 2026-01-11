import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "technologies", label: "TECHNOLOGIES" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const Header = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolledPastHero(window.scrollY > heroBottom - 100);
      }

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`lg:container lg:mx-auto md:mx-7 py-2 ${
      isScrolledPastHero ? 'sm:fixed sm:top-4 sm:left-1/2 sm:w-auto sm:z-50 sm:px-4' : ''
    }`}>
      <div className={`border border-gray-600 rounded-3xl mt-4 flex flex-col md:flex-row justify-center md:justify-between items-center mx-2 md:mx-0 px-4 lg:px-8 transition-all duration-300 ${
        isScrolledPastHero 
          ? 'sm:bg-[#0b070f] sm:border-purple-500/30 sm:shadow-lg sm:mt-0 sm:py-2.5 sm:px-5 sm:gap-6 sm:animate-[slideDown_0.3s_ease-out_forwards] sm:flex-row sm:justify-between' 
          : 'p-3 md:p-6'
      }`}>
        <div className={`transition-all duration-300 w-full md:w-auto ${
          isScrolledPastHero ? 'sm:hidden' : ''
        }`}>
          <h2 className="text-lg md:text-xl lg:text-3xl uppercase font-semibold tracking-widest cursor-pointer text-center md:text-left">
            Krushna Sakhare
          </h2>
        </div>

        <div className={`flex items-center transition-all duration-300 ${
          isScrolledPastHero ? 'sm:gap-4' : 'gap-20'
        }`}>
          <div className="hidden md:flex items-center lg:gap-7 gap-4">
            {
              isScrolledPastHero && (
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="logo" className="w-8 h-8" />
                </div>
              )
            }
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  isScrolledPastHero
                    ? activeSection === item.id
                      ? 'text-purple-300' 
                      : 'text-white/70 hover:text-purple-200'
                    : 'text-white hover:text-[#ff2a8d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header