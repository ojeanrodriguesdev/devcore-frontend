import { Card } from './Card';
import { solutions } from '../../types/solutions';

export function Cards() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {solutions.map((solution, index) => (
        <Card key={index} solution={solution} />
      ))}
    </div>
  );
}