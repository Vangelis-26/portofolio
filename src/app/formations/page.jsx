import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function About() {
    return (
        <>
            <Header />
            <main className="h-full flex-1 flex-col items-center">
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <h1 className="text-3xl font-bold mb-4">À propos de moi</h1>
                    <p className="text-lg text-center max-w-2xl">
                        Je suis Mourier Matthieu, un développeur web passionné par la création de sites et d'applications web modernes. J'aime relever des défis techniques et apprendre de nouvelles technologies pour améliorer mes compétences.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
