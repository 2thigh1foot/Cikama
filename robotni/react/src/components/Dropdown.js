import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

// Preloaded styles for drop down menu 
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
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
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Triggers Menu Opening 
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    console.log(e);
  };

  // Handles Menu Item Clicks to navigate to corresponding pages
  // TODO 
  const handleNav = e => {
    // setAnchorEl(event.currentTarget);
    // e.stopPropagation();
    console.log(e);
  };

  //Triggers Drop Down Menu Close 
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        <StyledMenuItem>
          <ListItemText onClick={handleNav()} primary="Home" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText onClick={handleNav()} primary="Plants" />
        </StyledMenuItem>
        
        <StyledMenuItem onClick={handleNav()}>
          <ListItemText primary="Account" />
        </StyledMenuItem>
        
        <StyledMenuItem onClick={handleNav()}>
          <ListItemText primary="Log Out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
