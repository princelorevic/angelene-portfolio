function ProjectCard(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.details.map((detail, index) => (
                    <li key ={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectCard;