"use client";

import { useState, useRef } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaUpload, FaTimes } from 'react-icons/fa';

export default function ContactForm() {
   const [formData, setFormData] = useState({
      civilite: '',
      nom: '',
      prenom: '',
      email: '',
      message: '',
      consent: false,
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formStatus, setFormStatus] = useState({ submitted: false, error: null });
   const [file, setFile] = useState(null);
   const [fileName, setFileName] = useState("");
   const fileInputRef = useRef(null);

   const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
   };

   const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
         if (selectedFile.size > 5 * 1024 * 1024) {
            setErrors({ ...errors, file: "Le fichier dépasse 5Mo." });
            setFile(null);
            setFileName("");
         } else {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            setErrors({ ...errors, file: null });
         }
      }
   };

   const resetFile = (e) => {
      e.stopPropagation();
      setFile(null);
      setFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = {};

      if (!formData.civilite) newErrors.civilite = 'Veuillez sélectionner une civilité.';
      if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis.';
      if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis.';
      if (!formData.email.trim()) {
         newErrors.email = "L'email est requis.";
      } else if (!validateEmail(formData.email)) {
         newErrors.email = 'Format invalide.';
      }
      if (!formData.message.trim()) newErrors.message = 'Le message est requis.';
      if (!formData.consent) newErrors.consent = 'Vous devez accepter les conditions.';

      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
      }

      setIsSubmitting(true);
      setErrors({});

      const data = new FormData();
      for (const key in formData) {
         data.append(key, formData[key]);
      }
      if (file) {
         data.append('file', file);
      }

      try {
         await new Promise((resolve) => setTimeout(resolve, 2000));
         setFormStatus({ submitted: true, error: null });
         setFormData({ civilite: '', nom: '', prenom: '', email: '', message: '', consent: false });
         setFile(null);
         setFileName("");
      } catch (error) {
         setFormStatus({ submitted: false, error: "Une erreur est survenue. Réessayez plus tard." });
      } finally {
         setIsSubmitting(false);
      }
   };

   const inputClasses = (hasError) => `w-full bg-slate-950/50 border ${hasError ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-emerald-500'} rounded-xl px-4 py-3 text-white outline-none transition-all focus:ring-1 focus:ring-emerald-500/20 focus:bg-slate-900 placeholder-slate-500`;
   const labelClasses = "block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2";

   return (
      <div className="w-full max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">

         <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

         <h2 className="text-2xl font-bold text-white mb-10 text-center uppercase tracking-[0.3em] relative z-10">
            Me contacter
         </h2>

         {formStatus.submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
               <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-emerald-500 text-4xl" />
               </div>
               <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Message envoyé</h3>
               <p className="text-slate-300 text-lg max-w-md leading-relaxed">Merci {formData.prenom}. Je reviens vers vous dans les plus brefs délais.</p>
            </div>
         ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

               <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4 space-y-2">
                     <label className={labelClasses}>Civilité *</label>
                     <div className="grid grid-cols-2 gap-3">
                        {['M.', 'Mme'].map((civ) => (
                           <button
                              key={civ}
                              type="button"
                              onClick={() => {
                                 setFormData({ ...formData, civilite: civ });
                                 if (errors.civilite) setErrors({ ...errors, civilite: null });
                              }}
                              className={`px-4 py-3 rounded-xl border text-sm font-bold transition-all ${formData.civilite === civ ? 'bg-emerald-500/20 border-emerald-500 text-white' : 'bg-slate-950/50 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                           >
                              {civ}
                           </button>
                        ))}
                     </div>
                     {errors.civilite && <p className="text-red-400 text-xs flex items-center gap-1 mt-2 font-medium"><FaExclamationCircle /> {errors.civilite}</p>}
                  </div>
                  <div className="md:col-span-4">
                     <label htmlFor="nom" className={labelClasses}>Nom *</label>
                     <input
                        type="text"
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className={inputClasses(errors.nom)}
                        placeholder="Nom"
                     />
                     {errors.nom && <p className="text-red-400 text-xs flex items-center gap-1 mt-2 font-medium"><FaExclamationCircle /> {errors.nom}</p>}
                  </div>
                  <div className="md:col-span-4">
                     <label htmlFor="prenom" className={labelClasses}>Prénom *</label>
                     <input
                        type="text"
                        id="prenom"
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        className={inputClasses(errors.prenom)}
                        placeholder="Prénom"
                     />
                     {errors.prenom && <p className="text-red-400 text-xs flex items-center gap-1 mt-2 font-medium"><FaExclamationCircle /> {errors.prenom}</p>}
                  </div>
               </div>

               <div>
                  <label htmlFor="email" className={labelClasses}>Email *</label>
                  <input
                     type="email"
                     id="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className={inputClasses(errors.email)}
                     placeholder="contact@mail.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs flex items-center gap-1 mt-2 font-medium"><FaExclamationCircle /> {errors.email}</p>}
               </div>

               <div>
                  <label htmlFor="message" className={labelClasses}>Message *</label>
                  <textarea
                     id="message"
                     rows="5"
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     className={`${inputClasses(errors.message)} resize-none`}
                     placeholder="Détaillez votre projet ou votre demande..."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs flex items-center gap-1 mt-2 font-medium"><FaExclamationCircle /> {errors.message}</p>}
               </div>

               <div>
                  <label className={labelClasses}>Pièce jointe</label>
                  <div
                     onClick={() => fileInputRef.current.click()}
                     className={`relative border-2 border-dashed ${fileName ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-700 hover:border-emerald-500/50 bg-slate-950/30'} rounded-xl p-8 text-center transition-all group cursor-pointer`}
                  >
                     <input
                        type="file"
                        id="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                     />
                     {!fileName ? (
                        <div className="space-y-3 pointer-events-none">
                           <FaUpload className="mx-auto text-slate-500 group-hover:text-emerald-400 transition-colors text-3xl" />
                           <p className="text-sm text-slate-300 font-medium">Cliquer pour ajouter un fichier</p>
                           <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">PDF, DOC, IMG (Max 5Mo)</p>
                        </div>
                     ) : (
                        <div className="flex items-center justify-between bg-slate-900 rounded-lg p-4 border border-slate-800/80 z-20 relative shadow-sm">
                           <div className="flex items-center gap-3 overflow-hidden">
                              <FaPaperPlane className="text-emerald-500 shrink-0" />
                              <span className="text-sm text-emerald-300 truncate font-medium">{fileName}</span>
                           </div>
                           <button type="button" onClick={resetFile} className="text-slate-500 hover:text-red-400 transition-colors p-2 hover:bg-slate-800 rounded-full"><FaTimes /></button>
                        </div>
                     )}
                  </div>
               </div>

               <div className="flex items-start">
                  <div className="flex items-center h-6">
                     <input
                        id="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-5 h-5 text-emerald-600 bg-slate-950/50 border-slate-700 rounded focus:ring-emerald-500 cursor-pointer"
                     />
                  </div>
                  <label htmlFor="consent" className="ml-3 text-xs text-slate-500 cursor-pointer select-none leading-relaxed">
                     J'accepte que mes données soient utilisées pour me recontacter suite à ma demande.
                  </label>
               </div>

               {formStatus.error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                     <FaExclamationCircle className="shrink-0 text-xl" /> {formStatus.error}
                  </div>
               )}

               <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl relative overflow-hidden group ${isSubmitting ? 'bg-slate-800 text-slate-400 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-500 hover:-translate-y-1'
                     }`}
               >
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 flex items-center gap-3">
                     {isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande'}
                     {!isSubmitting && <FaPaperPlane />}
                  </span>
               </button>
            </form>
         )}
      </div>
   );
}
