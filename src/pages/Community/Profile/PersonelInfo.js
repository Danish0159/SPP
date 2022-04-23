import React from 'react'
import { useSelector } from "react-redux";

const PersonelInfo = () => {
    const { single_user } = useSelector(
        (state) => state.users
    );
    if (single_user.data) {
        return (
            <div>
                <p className="personel__title">Name</p>
                <p className="personel__subtitle">{single_user.data.user.user.name}</p>
                <p className="personel__title">Email</p>
                <p className="personel__subtitle">JhonDoe@gmail.com</p>
                <p className="personel__title">Role</p>
                <p className="personel__subtitle">{single_user.data.user.user.role}</p>
                <p className="personel__title">Number</p>
                <p className="personel__subtitle">{single_user.data.user.phoneNumber}</p>
            </div>
        )
    }
    return null;
}

export default PersonelInfo