export const createProject = (project) => {
  // return {
  //   type: 'ADD_PROJECT',
  //   project: project // <-- the state passed from component
  // }
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    // add project to firestore collection
    firestore.collection('projects').add({
      ...project, //project title and content
      authorFirstName: 'Vincenzo',
      authorLastName: 'Mann',
      authorID: 64,
      createdAt: new Date()
    }).then( () => {
      dispatch({ 
        type: 'CREATE_PROJECT', 
        project
      })
    }).catch( (err) => {
      dispatch({ 
        type: 'CREATE_PROJECT_ERROR', 
        err
      })
    })
    
  }
};
