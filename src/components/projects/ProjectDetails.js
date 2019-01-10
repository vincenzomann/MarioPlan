import React from 'react';

const ProjectDetails = (props) => {

    // route parameter id
    const id = props.match.params.id;

  return (
    <div className="container section">
        <div className="card z-depth-0">

            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate at sint ipsa nesciunt veniam exercitationem deserunt quisquam iure voluptatum esse, magni delectus dignissimos repellendus aperiam quaerat, ad ipsum autem.</p>
            </div>

            <div className="card-action grey lighten-4 gey-text">
                <div>Posted by Vincenzo Mann</div>
                <div>10th January, 3pm</div>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectDetails;
