const skills = [
  "Learning & Development",
  "Training Needs Analysis",
  "Instructional Design",
  "Course Development",
  "Learning Assessment",
  "Training Evaluation",
  "LMS Administration",
  "KPI & Performance Tracking",
  "Training Documentation",
  "SME Coordination",
  "Digital Learning",
];

function Skills() {
  return (
    <section className="py-16 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Core Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full border border-teal-700 text-teal-700 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;