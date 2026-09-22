import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Sales Velocity Training - Foundational and Advanced",
    details: [
      "Supported the development and implementation of structured sales learning programs for new hires and selected non-quota sales employees.",
      "Developed a self-paced learning platform containing multiple courses, pre-assessments, learning activities, and mastery-based progression.",
      "Created assessment and KPI frameworks to connect learning outcomes with measurable sales performance.",
    ],
  },
  {
    title: "Product & Industry Training / Virtual Buddy & SME Program",
    details: [
      "Developed a training approach that captures practical knowledge and selling strategies from high-performing internal Subject Matter Experts.",
      "Supported the identification and nomination of SMEs based on demonstrated product and industry expertise.",
    ],
  },
  {
    title: "Sales Onboarding Training",
    details: [
      "Converted existing in-house sales videos into a structured onboarding learning path for new hires, organizing content into courses, assessments, and guided learning activities.",
    ],
  },
];

function Projects() {
  return (
    <section className="py-16 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} details={project.details} />
      ))}
    </section>
  );
}

export default Projects;