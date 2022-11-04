import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function AppBar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <div className="overall-parent-container">
      <div className="parent1">
        <div className="child1">
          <IconButton>
            <MenuIcon className="hambuger-icon" />
          </IconButton>
        </div>
        <div className="child2">
          <p className="company-name">
            <span>intimates</span> store
          </p>
        </div>
        <div className="child3">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search Products Here"
              className="search-input-text"
            />
            <button type="submit" className="search-submit-cta">
              <SearchIcon className="search-query-submit-btn" />
            </button>
          </div>
        </div>
      </div>
      <div className="parent2">
        <div className="child4">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon className="cart-icon" />
            </StyledBadge>
          </IconButton>
        </div>
        <div className="child5">
          <IconButton>
            <AccountCircleIcon className="avatar" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
