import axios from 'axios';
import { IRepo, IUser } from './GithubTypes';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Connect to github api
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Search users
export const searchUsers = async (text:string) => {
  const res = await github.get(`search/users?q=${text}`);
  return res.data.items;
};

// Get user data and repos
export const getUserAndRepos = async (login: string) : Promise<{
    user: IUser;
    repos: IRepo[];
}> => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const [user, repos] = await Promise.all([
    github.get(`users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
