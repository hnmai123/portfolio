import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Section from "@/components/sections/Section";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div>
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
    </div>
  );
}
