function ProjectCard(props) {
  return (
    <div className="border-l-2 border-teal-700 pl-5 mb-8">
      <h3 className="text-lg font-semibold text-slate-900">{props.title}</h3>
      <ul className="mt-2 space-y-1">
        {props.details.map((detail, index) => (
          <li key={index} className="text-slate-600 text-sm leading-relaxed">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;