import Hero from "../../components/hero";
import About from "../../components/about";
import Projects from "../../components/projects";
import Approach from "../../components/approach";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import { SpotlightCursor } from "../../components/ui/spotlight-cursor";

export default function Home() {
  return (
    <main className="m-0 min-h-screen w-full max-w-none overflow-x-hidden bg-black p-0">
        <SpotlightCursor
          config={{
            radius: 190,
            brightness: 0.06,
            color: "#67e8f9",
            smoothing: 0.1,
          }}
        />
        <Hero />
        <About />
        <Projects />
        <Approach />
        <Contact />
        <Footer />
    </main>
  );
}