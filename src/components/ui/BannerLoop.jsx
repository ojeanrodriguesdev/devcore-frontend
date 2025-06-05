import clsx from 'clsx'
import star from '../../assets/icons/star.svg' // ajuste se necessário

const words = ['INOVAÇÃO', 'ESTRATÉGIA', 'TECNOLOGIA']

export default function BannerLoop({
  duration = '5s',
  color = 'text-gray-400',
  size = 'text-3xl md:text-5xl',
}) {
  const items = [...words, ...words, ...words] // triplica para fluidez

  return (
    <div className="marquee-container py-6 pb-24 bg-black">
      <div
        className={clsx('marquee-track', color, size, 'font-bold tracking-wide')}
        style={{ animationDuration: duration }}
      >
        {items.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center gap-4">
            <span>{word}</span>
            <img src={star} alt="star icon" className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  )
}
