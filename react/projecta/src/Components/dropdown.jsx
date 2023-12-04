import React, { useState } from 'react';

function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>Menu</button>
      {showMenu && (
        <ul>
          <li>
            <button onClick={toggleSubMenu}>Submenu</button>
            {showSubMenu && (
              <ul>
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
                <li>Submenu Item 3</li>
              </ul>
            )}
          </li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;


