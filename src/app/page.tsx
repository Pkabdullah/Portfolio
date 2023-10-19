import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Project from "./components/projects";
import Skills from "./components/skills";


export default function hello() {
  return (
    <div >
      <Hero />
      <About />
      <Skills/>
      <Project />
      <Contact />

    </div>
  )
}