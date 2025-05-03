

const Header = () => {

  return (
    <nav className="lg:container lg:mx-auto md:mx-7 py-2 bg-[#0a0a14]/90 backdrop-blur-sm">
        <div className="border border-gray-600 rounded-3xl mt-4 flex justify-between items-center p-3 mx-2 md:mx-0 md:p-6 px-4 lg:px-8">
          <h2 className="text-lg md:text-xl lg:text-3xl uppercase font-semibold tracking-widest cursor-pointer mx-auto md:mx-0">Krushna Sakhare</h2>
          <div className="flex items-center gap-20">
            <div className="hidden md:flex items-center lg:gap-7 gap-4">
             
              <button className="text-white text-sm font-medium lg:text-sm hover:text-[#ff2a8d]">
                <a href="#services">
                  SERVICES
                </a> 
              </button>

              <button className="text-white text-sm font-medium lg:text-sm hover:text-[#ff2a8d]">
                <a href="#technologies">
                  TECHNOLOGIES
                </a>
              </button>

              <button className="text-white text-sm font-medium lg:text-sm hover:text-[#ff2a8d]">
                <a href="#projects">
                  PROJECTS
                </a>
              </button>
              
              <button className="text-white text-sm font-medium lg:text-sm hover:text-[#ff2a8d] text-nowrap">
                <a href="#about">
                  ABOUT
                </a>
              </button>

              <button className="text-white text-sm font-medium lg:text-sm hover:text-[#ff2a8d]">
                <a href="#contact">
                  CONTACT
                </a>
              </button>

            </div>

            {/* <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              <MoonIcon className="w-4 h-4" />
            </button> */}
          </div>
        </div>
      </nav>
  )
}

export default Header