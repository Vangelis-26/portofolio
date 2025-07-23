import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';
import ContactForm from '@/components/contactForm/contactForm';
import '@/app/globals.css';

export default function ContactPage() {
   return (
      <div className='container mx-auto px-4 py-16'>
         <FadeInScroll>
            <section className="text-center mb-12">
               <h1 className="text-4xl md:text-5xl font-bold">Entrons en contact</h1>
               <p className="mt-4 text-lg text-slate-400">Un projet, une question ou une opportunité ? Écrivez-moi.</p>
            </section>

            <ContactForm />

         </FadeInScroll>
      </div>
   );
}
