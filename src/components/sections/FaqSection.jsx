import { useEffect, useRef, useState } from 'react'
import { FaqCard } from '../ui/FaqCard'
import faqData from '../data/faqData'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function FaqSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    ref.addEventListener('scroll', checkScroll)
    return () => ref.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = direction => {
    const container = scrollRef.current
    const scrollAmount = 300
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="px-6 md:px-28 py-20 bg-black text-white">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="uppercase mb-5 text-sm text-white/50">FAQ</p>
          <h2 className="text-3xl sm:text-4xl mb-10 font-semibold">Perguntas frequentes</h2>
        </div>

        {/* Botões de navegação com controle visual */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
              canScrollLeft
                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                : 'bg-white/10 text-white/30'
            }`}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
              canScrollRight
                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                : 'bg-white/10 text-white/30'
            }`}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Lista de cards scrollável */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
        {faqData.map((item) => (
          <FaqCard key={item} {...item} />
        ))}
      </div>
    </section>
  )
}
