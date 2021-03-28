import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import './header.scss';

export const Header = () => {
  return (
    <AppBar position="fixed">
      <div id="header-container">
        <header id="header-content">
          <Typography variant="h6">
            World of Whisky
          </Typography>
        </header>
      </div>
    </AppBar>
  )
}

export default Header;
