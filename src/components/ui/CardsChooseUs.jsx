import { cards } from '../data/cardsChooseUs'
import CardChooseUs from './CardChooseUs'

export function CardsChooseUs() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6 mt-12">
      {cards.map(card => (
        <CardChooseUs key={card.title} {...card} />
      ))}
    </div>
  )
}
