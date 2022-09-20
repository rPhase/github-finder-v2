export interface IUser {
  name: string;
  type: string;
  avatar_url: string;
  bio: string;
  login: string;
  html_url: string;
  hireable: boolean;
  location: string;
  blog: string;
  twitter_username: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  [key: string]: any;
}

export interface IRepo {
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issues: number;
  watchers_count: number;
  stargazers_count: number;
  [key: string]: any;
}

export interface IUserItem {
  login: string;
  avatar_url: string;
  [key: string]: any;
}
