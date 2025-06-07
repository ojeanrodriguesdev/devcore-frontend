import { SolutionCard } from '../ui/SolutionCard'
import solutionsData from '../data/solutionsData.jsx'

export default function SolutionsSection() {
  return (
    <section className="px-6 md:px-28 py-20 bg-black text-white">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold mb-14">
        Seu problema tem <span className="text-white">solução!</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutionsData.map((item) => (
          <SolutionCard key={item} {...item} />
        ))}
      </div>
    </section>
  )
}