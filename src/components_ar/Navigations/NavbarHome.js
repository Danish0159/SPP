import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo3.png";
import styled from "styled-components";
import { Contractors, Handymen, Designers, Consultants } from '../GuestFlow/HomePage/categoriesData';
import SearchIcon from '@mui/icons-material/Search';
import noDataFound from '../../images/ndf.jpg';
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

const NavbarHome = ({ setCategoriesDataH, setCategoriesDataC, setCategoriesDataD, setCategoriesDataCF }) => {

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
    <Wrapper>

      <div className='navbar'>

        <Link to="/ar">
          <img className="navbar-logo" src={logo} alt="Logo" />
        </Link>

        <div className='navbar-search'>
          <input
            className='search-input'
            type="text"
            placeholder='فئة البحث'
            onChange={(e) => {

              let updatedDataH = Handymen.filter((val) => {
                if (e.target.value === "") {
                  return val;
                }
                else if (e.target.value.length === 1 ? val.name.value_ar.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.value_ar.toLowerCase().includes(e.target.value.toLowerCase())) {
                  return val;
                }
                return false;
              });

              let updatedDataC = Contractors.filter((val) => {
                if (e.target.value === "") {
                  return val;
                }
                else if (e.target.value.length === 1 ? val.name.value_ar.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.value_ar.toLowerCase().includes(e.target.value.toLowerCase())) {
                  return val;
                }
                return false;
              });

              let updatedDataD = Designers.filter((val) => {
                if (e.target.value === "") {
                  return val;
                }
                else if (e.target.value.length === 1 ? val.name.value_ar.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.value_ar.toLowerCase().includes(e.target.value.toLowerCase())) {
                  return val;
                }
                return false;
              });

              let updatedDataCF = Consultants.filter((val) => {
                if (e.target.value === "") {
                  return val;
                }
                else if (e.target.value.length === 1 ? val.name.value_ar.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.value_ar.toLowerCase().includes(e.target.value.toLowerCase())) {
                  return val;
                }
                return false;
              });


              if (updatedDataH.length === 0) {
                setCategoriesDataH([{
                  img: noDataFound,
                  name: {
                    value_ar: "لاتوجد بيانات",
                    value_en: "لاتوجد بيانات"
                  },
                  subCategories: [
                    {
                      value_ar: "لاتوجد بيانات",
                      value_en: "لاتوجد بيانات"
                    }
                  ]
                }])
              }
              else {
                setCategoriesDataH(updatedDataH);
              }

              if (updatedDataC.length === 0) {
                setCategoriesDataC([{
                  img: noDataFound,
                  name: {
                    value_ar: "لاتوجد بيانات",
                    value_en: "لاتوجد بيانات"
                  },
                  subCategories: [
                    {
                      value_ar: "لاتوجد بيانات",
                      value_en: "لاتوجد بيانات"
                    }
                  ]
                }])
              }
              else {
                setCategoriesDataC(updatedDataC);
              }

              if (updatedDataD.length === 0) {
                setCategoriesDataD([{
                  img: noDataFound,
                  name: {
                    value_ar: "لاتوجد بيانات",
                    value_en: "لاتوجد بيانات"
                  },
                  subCategories: [
                    {
                      value_ar: "لاتوجد بيانات",
                      value_en: "لاتوجد بيانات"
                    }
                  ]
                }])
              }
              else {
                setCategoriesDataD(updatedDataD);
              }

              if (updatedDataCF.length === 0) {
                setCategoriesDataCF([{
                  img: noDataFound,
                  name: {
                    value_ar: "لاتوجد بيانات",
                    value_en: "لاتوجد بيانات"
                  },
                  subCategories: [
                    {
                      value_ar: "لاتوجد بيانات",
                      value_en: "لاتوجد بيانات"
                    }
                  ]
                }])
              }
              else {
                setCategoriesDataCF(updatedDataCF);
              }
            }}
          />
          <SearchIcon className='search-icon'></SearchIcon>
        </div>


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
            <Link to="/Loginar" className="btn-small">
              تسجيل الدخول
            </Link>
        }
      </div>
    </Wrapper >
  );
};

export default NavbarHome;

const Wrapper = styled.section`

  input[type="text"]::placeholder {  
                  
  font-size: 25px; 
} 

.navbar {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  font-size: 3rem;
  background-color: #424d83;
}

.navbar-logo {
  height: 70px;
  width: 145px;
}

.navbar-search {
  font-size: 2rem;
  color:rgb(120, 116, 116); 
  font-weight: 600;
  border: none;
}

@media only screen and (max-width: 950px) {
  
  .navbar-search {
    display: none;
  }

  .navbar {
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    font-size: 3rem;
    background-color: #424d83;
  }
  
  
}

.search-input {
  padding: 0px 15px;
  height: 45px;
  width: 300px;
  border-radius: 25px;
  border: none;
}





.search-icon {
  color: rgb(120, 116, 116);
  transform: scale(1.9);
  margin-right: -3.13rem; 
}

`;