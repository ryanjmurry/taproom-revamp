import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Menu compact>
        <Menu.Item>
          <Link to='/taplist'>TapList</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/admin'>Admin</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Nav;
