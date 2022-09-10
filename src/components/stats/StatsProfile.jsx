import React from 'react';
import PropTypes from 'prop-types';

const StatsProfile = ({ user }) => {
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

  // return (
  //   <>
  //     <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
  //       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
  //         {location && (
  //           <div className='stat'>
  //             <div className='stat-title text-md'>Location</div>
  //             <div className='text-lg stat-value'>{location}</div>
  //           </div>
  //         )}

  //         {blog && (
  //           <div className='stat'>
  //             <div className='stat-title text-md'>Website</div>
  //             <div className='text-lg stat-value'>
  //               <a
  //                 href={blog.startsWith('http') ? blog : `https://${blog}`}
  //                 target='_blank'
  //                 rel='noreferrer'
  //               >
  //                 {blog}
  //               </a>
  //             </div>
  //           </div>
  //         )}

  //         {twitter_username && (
  //           <div className='stat'>
  //             <div className='stat-title text-md'>Twitter</div>
  //             <div className='text-lg stat-value'>
  //               <a
  //                 href={`https://twitter.com/${twitter_username}`}
  //                 target='_blank'
  //                 rel='noreferrer'
  //               >
  //                 {blog}
  //               </a>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // );
};

StatsProfile.propTypes = {
  user: PropTypes.object,
};

export default StatsProfile;
