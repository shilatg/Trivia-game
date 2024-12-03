import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './UserOptions.css'; 

const UserOptions = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-options">
      {user ? (
        <div>
          <h2>שלום, {user.username}</h2>
          <p>אתה משתמש {user.role === 'admin' ? 'מנהלי' : 'רגיל'}.</p>
          {user.role === 'admin' ? (
            <div>
              <ul>
                <li><a href="/admin/dashboard">דשבורד מנהלים</a></li>
                <li><a href="/admin/settings">הגדרות</a></li>
                <li><a href="/admin/users">ניהול משתמשים</a></li>
              </ul>
            </div>
          ) : (
            <div>
              <ul>
                <li><a href="/profile">פרופיל</a></li>
                <li><a href="/settings">הגדרות</a></li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>נא להתחבר כדי לראות את האפשרויות המותאמות אישית.</p>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
