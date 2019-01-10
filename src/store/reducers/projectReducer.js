const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam error dignissimos distinctio non id ex sequi et, quibusdam at tempora voluptate praesentium suscipit hic ipsa, atque doloribus nesciunt a!'},
    {id: '2', title: 'collect all the stars', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam error dignissimos distinctio non id ex sequi et, quibusdam at tempora voluptate praesentium suscipit hic ipsa, atque doloribus nesciunt a!'},
    {id: '3', title: 'egg hunt with yoshi', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam error dignissimos distinctio non id ex sequi et, quibusdam at tempora voluptate praesentium suscipit hic ipsa, atque doloribus nesciunt a!'}
  ]
}

const projectReducer = (state = initState, action) => {
  // handle the dispatch actions
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default: 
      return state;
  }
}

export default projectReducer;