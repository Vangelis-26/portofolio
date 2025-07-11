import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Formations from "@/components/formations/formations";
import Experiences from "@/components/experiences/experiences";
import Cv from "@/components/cv/cv";

export default function About() {
    return (
        <>
            <Header />
            <main className="relative flex-grow flex flex-col items-center py-16 px-4">

                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold">Mon Parcours</h1>
                    <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
                        De la gestion de projet à la programmation, découvrez le parcours qui a forgé ma double compétence, technique et commerciale.
                    </p>
                </section>

                <div className="w-full max-w-4xl">
                    <Formations />
                </div>

                <div className="w-full max-w-4xl mt-16">
                    <Experiences />
                </div>

                <div className="sticky bottom-8 w-full flex justify-end pr-8 z-40 pointer-events-none">
                    <div className="pointer-events-auto">
                        <Cv />
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
