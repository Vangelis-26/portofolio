import Timeline from '@/components/timeline/timeline';
import { experiencesData } from '@/data/data';

export default function Experiences() {
   return (
      <div className="container mx-auto px-4 py-16">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expériences Professionnelles</h2>
         <Timeline items={experiencesData} />
      </div>
   );
}
