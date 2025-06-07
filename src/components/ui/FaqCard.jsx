import PropTypes from 'prop-types'

export function FaqCard({ icon, title, content }) {
  return (
    <div className="bg-[#111111] text-white p-8  rounded-xl border border-white/10 w-full sm:w-[360px] sm:h-[493px] flex-shrink-0">
      <img src={icon} alt="Ícone" className="w-5 h-5  mb-16" />

      <h3 className="font-semibold text-base sm:text-2xl leading-snug mb-9">{title}</h3>

      <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">{content}</p>
    </div>
  )
}

FaqCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}