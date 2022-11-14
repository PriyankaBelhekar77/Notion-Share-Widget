import { useState } from 'react';
import { User, SelectedUser } from '../../style/Style';
import Dropdown from '../Dropdown';
import WadeAvtar from '../../icons/avtar/WadeAvtar';

function InvitedUser({ user, index }) {
  const [accessRights, setAccessRights] = useState('');
  const getAccessRights = (access_type) => setAccessRights(access_type);

  return (
    <SelectedUser>
      <User>
        {user.type === 'user' ? (
          <WadeAvtar />
        ) : (
          <div className="group-icon">{user.name.substring(0, 1)}</div>
        )}

        <span className="user-name">{user.name}</span>
      </User>
      <Dropdown
        getAccessRights={getAccessRights}
        defaultAccessRight={
          accessRights !== '' ? accessRights : user.access_type
        }
      />
    </SelectedUser>
  );
}

export default InvitedUser;
