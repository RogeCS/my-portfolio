import { projectActionTypes } from './action'

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case projectActionTypes.GET_PROJECTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      }
    default:
      return state
  }
}