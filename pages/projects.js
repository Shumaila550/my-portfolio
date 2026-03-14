import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div>
      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <a href={p.link}>View</a>
        </div>
      ))}
    </div>
  );
}