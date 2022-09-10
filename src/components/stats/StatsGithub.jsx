import React from 'react';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Stats = ({ user }) => {
  const { followers, following, public_repos, public_gists } = user;
  return (
    <>
      <div className='py-5 rounded-lg shadow-md bg-base-200 stats stats-vertical lg:stats-horizontal w-full md:w-auto lg:w-full'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUsers className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title'>Followers</div>
          <div className='stat-value'>{followers}</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUserFriends className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title'>Following</div>
          <div className='stat-value'>{following}</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaCodepen className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title'>Public Repos</div>
          <div className='stat-value'>{public_repos}</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaStore className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title'>Public Gists</div>
          <div className='stat-value'>{public_gists}</div>
        </div>
      </div>
    </>
  );
};

Stats.propTypes = {
  user: PropTypes.object,
};

export default Stats;
