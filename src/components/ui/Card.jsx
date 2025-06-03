import PropTypes from 'prop-types'

export function Card({ solution }) {
  return (
    <div
      className={`relative px-12 pt-9 pb-11 bg-[#3C216A]/20 border border-[#BE9AFF33]/20 ${solution.customClass}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base text-gray-400 font-semibold uppercase">
          {solution.subtitle.map(line => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <span
          className="relative before:content-[''] before:block before:w-16 before:h-10 before:bg-cover before:bg-no-repeat before:bg-center pb-3 pl-1"
          style={{ backgroundImage: `url(${solution.image})` }}
        ></span>
      </div>
      <h2 className="mt-2 mb-3 text-xl md:text-2xl font-semibold">
        {solution.title.map(line => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      <p className="mt-0 text-gray-300 text-xs md:text-base">
        {solution.description.map(line => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}

Card.propTypes = {
  solution: PropTypes.shape({
    customClass: PropTypes.string,
    subtitle: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
