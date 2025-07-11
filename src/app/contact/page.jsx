"use client";

import { useState } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import CustomSelect from '@/components/ui/customSelect';
import Input from '@/components/ui/input';
import '@/app/globals.css';

export default function Form() {
    const [formData, setFormData] = useState({
        identity: '', lastname: '', firstname: '', society: '',
        reason: '', tel: '', mail: '', message: '',
        consent: false, file: null,
    });
    const [errors, setErrors] = useState({});
    const [fileName, setFileName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setErrors({ ...errors, [name]: null });
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);
            setFormData(prevState => ({ ...prevState, file: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus(null);

        const newErrors = {};
        if (!formData.lastname) newErrors.lastname = "Champ obligatoire";
        if (!formData.firstname) newErrors.firstname = "Champ obligatoire";
        if (!formData.mail) {
            newErrors.mail = "Champ obligatoire";
        } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
            newErrors.mail = "Format d'email invalide";
        }
        if (!formData.consent) newErrors.consent = "Vous devez accepter les conditions";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setFormStatus('success');
    };

    return (
        <>
            <Header />
            <main className='flex flex-col items-center justify-center flex-grow py-16 px-4'>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Entrons en contact</h1>
                    <p className="text-slate-400 mt-2">Un projet, une question ou une opportunité ? Écrivez-moi.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className='bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl max-w-4xl w-full'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                        <div className="md:col-span-2">
                            <div className="flex flex-col md:flex-row gap-x-8 gap-y-6">
                                <div className="md:w-1/3">
                                    <CustomSelect name="identity" id="identity" value={formData.identity} onChange={handleChange} autoComplete="honorific-prefix">
                                        <option value="">Civilité</option>
                                        <option value="madame">Mme.</option>
                                        <option value="monsieur">Mr.</option>
                                    </CustomSelect>
                                </div>
                                <div className="flex-grow">
                                    <CustomSelect name="reason" id="reason" value={formData.reason} onChange={handleChange}>
                                        <option value="">Fonction</option>
                                        <option value="director">Directeur</option>
                                        <option value="rh">Ressources Humaines</option>
                                        <option value="consulting">Consultant</option>
                                        <option value="agency">Cabinet de recrutement</option>
                                        <option value="other">Autre</option>
                                    </CustomSelect>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Input label="Nom *" id="lastname" name="lastname" autoComplete="family-name" required value={formData.lastname} onChange={handleChange} />
                            {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
                        </div>

                        <div>
                            <Input label="Prénom *" id="firstname" name="firstname" autoComplete="given-name" required value={formData.firstname} onChange={handleChange} />
                            {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
                        </div>

                        <div>
                            <Input type='email' label="Email *" id="mail" name="mail" autoComplete="email" required value={formData.mail} onChange={handleChange} />
                            {errors.mail && <p className="text-red-500 text-xs mt-1">{errors.mail}</p>}
                        </div>

                        <div>
                            <Input type='tel' label="Téléphone" id="tel" name="tel" autoComplete="tel" value={formData.tel} onChange={handleChange} />
                        </div>

                        <div className="md:col-span-2">
                            <Input label="Société" id="society" name="society" autoComplete="organization" value={formData.society} onChange={handleChange} />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Votre message</label>
                            <textarea name="message" id="message" rows="5" placeholder="Bonjour, je vous contacte concernant..." className='bg-slate-800 border border-slate-700 rounded-md w-full p-2 focus:ring-2 focus:ring-[--color-border] focus:border-[--color-border] outline-none' value={formData.message} onChange={handleChange}></textarea>
                        </div>

                        <div className="md:col-span-2 flex justify-between items-center pt-1 flex-wrap gap-4">
                            <label htmlFor="files" className='text-center block cursor-pointer text-xs border border-slate-700 px-4 py-2 hover:bg-slate-800 rounded-md truncate max-w-[150px]'>
                                {fileName ? fileName : "Ajouter un fichier"}
                            </label>
                            <input className='sr-only' type="file" name="files" id="files" onChange={handleFileChange} />

                            <button type="submit" disabled={isSubmitting} className='cursor-pointer text-sm font-semibold bg-[--color-border] px-8 py-2 hover:opacity-90 transition-opacity rounded-md disabled:opacity-50 disabled:cursor-not-allowed min-w-[150px]'>
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                            </button>
                        </div>

                        <div className="md:col-span-2 text-xs text-slate-400">
                            <div className="flex items-start">
                                <input type="checkbox" id="consent" name="consent" className='mr-2 mt-0.5' checked={formData.consent} onChange={handleChange} required />
                                <label htmlFor="consent" className="cursor-pointer">
                                    En cochant cette case, je consens à ce que mes données soient utilisées uniquement pour répondre à ma demande.
                                </label>
                            </div>
                            {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                        </div>
                    </div>

                    {formStatus === 'success' && <p className="mt-4 text-center text-green-400">Merci ! Votre message a bien été envoyé.</p>}
                    {formStatus === 'error' && <p className="mt-4 text-center text-red-500">Une erreur est survenue. Veuillez réessayer.</p>}
                </form>
            </main>
            <Footer />
        </>
    );
}
