import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { User } from '../../style/Style';

function DisplayGroups({ groups, handleUserOrGroupClick }) {
  return (
    <Box sx={{ width: '100%' }}>
      <span>Select a group</span>
      {groups.map((group) => (
        <User
          onClick={() => handleUserOrGroupClick(group)}
          key={`selected_${group.id}`}
        >
          <div className="group-icon">{group.name.substring(0, 1)}</div>
          <span className="user-name">{group.name}</span>
        </User>
      ))}
    </Box>
  );
}

DisplayGroups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    additional_info: PropTypes.string,
    type: PropTypes.string,
    accessType: PropTypes.string,
  })).isRequired,
  handleUserOrGroupClick: PropTypes.func.isRequired,
};

export default DisplayGroups;
