import PropTypes from 'prop-types'
import clsx from 'clsx'
import { backgroundClasses } from '../data/cardsChooseUs'

import celular from "../../../public/images/WhyChooseUs/celular.png"

export default function CardChooseUs({ category, title, description, image, gridSpan, height }) {
  const bgClass = backgroundClasses[image] || ''
  const isUIDesign = category === 'UI DESIGN'

  return (
    <div
      className={clsx(
        'relative rounded-2xl overflow-hidden border border-[#313135]',
        'bg-cover bg-center bg-no-repeat p-6 sm:p-8',
        bgClass,
        gridSpan,
        height
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      {isUIDesign ? (
        <div className="relative z-10 h-full">
          {/* Texto */}
          <div className="flex flex-col gap-4">
            <span className="inline-block w-fit text-xs font-semibold text-[#7C7C83] border border-[#7C7C83] px-3 py-1 rounded-md uppercase bg-transparent">
              {category}
            </span>

            <h3 className="text-white text-xl font-semibold">{title}</h3>

            <div className="text-gray-300 text-sm space-y-1">
              {description.map(line => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Imagem fixa no canto inferior direito */}
          <img
            src={celular}
            alt="Visual UI"
            className="absolute lg:top-[-55px] lg:right-[-35px] lg:w-auto h-auto object-contain pointer-events-none"
          />
        </div>
      ) : (
        <>
          <span className="relative z-10 text-xs font-semibold text-[#7C7C83] border border-[#7C7C83] px-3 py-1 rounded-md uppercase inline-block bg-transparent">
            {category}
          </span>

          <h3 className="relative z-10 mt-4 text-white text-xl font-semibold">{title}</h3>

          {Array.isArray(description) && description.length > 0 && (
            <div className="relative z-10 mt-2 text-gray-300 text-sm space-y-1">
              {description.map(line => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

CardChooseUs.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  gridSpan: PropTypes.string,
  height: PropTypes.string,
}
