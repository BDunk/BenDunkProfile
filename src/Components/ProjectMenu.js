import React from 'react';
import Menu from '@material-ui/core/Menu';

const ProjectMenu = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      variant="contained"
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {props.children}
    </Menu>
  );
};

export default ProjectMenu;
