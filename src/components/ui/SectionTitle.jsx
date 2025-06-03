import infinito from '../../assets/WhyChooseUs/infinito.png'
import React from 'react'
import PropTypes from 'prop-types'

export function SectionTitle({ label, title, description }) {
  return (
    <div className="text-start">
      {/* Rótulo com ícone */}
      <div className="flex items-center gap-2">
        <img src={infinito} alt="" className="w-4 h-4 object-contain" />
        <span className="text-sm uppercase font-semibold tracking-widest text-white">{label}</span>
      </div>

      {/* Título */}
      <h2 className="mt-2 lg:mt-7 text-2xl md:text-5xl font-semibold leading-tight text-[#DFDFE0]">{title}</h2>

      {/* Descrição com espaçamento entre linhas */}
      <div className="mt-4 lg:mt-7 text-lg text-gray-300 ">
        {description.map(line => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
}
