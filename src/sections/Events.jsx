import SectionHeading from "../components/SectionHeading.jsx";
import { EVENTS } from "../data/content.js";
import "./Events.css";

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="container">
        <SectionHeading
          eyebrow="Proposed Events"
          title="One Dialogue,"
          accent="Three Competitions"
          sub="A fireside-style guest lecture opens the day, followed by three flagship tracks judged by the international jury panel."
        />
        <div className="events__grid">
          {EVENTS.map((ev) => (
            <div className="events__card" key={ev.title}>
              <span className="events__kind">{ev.kind}</span>
              <h3>{ev.title}</h3>
              <p>{ev.text}</p>
              <div className="events__people">
                <span className="events__people-label">{ev.label}</span>
                {ev.people.map((p) => (
                  <div key={p.n} className="events__person">
                    <strong>{p.n}</strong>
                    <span>{p.a}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
