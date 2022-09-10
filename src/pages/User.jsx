import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import RepoList from '../components/repos/RepoList';
import { getUserAndRepos } from '../context/github/GithubActions';
import StatsGithub from '../components/stats/StatsGithub';
import StatsProfile from '../components/stats/StatsProfile';

const User = () => {
  const { dispatch, user, loading, repos } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);

  const { name, type, avatar_url, bio, login, html_url, hireable } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        {/* Button Link back to search */}
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          {/* Profile Image */}
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt={login} />
              </figure>
            </div>
          </div>

          {/* Name, Description, Github Profile Button */}
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}
                <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{login}</p>
              <br />
              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-4 mb-6'>
          <StatsProfile user={user} />
          <StatsGithub user={user} />
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
