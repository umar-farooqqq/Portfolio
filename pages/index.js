import Header from "@/components/Header";
import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen">
      <Header />
      <About />
      <Projects />
    </div>
  );
}
