import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <a href={p.link}>View Project</a>
        </div>
      ))}

    </section>
  );
}