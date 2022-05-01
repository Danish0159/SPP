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
                <ModeEditOutlineOutlinedIcon style={{ color: "656565", fontSize: 35, border: "1px solid #656565", borderRadius: 50, padding: "6px" }}></ModeEditOutlineOutlinedIcon>
            </div>
            <p className="personel__title">Name</p>
            <p className="personel__subtitle">{user.user.name}</p>
            <p className="personel__title">Email</p>
            <p className="personel__subtitle">{user.user.email}</p>
            <p className="personel__title">Role</p>
            <p className="personel__subtitle">{user.user.role}</p>
            <p className="personel__title">Number</p>
            <p className="personel__subtitle">{user.profile.phoneNumber}</p>
        </div>
    )
}

export default PersonelInfo