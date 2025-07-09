import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Formations from "@/components/formations/formations";
import Experiences from "@/components/experiences/experiences";

export default function About() {
    return (
        <>
            <Header />
            <main className="h-full flex-1 flex-col items-center">
                <Formations />
                <Experiences />
            </main>
            <Footer />
        </>
    );
}
