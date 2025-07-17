"use client";

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import CustomSelect from '@/components/customSelect/customSelect';
import Input from '@/components/input/input';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';
import '@/app/globals.css';

export default function ContactPage() {
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

        // On prépare les données avec FormData pour l'envoi de fichier
        const dataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (key !== 'file') {
                dataToSend.append(key, formData[key]);
            }
        });
        if (formData.file) {
            dataToSend.append('file', formData.file);
        }

        try {
            // On envoie l'objet FormData à l'API
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: dataToSend,
            });
            if (response.ok) {
                setFormStatus('success');
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setFormStatus('error');
        }

        setIsSubmitting(false);
    };

    return (
        <div className='container mx-auto px-4 py-16'>
            <FadeInScroll>
                <section className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Entrons en contact</h1>
                    <p className="mt-4 text-lg text-slate-400">Un projet, une question ou une opportunité ? Écrivez-moi.</p>
                </section>

                <form onSubmit={handleSubmit} noValidate className='bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl max-w-4xl w-full mx-auto'>
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
                            <textarea name="message" id="message" rows="5" placeholder="Bonjour, je vous contacte concernant..." className='bg-slate-800 border border-slate-700 rounded-md w-full p-2 focus:ring-2 focus:ring-(--color-border) focus:border-(--color-border) outline-none' value={formData.message} onChange={handleChange}></textarea>
                        </div>

                        <div className="md:col-span-2 flex justify-between items-center pt-1 flex-wrap gap-4">
                            <label
                                htmlFor="files"
                                className="
                                    cursor-pointer text-sm font-semibold px-8 py-3 rounded-md
                                    border-2 border-slate-700 text-slate-300
                                    transition-all duration-300
                                    hover:border-(--color-border)/50 hover:bg-(--color-border)/10
                                "
                            >
                                {fileName ? fileName : "Ajouter un fichier"}
                            </label>
                            <input className='sr-only' type="file" name="files" id="files" onChange={handleFileChange} accept='.doc, .docx, .pdf' />

                            <button type="submit" disabled={isSubmitting} className='flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold bg-(--color-border) px-8 py-3 hover:opacity-90 transition-all duration-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--color-border)/30'>
                                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</span>
                                {!isSubmitting && <FaPaperPlane />}
                            </button>
                        </div>

                        <div className="md:col-span-2 text-xs text-slate-400">
                            <div className="flex items-start">
                                <input type="checkbox" id="consent" name="consent" className='mr-2 mt-0.5' checked={formData.consent} onChange={handleChange} required />
                                <label htmlFor="consent" className="cursor-pointer">En cochant cette case, je consens à ce que mes données soient utilisées uniquement pour répondre à ma demande.</label>
                            </div>
                            {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                        </div>
                    </div>

                    {formStatus === 'success' && <p className="mt-4 text-center text-green-400">Merci ! Votre message a bien été envoyé.</p>}
                    {formStatus === 'error' && <p className="mt-4 text-center text-red-500">Une erreur est survenue. Veuillez réessayer.</p>}
                </form>
            </FadeInScroll>
        </div>
    );
}
