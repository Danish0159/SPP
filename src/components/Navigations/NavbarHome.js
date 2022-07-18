import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo3.png";
import styled from "styled-components";
import { pakCities, saudiCities } from '../../utils/constants';
import axios from "axios";
// Logout Drop Down.
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { logout, reset } from "../../slices/auth";
import { useDispatch } from "react-redux";

const NavbarHome = ({ country, city, setCountry, setCity, }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    history.push("/");
  };

  // Location API.
  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((response) => {
      axios.get(`https://api.ipfind.com/?ip=${response.data.ip}`).then((response) => {
        setCountry(response.data.country);
        setCity(response.data.city);
      })
    })
  }, [])
  return (
    <Wrapper>
      <div className="nav__parent">
        <div className="nav__container nav__container--home">
          {/* Logo. */}
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="Logo" />
          </Link>

          <div className='navbar-dropdown'>
            <select onChange={(e) => { setCountry(e.target.value) }}>
              <option hidden>{country}</option>
              <option>Pakistan</option>
              <option>Saudi Arabia</option>
            </select>
          </div>

          <div className='navbar-dropdown'>
            <select onChange={(e) => { setCity(e.target.value) }}>
              <option hidden>{city}</option>
              <option disabled>none</option>
              {country === "Pakistan"
                ? pakCities.map((item, index) => (
                  <option key={index}>
                    {item}
                  </option>
                ))
                : country === "Saudi Arabia" ? saudiCities.map((item, index) => (
                  <option key={index}>
                    {item}
                  </option>
                )) : null}

            </select>
          </div>
          {
            user ?
              <>
                <Tooltip title={<h2>Account Settings</h2>}>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 47, height: 47 }}></Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 30,
                        height: 30,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {user.profile ?
                    <>
                      <Link to="/HomeFeed">
                        <MenuItem>
                          <HomeIcon sx={{
                            width: 30, height: 30, ml: -0.5, mr: 1, color: "rgba(0, 0, 0, 0.39)",
                          }} /> <span style={{ color: '#121212' }}>Feed</span>
                        </MenuItem>
                      </Link>
                      <Link to="/Profile">
                        <MenuItem>
                          <Avatar /> <span style={{ color: '#121212' }}>Profile</span>
                        </MenuItem>
                      </Link>
                    </>
                    :
                    <Link to="/JoinUs">
                      <MenuItem>
                        <Avatar /> <span style={{ color: '#121212' }}>Profile Creation</span>
                      </MenuItem>
                    </Link>
                  }
                  <MenuItem onClick={onLogout}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
              :
              <Link to="/Login" className="btn-small btn-nav">
                Login
              </Link>
          }
        </div>
      </div>
    </Wrapper >
  );
};

export default NavbarHome;

const Wrapper = styled.section`
.navbar-dropdown {
    font-weight: 700;
    font-size: 3rem;
    color: white;
}
.navbar-dropdown select {
  background: none;
  border: none;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  width: 210px;
  text-align: center;
}
.navbar-dropdown select option {
    color: black;
    width: 100%;
    font-size: 2.2rem;
    text-align: center;
}

// OverRididng Index.css (Navigation Styling).
@media only screen and (max-width: 850px) {
  .nav__container--home {
    flex-direction: column;
  }
  .nav__container--home>.btn-nav {
    align-self: center;
    margin-top: .8rem;
  }
.navbar-dropdown select {
  font-size: 1.9rem;
  width: 150px;
}
}
`;