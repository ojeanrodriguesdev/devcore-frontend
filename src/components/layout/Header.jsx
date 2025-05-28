import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NavLinks } from '../ui/NavLinks'
import Logo from '../../assets/logo.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* HEADER FIXA NO TOPO */}
      <header className="fixed top-0 left-0 w-full h-16 bg-black py-4 px-6 sm:px-12 md:px-28 flex justify-between items-center z-50 shadow-md">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo DevCore" className="w-10 h-10" />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden md:flex md:items-center">
          <NavLinks />
          <Link
            to="/projeto"
            className="bg-purple_text hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded-md transition ml-8"
          >
            Comece um projeto →
          </Link>
        </div>

        {/* BOTÃO HAMBURGUER - MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full rounded-b-xl bg-black text-white flex flex-col items-start px-6 py-6 md:hidden z-50 shadow-lg"
            >
              <NavLinks isMobile onClick={() => setIsOpen(false)} />
              <Link
                to="/projeto"
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
                onClick={() => setIsOpen(false)}
              >
                Comece um projeto →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* OFFSET PARA NÃO ESCONDER CONTEÚDO */}
      <div className="pt-16" />
    </>
  )
}
