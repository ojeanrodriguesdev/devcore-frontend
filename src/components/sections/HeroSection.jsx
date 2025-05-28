import React from 'react'
import elas from '../../../public/images/HeroSection/elas.png'
import eles from '../../../public/images/HeroSection/eles.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center bg-black text-white">
      {/* Grid de fundo com efeito de grade */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 before:content-[''] before:absolute before:inset-0 before:bg-grid-pattern before:opacity-10"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-6">
        {/* Título principal com imagens estilizadas via ::before */}
        <h1 className="text-3xl md:text-6xl font-normal flex flex-col items-center justify-center gap-2 text-center">
          {/* Primeira linha do título */}
          <div className="flex items-center gap-2">
            <span className="text-purple_text">Transformando</span>
            <img
              src={elas}
              alt="Elas"
              width={178}
              height={87}
              loading="lazy"
              decoding="async"
              className="w-[178px] h-[87px] object-contain"
            />
            <span>Ideias</span>
          </div>

          {/* Segunda linha do título */}
          <div className="flex items-center gap-2">
            <span>em</span>
            <img
              src={eles}
              alt="Eles"
              width={178}
              height={87}
              loading="lazy"
              decoding="async"
              className="w-[178px] h-[87px] object-contain"
            />
            <span>
              {' '}
              Soluções <span className="text-purple_text">Inovadoras</span>
            </span>
          </div>
        </h1>

        {/* Parágrafo descritivo */}
        <p className="mt-12 text-lg max-w-lg mx-auto text-gray-300">
          Da inspiração à inovação, criamos soluções de software que transformam ideias em realidade
          digital.
        </p>

        {/* Botão de ação (CTA) */}
        <button className="mt-20 px-9 py-4 bg-purple_text rounded-xl text-white font-semibold hover:bg-purple-600 transition-colors">
          Comece agora →
        </button>
      </div>
    </section>
  )
}
