import * as React from 'react'
import { Menu, X } from 'lucide-react'
import { UseScroll } from '../Contexts/ScrollContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { activeSection, scrollToSection } = UseScroll()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <div className="h-[70px]"> {/* Ensure consistent height */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-100 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-black'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <h1 className='font-allura'>Mihir Shiroya</h1>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink onClick={() => handleNavClick('about')} isActive={activeSection === 'about'} isScrolled={isScrolled}>About Me</NavLink>
              <NavLink onClick={() => handleNavClick('skills')} isActive={activeSection === 'skills'} isScrolled={isScrolled}>Skills</NavLink>
              <NavLink onClick={() => handleNavClick('portfolio')} isActive={activeSection === 'portfolio'} isScrolled={isScrolled}>Portfolio</NavLink>
              <NavLink onClick={() => handleNavClick('services')} isActive={activeSection === 'services'} isScrolled={isScrolled}>Services</NavLink>
              <NavLink onClick={() => handleNavClick('contact')} isActive={activeSection === 'contact'} isScrolled={isScrolled}>Contact</NavLink>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isScrolled ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-white hover:text-gray-200 hover:bg-gray-700'
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:hidden transition-all duration-300 ease-in-out ${
            isScrolled ? 'bg-white' : 'bg-gray-800'
          }`}
        >
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink onClick={() => handleNavClick('about')} isActive={activeSection === 'about'} isScrolled={isScrolled}>About Me</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('skills')} isActive={activeSection === 'skills'} isScrolled={isScrolled}>Skills</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('portfolio')} isActive={activeSection === 'portfolio'} isScrolled={isScrolled}>Portfolio</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('services')} isActive={activeSection === 'services'} isScrolled={isScrolled}>Services</MobileNavLink>
            <MobileNavLink onClick={() => handleNavClick('contact')} isActive={activeSection === 'contact'} isScrolled={isScrolled}>Contact</MobileNavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

function NavLink({ onClick, children, isActive, isScrolled }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium transition duration-150 ease-in-out ${
        isActive
          ? isScrolled
            ? 'border-primary text-primary'
            : 'border-white text-white'
          : isScrolled
            ? 'border-transparent text-gray-500 hover:border-gray-300 hover:text-black'
            : 'border-transparent text-white hover:border-gray-300 hover:text-white'
      } ${isActive ? 'font-bold': '' }`}
    >
      {children}
    </button>
  )
}

function MobileNavLink({ onClick, children, isActive, isScrolled }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out ${
        isActive
          ? isScrolled
            ? 'border-primary text-primary bg-primary/10'
            : 'border-white text-white bg-gray-700'
          : isScrolled
            ? 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
            : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
      }${isActive ? 'font-bold': '' }`}
    >
      {children}
    </button>
  )
}