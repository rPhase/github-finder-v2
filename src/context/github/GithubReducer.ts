import { IGithubContext } from "./GithubContext";
import { IRepo, IUser } from "./GithubTypes";




export enum GHActionTypes {
  GET_USER_AND_REPOS = 'GET_USER_AND_REPOS',
  SEARCH_USERS = 'SEARCH_USERS',
  CLEAR_USERS = 'CLEAR_USERS',
  SET_LOADING = 'SET_LOADING'
}



interface GET_USER_AND_REPOS {
  type: GHActionTypes.GET_USER_AND_REPOS;
  payload: {
    user: IUser
    repos: IRepo[]
  }
}

interface SEARCH_USERS {
  type: GHActionTypes.SEARCH_USERS;
  payload?: any;
}

interface CLEAR_USERS {
  type: GHActionTypes.CLEAR_USERS
  payload?: any;
}

interface SET_LOADING {
  type: GHActionTypes.SET_LOADING
  payload?: any;
}

export type GithubAction = GET_USER_AND_REPOS | SEARCH_USERS | CLEAR_USERS | SET_LOADING

const githubReducer = (state: IGithubContext, action:GithubAction) => {
  switch (action.type) {
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
