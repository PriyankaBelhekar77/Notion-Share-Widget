import { useState } from 'react';
import PropTypes from 'prop-types';
import { User, SelectedUser } from '../../style/Style';
import Dropdown from '../Dropdown';
import WadeAvtar from '../../icons/avtar/WadeAvtar';

function InvitedUser({ user }) {
  const [accessRights, setAccessRights] = useState('');
  const getAccessRights = (accessType) => setAccessRights(accessType);

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
          accessRights !== '' ? accessRights : user.accessType
        }
      />
    </SelectedUser>
  );
}

InvitedUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    accessType: PropTypes.string.isRequired,
  }).isRequired,
};

export default InvitedUser;
