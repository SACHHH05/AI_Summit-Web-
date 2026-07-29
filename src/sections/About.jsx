import SectionHeading from "../components/SectionHeading.jsx";
import { OBJECTIVES } from "../data/content.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeading
          eyebrow="About the Summit"
          title="Objectives of the"
          accent="Event"
          sub="Organized by the Department of CSE (AI & ML), KPRIET — a one-day symposium built around six clear goals."
        />
        <div className="about__grid">
          {OBJECTIVES.map((o) => (
            <div className="about__card" key={o.title}>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
