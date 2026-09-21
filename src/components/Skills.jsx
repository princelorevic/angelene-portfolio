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
    <section>
      <h2>Core Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;