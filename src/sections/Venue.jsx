import { Calendar, MapPin, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { COMMITTEE } from "../data/content.js";
import "./Venue.css";

export default function Venue() {
  return (
    <section id="venue" className="venue">
      <div className="container">
        <SectionHeading eyebrow="Location" title="Hosted at" accent="KPRIET, Coimbatore" />

        <div className="venue__band">
          <div className="venue__info">
            <div className="venue__row">
              <Calendar size={18} />
              <div>
                <span className="venue__label">Date</span>
                <span className="venue__value">17 August 2026 &middot; Monday</span>
              </div>
            </div>
            <div className="venue__row">
              <MapPin size={18} />
              <div>
                <span className="venue__label">Venue</span>
                <span className="venue__value">3 Parallel Technical Halls, KPRIET Campus, Coimbatore, India</span>
              </div>
            </div>
            <div className="venue__row">
              <Users size={18} />
              <div>
                <span className="venue__label">Participation</span>
                <span className="venue__value">100+ Delegates &middot; State / National / International</span>
              </div>
            </div>
          </div>
        </div>

        <div className="venue__committee">
          <h3 className="venue__committee-title">Organizing Committee</h3>
          <div className="venue__committee-grid">
            {COMMITTEE.map((m) => (
              <div className="venue__committee-card" key={m.n}>
                <span className="venue__committee-role">{m.role}</span>
                <h4>{m.n}</h4>
                <p>{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
