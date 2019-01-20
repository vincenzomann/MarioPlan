import React from 'react';
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'


// grab projects property passed in as props
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {/* if there are projects cycle through projects and output a summary for each one */}
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;