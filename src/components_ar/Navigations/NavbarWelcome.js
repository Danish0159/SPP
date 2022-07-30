import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo3.png";
// Logout Drop Down.
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const NavbarWelcome = () => {
  const user = getUserFromLocalStorage();
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
    dispatch(logoutUser());
    history.push("/ar");
  };

  return (
    <div className="nav__parent">
      <div className="nav__container">
        <Link className="navbar__link" to="/ar">
          <img className="navbar__logo" src={logo} alt="Logo" />
        </Link>
        {
          user ?
            <>
              <Tooltip title={<h2>إعدادت الحساب</h2>}>
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
                    <Link to="/HomeFeedar">
                      <MenuItem>
                        <HomeIcon sx={{
                          width: 30, height: 30, ml: -0.5, mr: 1, color: "rgba(0, 0, 0, 0.39)",
                        }} /> <span style={{ color: '#121212' }}>استجابة</span>
                      </MenuItem>
                    </Link>
                    <Link to="/Profilear">
                      <MenuItem>
                        <Avatar /> <span style={{ color: '#121212' }}>الملف الشخصي</span>
                      </MenuItem>
                    </Link>
                  </>
                  :
                  <Link to="/JoinUsar">
                    <MenuItem>
                      <Avatar /> <span style={{ color: '#121212' }}>إنشاء الملف الشخصي</span>
                    </MenuItem>
                  </Link>
                }
                <MenuItem onClick={onLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  تسجيل خروج
                </MenuItem>
              </Menu>
            </>
            :
            <Link to="/Loginar" className="btn-small btn-nav">
              تسجيل الدخول
            </Link>
        }
      </div>
    </div>
  );
};

export default NavbarWelcome;