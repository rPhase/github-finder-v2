import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';
import { searchUsers } from '../../context/github/GithubActions';
import { GHActionTypes } from '../../context/github/GithubReducer';

const UserSearch = () => {
  const [text, setText] = useState('');
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') {
      setAlert('Please enter something', 'error');
      return;
    }
    dispatch({ type: GHActionTypes.SET_LOADING });
    const users = await searchUsers(text);
    dispatch({ type: GHActionTypes.SEARCH_USERS, payload: users });
    setText('');
  };

  const clearUsersHandler = () => {
    dispatch({ type: GHActionTypes.CLEAR_USERS });
    setAlert('Cleared Users.', 'success');
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                onChange={onChangeHandler}
                value={text}
              />

              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clearUsersHandler}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
