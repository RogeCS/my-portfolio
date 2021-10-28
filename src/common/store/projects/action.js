export const projectActionTypes = {
  GET_PROJECTS: 'GET_PROJECTS',
}

export const fetchProjects = (projects) => (dispatch) => {
  return dispatch({
    type: projectActionTypes.GET_PROJECTS,
    payload: projects,
  });
}