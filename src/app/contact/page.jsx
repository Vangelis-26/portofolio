"use client";

import { useState } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import CustomSelect from '@/components/ui/customSelect';
import Input from '@/components/ui/input';
import '@/app/globals.css';

export default function Form() {

    const [formData, setFormData] = useState({
        identity: '',
        lastname: '',
        firstname: '',
        society: '',
        reason: '',
        tel: '',
        mail: '',
        message: '',
        consent: false,
        file: null,
    });

    const [errors, setErrors] = useState({});

    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);
            setFormData(prevState => ({
                ...prevState,
                file: file
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.lastname) newErrors.lastname = "Champ obligatoire";
        if (!formData.firstname) newErrors.firstname = "Champ obligatoire";
        if (!formData.mail) newErrors.mail = "Champ obligatoire";
        if (!formData.consent) newErrors.consent = "Vous devez accepter les conditions";


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Données valides, envoi en cours :", formData);
            alert("Formulaire envoyé (simulation) !");
        } else {
            console.log("Validation échouée, le formulaire n'est pas envoyé.");
        }
    };

    return (
        <>
            <Header />
            <section className='flex flex-col items-center justify-center flex-grow py-10'>
                <form onSubmit={handleSubmit} noValidate className='flex flex-col md:flex-row bg-stone-800 p-10 rounded-lg max-w-4xl w-full'>

                    {/* Colonne de gauche */}
                    <div className='flex-1 pr-0 md:pr-5'>
                        <div className='flex flex-col md:flex-row gap-4 mb-6'>
                            <CustomSelect name="identity" id="identity" value={formData.identity} onChange={handleChange}>
                                <option value="">Civilité</option>
                                <option value="madame">Mme.</option>
                                <option value="monsieur">Mr.</option>
                            </CustomSelect>
                            <CustomSelect name="reason" id="reason" value={formData.reason} onChange={handleChange}>
                                <option value="">Fonction</option>
                                <option value="director">Directeur</option>
                                <option value="rh">Ressources Humaines</option>
                                <option value="consulting">Consultant</option>
                                <option value="agency">Cabinet de recrutement</option>
                                <option value="other">Autre</option>
                            </CustomSelect>
                        </div>

                        <Input label="Nom *" id="lastname" name="lastname" placeholder="(Requis)" required value={formData.lastname} onChange={handleChange} />
                        {errors.lastname && <p className="text-red-500 text-xs">{errors.lastname}</p>}

                        <Input label="Prénom *" id="firstname" name="firstname" placeholder="(Requis)" required value={formData.firstname} onChange={handleChange} />
                        {errors.firstname && <p className="text-red-500 text-xs">{errors.firstname}</p>}

                        <Input label="Société" id="society" name="society" value={formData.society} onChange={handleChange} />

                        <Input type='tel' label="Tél" id="tel" name="tel" autoComplete="tel" value={formData.tel} onChange={handleChange} />

                        <Input type='email' label="Email *" id="mail" name="mail" placeholder="(Requis)" required value={formData.mail} onChange={handleChange} />
                        {errors.mail && <p className="text-red-500 text-xs">{errors.mail}</p>}
                    </div>

                    {/* Colonne de droite */}
                    <div className='flex-1 pl-0 md:pl-5 mt-4 md:mt-0'>
                        <label htmlFor="message">Votre message :</label>
                        <textarea name="message" id="message" cols="30" rows="10" className='mt-2 bg-stone-700 border border-stone-600 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 p-2' value={formData.message} onChange={handleChange}></textarea>

                        <div className='flex justify-between items-center pt-1'>
                            <label htmlFor="files" className='text-center block w-[150px] max-w-[150px] cursor-pointer text-xs bg-stone-700 px-6 py-2 my-6 hover:bg-stone-600 transition-colors rounded-md truncate'>
                                {fileName ? fileName : "Ajouter un fichier"}
                            </label>
                            <input
                                className='sr-only'
                                type="file"
                                name="files"
                                id="files"
                                accept=".doc,.docx,.pdf"
                                onChange={handleFileChange}
                            />
                            <input type="submit" value="Envoyer" className='cursor-pointer text-xs bg-blue-600 px-6 py-2 my-6 hover:bg-blue-500 transition-colors rounded-md' />
                        </div>

                        <div className="text-xs text-stone-400">
                            <div className="flex items-start">
                                <input type="checkbox" id="consent" name="consent" className='mr-2 mt-1' checked={formData.consent} onChange={handleChange} required />
                                <label htmlFor="consent">En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour me contacter et répondre à ma demande.</label>
                            </div>
                            {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}
                            <p className='pt-3'>
                                Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et d'opposition. Pour l'exercer, contactez-moi à <a href="mailto:contact@mourier-matthieu.fr" className='text-stone-300 hover:text-stone-200'>contact@mourier-matthieu.fr</a>.
                            </p>
                            <p className='pt-3'>* Champ obligatoire</p>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}
