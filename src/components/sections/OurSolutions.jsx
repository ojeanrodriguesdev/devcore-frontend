import { Cards } from "../ui/Cards"

export default function OurSolutions() {
  return (
    <section className="pt-0 pb-24 px-12 md:px-28 bg-black text-white z-20">
      <div className="flex-col w-full text-start mb-16">
        <h1 className="text-4xl md:text-5xl font-normal">
          Nossas <span className="text-purple_text">Soluções</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-4xl">
          Seja para criar, aprimorar ou escalar, desenvolvemos tecnologia alinhada às suas
          necessidades.
        </p>
      </div>
      <Cards />
    </section>
  )
}
