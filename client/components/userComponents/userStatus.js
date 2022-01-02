import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import UserDbService from '../../services/userDbService';

const UserStatus = ({ userHandler, userName, setIsLogin }) => {
  const signOutHandler = () => {
    UserDbService.logout();
    setIsLogin(false);
    userHandler();
  };

  return (
    <div className='user_status'>
      <div className='status_block block_line'>
        <div className='starus_user_name'>Hello, {userName}</div>
      </div>
      <div className='status_block'>
        <Link to='/'>
          <button className='user_btn' onClick={signOutHandler}>
            Sign out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserStatus;
