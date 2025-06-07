import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import figma from '../../assets/icons/figma.png'
import insta from '../../assets/icons/insta.png'

export function CaseCard({ title, description, tags, badge, team, logo, image, isActive }) {
  if (!isActive) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col bg-[#0D0D0E] border-2 border-[#19191C] rounded-xl lg:flex-row justify-center items-center gap-10 h-full"
    >
      {/* Lado Esquerdo */}
      <div className="flex-1 px-10 max-w-xl text-left">
        <img src={figma} alt="Figma" className="relative  w-auto h-auto pb-7" />

        {/* Tags */}
        <div className="flex gap-2 mb-10">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-base font-semibold text-white border border-white/30 px-3 p rounded-md uppercase bg-white/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Título */}
        <h3 className="text-3xl sm:text-3xl font-semibold text-white mb-10">{title}</h3>

        {/* Descrição */}
        <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-md">{description}</p>

        {/* Badge */}
        {badge && (
          <div className="mb-7">
            <span className="text-xs font-semibold text-white border border-purple-500 px-3 py-1 rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Time */}
        <div className="mt-4 flex items-center">
          {team.map((member, idx) => (
            <img
              key={`${member}-${idx}`}
              src={`/images/team/${member}`}
              alt="Integrante do time"
              className="w-auto h-auto rounded-full "
            />
          ))}
        </div>

        {/* Logo e Créditos */}
        <div className="mt-4 flex-col">
          <p className="text-base mt-1 text-gray-400">
            <strong>Desenvolvido por</strong> <br />
            Time DEVCORE.
          </p>
        </div>
        <div className="flex pt-3">
          <img src={insta} alt="Icone Instagram" className="w-auto h-auto" />
          <span className="">@devcorehub</span>
        </div>
      </div>

      {/* Lado Direito - Imagem */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={image}
          alt={`Mockup do projeto ${title}`}
          className="rounded-xl shadow-lg w-full max-w-md object-contain"
        />
      </div>
    </motion.div>
  )
}

CaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  badge: PropTypes.string,
  team: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
  image: PropTypes.string,
  isActive: PropTypes.bool,
}
