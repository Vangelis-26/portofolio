import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import CustomSelect from '@/components/ui/customSelect';
import Input from '@/components/ui/input';
import '@/app/globals.css';

export default function Form() {
    return (
        <>
            <Header />
            <section className='flex items-center justify-center h-screen'>
                <form action="" method="get" className=' bg-stone-800 p-10 rounded-lg'>
                    <label htmlFor="identity">Civilité</label>
                    <CustomSelect name="identity" id="identity">
                        <option value=""></option>
                        <option value="madame">Mme.</option>
                        <option value="monsieur">Mr.</option>
                    </CustomSelect>
                    <label htmlFor="reason" className='pl-7'>Poste :</label>
                    <CustomSelect label="Votre poste :" name="reason" id="reason">
                        <option value=""></option>
                        <option value="director">Directeur</option>
                        <option value="rh">Ressources Humaines</option>
                        <option value="consulting">Consultant</option>
                        <option value="agency">Cabinet de recrutement</option>
                        <option value="other">Autre</option>
                    </CustomSelect>
                    <div className='justify-between items-center'>
                        <Input
                            label="Nom :"
                            id="lastname"
                            name="lastname"
                            placeholder="(Requis)"
                            required
                        />
                        <Input
                            label="Prénom :"
                            id="firstname"
                            name="firstname"
                            placeholder="(Requis)"
                            required
                        />
                        <Input
                            label="Société :"
                            id="scociety"
                            name="society"
                            placeholder="(Requis)"
                            required
                        />
                        <Input
                            type='tel'
                            label="Tél :"
                            id="tel"
                            name="tel"
                            placeholder="(Requis)"
                            required
                        />
                        <Input
                            className='w-full'
                            type='email'
                            label="Email :"
                            id="mail"
                            name="mail"
                            placeholder="(Requis)"
                            required
                        />
                    </div>
                    <div className='py-3'>
                        <label htmlFor="message">Votre message :</label>
                        <textarea name="message" id="message" cols="30" rows="10" className='mt-2 bg-stone-700 border border-stone-600 rounded-md w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"'></textarea>
                        <div className='pt-2'>
                            <label htmlFor="files" className='text-xs bg-stone-700 text-white px-6 py-2 hover:bg-stone-600 transition-colors rounded-md'>Ajout d'un fichier</label>
                            <input className='sr-only'
                                type="file"
                                name="files"
                                id="files"
                                accept=".doc,.docx,.pdf"
                            />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}
