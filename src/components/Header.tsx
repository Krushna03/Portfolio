import { MoonIcon } from 'lucide-react'

const Header = () => {

  return (
    <nav className="container mx-auto px-4 py-2 bg-[#0a0a14]/90 backdrop-blur-sm">
        <div className="border border-gray-600 rounded-3xl mt-5 flex justify-between items-center p-7">
          <h2 className="text-2xl uppercase tracking-widest">Krushna Sakhare</h2>
          <div className="flex items-center gap-20">
            <div className="hidden md:flex items-center gap-8">
             
              <button className="text-white/80 hover:text-[#ff2a8d]">
                <a href="#services">
                  SERVICES
                </a> 
              </button>

              <button className="text-white/80 hover:text-[#ff2a8d]">
                <a href="#technologies">
                  TECHNOLOGIES
                </a>
              </button>

              <button className="text-white/80 hover:text-[#ff2a8d]">
                <a href="#projects">
                  PROJECTS
                </a>
              </button>

              <button className="text-white/80 hover:text-[#ff2a8d]">
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