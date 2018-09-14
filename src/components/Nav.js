import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Menu compact>
        <Menu.Item>
          <Link to='/'>TapList</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='newtap'>New Tap</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Nav;
