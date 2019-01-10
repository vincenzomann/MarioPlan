import React from 'react';
import ProjectSummary from './ProjectSummary'

// grab projects property passed in as props
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {/* if there are projects cycle through projects and output a summary for each one */}
            { projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList;