export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-[#222233] mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Krushna Sakhare. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-white/60 hover:text-[#ff2a8d] text-sm transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-white/60 hover:text-[#ff2a8d] text-sm transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
