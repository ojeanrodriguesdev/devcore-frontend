import { CardsChooseUs } from '../ui/CardsChooseUs'
import { SectionTitle } from '../ui/SectionTitle'

export default function WhyChooseUs() {
  return (
    <section className="px-6 md:px-28 py-20 bg-black text-white">
      <SectionTitle
        label="MOTIVOS PARA ESCOLHER A DEVCORE"
        title={
          <>
            O que faz um time de desenvolvimento
            <br /> e design ser realmente <span className="text-purple_text">valioso?</span>
          </>
        }
        description={[
          'Menos desperdício de tempo e dinheiro.',
          'Soluções que realmente resolvem problemas e melhoram a experiência do usuário.',
          'Tecnologia como ferramenta estratégica de crescimento.',
        ]}
      />

      <CardsChooseUs />
    </section>
  )
}
