import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";

export default function Home() {
  return (
    <>
      <main className="h-full flex-1 flex-col items-center">
        <Intro />
      </main>
    </>
  );
}
