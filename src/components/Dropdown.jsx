import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import DownArrowIcon from '../icons/DownArrowIcon';

function Dropdown({ defaultAccessRight, getAccessRights }) {
  const options = ['Full access', 'Can edit', 'Can view', 'No access'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dropDownParentRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    getAccessRights(options[index]);
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <Box ref={dropDownParentRef}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<DownArrowIcon />}
        onClick={handleClick}
      >
        {defaultAccessRight}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default Dropdown;
