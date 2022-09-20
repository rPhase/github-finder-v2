import { Link } from 'react-router-dom';
import { IUserItem } from '../../context/github/GithubTypes';

const UserItem = ({ user: { login, avatar_url } }: { user: IUserItem }) => {
  return (
    <div className='card shadow-md compact side bg-base-200'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full shadow w-14 h-14'>
            <img src={avatar_url} alt='Profile' />
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
