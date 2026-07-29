import { GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { JURY } from "../data/content.js";
import "./Jury.css";

export default function Jury() {
  return (
    <section id="jury" className="jury">
      <div className="container">
        <SectionHeading
          eyebrow="Distinguished Panel"
          title="International"
          accent="Jury & Speakers"
          sub="Student work evaluated by experts drawn from leading global universities and industry."
        />
        <div className="jury__grid">
          {JURY.map((j) => {
            const Icon = j.r.toLowerCase().includes("technology") ? Briefcase : GraduationCap;
            return (
              <div className="jury__card" key={j.n}>
                <div className="jury__icon">
                  <Icon size={26} />
                </div>
                <h3>{j.n}</h3>
                <span className="jury__role">{j.r}</span>
                <span className="jury__aff">{j.a}</span>
                <span className="jury__tag">{j.tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
