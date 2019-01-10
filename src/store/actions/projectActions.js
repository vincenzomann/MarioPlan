export const createProject = (project) => {
  // return {
  //   type: 'ADD_PROJECT',
  //   project: project // <-- the state passed from component
  // }
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    dispatch({ 
      type: 'CREATE_PROJECT', 
      project
    })
  }
};
