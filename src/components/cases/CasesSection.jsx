import { motion } from 'framer-motion'
import { CaseSlider } from './CaseSlider'
import caseData from '../data/caseData'
import starcases from '../../assets/icons/starcases.png'

export function CasesSection() {
  return (
    <section className="px-6 md:px-24 py-20 bg-black text-white">
      <div className=" px-2 sm:px-4 mx-auto">
        {/* Header horizontal com estrela, título e botão */}
        <div className="flex items-center justify-start gap-x-4 flex-wrap">
          {/* Estrela + Título */}
          <motion.h2
            className="flex items-center gap-3 text-2xl sm:text-4xl font-bold text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={starcases} alt="Estrela" className="w-6 h-6" />
            Conheça nossos <span className="text-purple_text">cases</span>
          </motion.h2>

          {/* Botão */}
          <motion.button
            className="text-xs border border-white/20 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            FIGMA TO CODE
          </motion.button>
        </div>

        {/* Slider */}
        <div className="flex items-center justify-center mt-5">
          <CaseSlider cases={caseData} />
        </div>
      </div>
    </section>
  )
}
