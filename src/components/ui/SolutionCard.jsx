import PropTypes from 'prop-types'

export function SolutionCard({ icon, title, description }) {
  return (
    <div className="bg-[#0D0D0E] border border-[#1F1F21] rounded-xl px-6 py-5 w-full h-full">
      <div className="w-auto h-auto mb-5  flex items-center justify-center">
        <img src={icon} alt="" className="object-contain max-h-full rounded-md" />
      </div>
      <h3 className="text-[#F6F6F7] font-semibold text-base mb-4 leading-snug">{title}</h3>
      <p className="text-sm text-[#DFDFE0] leading-relaxed">{description}</p>
    </div>
  )
}

SolutionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  description: PropTypes.string.isRequired,
}
