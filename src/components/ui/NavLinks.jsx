import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Quem somos', to: '/quem-somos' },
  { label: 'Cases', to: '/cases' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'FAQ', to: '/faq' },
]

export function NavLinks({ isMobile = false, onClick }) {
  const { pathname } = useLocation()

  return (
    <nav className={`flex ${isMobile ? 'flex-col items-start space-y-4' : 'space-x-8'}`}>
      {NAV_ITEMS.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={`text-white hover:text-purple_text transition ${
            pathname === item.to ? 'font-bold text-purple_text' : ''
          }`}
          onClick={isMobile ? onClick : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
