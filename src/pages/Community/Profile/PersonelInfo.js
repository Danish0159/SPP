import React from 'react'
import { useSelector } from "react-redux";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const PersonelInfo = () => {
    const { user } = useSelector(
        (state) => state.auth
    );
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "22px", justifyContent: "flex-end", borderBottom: "1px solid #dce1e8", paddingBottom: "12px", cursor: "pointer" }}>
                {/* <p className="card__subtitle">Account</p> */}
                <ModeEditOutlineOutlinedIcon style={{ color: "656565", fontSize: 35, border: "1px solid #656565", borderRadius: 50, padding: "6px" }}></ModeEditOutlineOutlinedIcon>
            </div>
            <p className="personel__title">Name</p>
            <p className="personel__subtitle">{user.name}</p>
            <p className="personel__title">Email</p>
            <p className="personel__subtitle">JhonDoe@gmail.com</p>
            <p className="personel__title">Role</p>
            <p className="personel__subtitle">{user.role}</p>
            <p className="personel__title">Number</p>
            <p className="personel__subtitle">{user.userProfile.phoneNumber}</p>
        </div>
    )
}

export default PersonelInfo