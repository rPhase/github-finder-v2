import React, { createContext, useReducer } from 'react';
import { Dispatch } from 'react';
import githubReducer, { GithubAction } from './GithubReducer';
import { IRepo, IUser, IUserItem } from './GithubTypes';

export interface IGithubContext {
  users: IUserItem[];
  user: IUser | null;
  repos: IRepo[];
  loading: boolean;
  dispatch: Dispatch<GithubAction>;
}

const initialState: IGithubContext = {
  users: [],
  user: null,
  repos: [],
  loading: false,
  dispatch: () => {},
};

const GithubContext = createContext(initialState);

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
