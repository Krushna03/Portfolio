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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`lg:container lg:mx-auto md:mx-7 py-2 ${
      isScrolledPastHero ? 'w-full fixed top-1 sm:top-4 sm:left-1/2 sm:w-auto z-50 sm:px-4 ' : ''
    }`}>
      <div className={`border border-gray-600 rounded-3xl mt-2 flex flex-row justify-between items-center mx-2 md:mx-0 px-4 lg:px-8 transition-all duration-300 bg-[#18181c] p-2 ${
        isScrolledPastHero 
          ? 'sm:bg-[#0c0810] sm:border-purple-500/30 sm:shadow-lg sm:mt-0 sm:py-2.5 sm:px-5 sm:gap-6 sm:animate-[slideDown_0.3s_ease-out_forwards]' 
          : 'p-3 md:p-6'
      }
      `}>
        <div className={`transition-all duration-300 ${
          isScrolledPastHero ? 'sm:hidden' : ''
        }`}>
          <h2 className="text-lg md:text-xl lg:text-3xl uppercase font-semibold tracking-widest cursor-pointer text-left">
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
                      : 'text-white/90 hover:text-purple-200'
                    : 'text-white hover:text-[#ff2a8d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button - only visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay - only visible on mobile */}
        <div
          className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Drawer - only visible on mobile */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#0b070f] border-l border-purple-500/30 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-10 px-6">
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-purple-500/20">
              <img src="/logo.png" alt="logo" className="w-8 h-8" />
              <span className="text-white font-semibold">Krushna Sakhare</span>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-300 bg-purple-500/20 border border-purple-500/30'
                      : 'text-white/70 hover:text-purple-200 hover:bg-purple-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header