import React from 'react'
import { PageHeader } from '@workday/canvas-kit-react';

import './header.scss';

export const Header = () => {
  return (
    <div id="header-container">
      <header id="header-content">
        <PageHeader title="Wonderful World of Whisky" />
      </header>
    </div>
  )
}

export default Header;
