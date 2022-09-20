import { IUser } from '../../context/github/GithubTypes';

const StatsProfile = ({ user }: { user: IUser }) => {
  const { location, blog, twitter_username } = user;

  return (
    <div className='stats shadow-md bg-base-200 stats-vertical lg:stats-horizontal w-full'>
      {location && (
        <div className='stat'>
          <div className='stat-title text-md'>Location</div>
          <div className='stat-value text-lg'>{location}</div>
        </div>
      )}
      {blog && (
        <div className='stat'>
          <div className='stat-title text-md'>Website</div>
          <div className='stat-value text-lg'>
            <a
              href={blog.startsWith('http') ? blog : `https://${blog}`}
              target='_blank'
              rel='noreferrer'
            >
              {blog}
            </a>
          </div>
        </div>
      )}
      {twitter_username && (
        <div className='stat'>
          <div className='stat-title text-md'>Twitter</div>
          <div className='stat-value text-lg'>
            <a
              href={`https://twitter.com/${twitter_username}`}
              target='_blank'
              rel='noreferrer'
            >
              {twitter_username}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsProfile;
