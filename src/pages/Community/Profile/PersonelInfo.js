import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { FormControl, Select, TextField, MenuItem, Avatar } from '@mui/material';
import { users } from "../../../utils/constants";
import CancelIcon from '@mui/icons-material/Cancel';

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, reset, getCommunityUser } from "../../../slices/auth";
import Spinner from "../../../components/Spinner";
import { styles } from '../../../components/Shared/styles';

import { categories, subCategories } from "../../../utils/constants"

const PersonelInfo = () => {
    const [update, setUpdate] = useState(false);
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [photo, setPhoto] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");

    // state.
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            if (message === "Successful request") {
                return;
            }
            else {
                toast.success(message);
            }
        }

        dispatch(reset());
    }, [isError, isSuccess, message, dispatch]);

    // Get The user to display data.
    useEffect(() => {
        dispatch(getCommunityUser());
    }, [])
    // Reset after getting user.
    useEffect(() => {
        if (user) {
            dispatch(reset());
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.
        console.log({
            photo,
            name,
            email,
            phoneNumber,
            role,
            category,
            subCategory,
            id: user.profile._id,
        });

        dispatch(
            updateProfile({
                photo,
                name,
                email,
                phoneNumber,
                role,
                category,
                subCategory,
                id: user.profile._id,
            })
        );

        setUpdate(false);
        // Reset form.
        setName("");
        setEmail("");
        setRole("");
        setNumber("");
        setPhoto("");
        setCategory("");
        setSubCategory("");
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (update) {
        return <Wrapper>
            <div className='edit__div'>
                <CancelIcon onClick={() => { setUpdate(false); }} className="edit__icon"></CancelIcon>
            </div>

            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {photo &&
                        <Avatar
                            style={{ marginBottom: "0rem", marginRight: ".3rem" }}
                            src={photo}
                            sx={{ width: 90, height: 90 }}
                            alt="Avatar"
                        />
                    }
                    <input
                        type="file"
                        name="myImage"
                        style={{ marginLeft: "1.4rem" }}
                        onChange={(event) => {
                            var file = event.target.files[0];
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                setPhoto(event.target.result);
                            };
                            reader.readAsDataURL(file);
                        }}
                    />
                </div>

                <p className="card__subtitle">Company Name</p>
                <TextField
                    fullWidth
                    type="text"
                    name="text"
                    inputProps={{
                        style: styles.textField,
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <p className="card__subtitle">Email</p>
                <TextField
                    fullWidth
                    type="email"
                    name="email"
                    inputProps={{
                        style: styles.textField,
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <p className="card__subtitle">Role</p>
                <FormControl fullWidth>
                    <Select
                        sx={styles.select}
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setCategory("");
                            setSubCategory("");
                        }}
                        required
                    >
                        {users.map((user, index) => (
                            <MenuItem sx={styles.menu} key={index} value={user.value}>
                                {user.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p className="card__subtitle">Category</p>
                <FormControl fullWidth>
                    <Select
                        sx={styles.select}
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setSubCategory("");
                        }}
                        required
                    >
                        {categories[role]?.map((user, index) => (
                            <MenuItem sx={styles.menu} key={index} value={user.value}>
                                {user.value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p className="card__subtitle">Sub-Category</p>
                <FormControl fullWidth>
                    <Select
                        sx={styles.select}
                        value={subCategory}
                        onChange={(e) => { setSubCategory(e.target.value); }}
                        required
                    >
                        {subCategories[role][category]?.map((user, index) => (
                            <MenuItem sx={styles.menu} key={index} value={user.value}>
                                {user.value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p className="card__subtitle">Contact Number</p>
                <TextField
                    fullWidth
                    type="number"
                    name="number"
                    inputProps={{
                        style: styles.textField,
                    }}
                    value={phoneNumber}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <button
                    style={{ marginTop: '2rem' }}
                    className="blue-btn card-btn"
                    type="submit"
                >
                    UPDATE
                </button>
            </form>
        </Wrapper>;
    }
    else {
        return (
            <Wrapper>
                <div className='edit__div'>
                    <ModeEditOutlineOutlinedIcon onClick={() => {
                        setUpdate(true)
                        setName(user.user.name);
                        setEmail(user.user.email);
                        setRole(user.user.role);
                        setNumber(user.profile.phoneNumber);
                        setPhoto(user.profile.profilePhoto);
                        setCategory(user.profile.category);
                        setSubCategory(user.profile.subCategory);
                    }} className="edit__icon"></ModeEditOutlineOutlinedIcon>
                </div>
                <Avatar
                    style={{ marginBottom: "3rem" }}
                    src={user?.profile.profilePhoto}
                    sx={{ width: 110, height: 110 }}
                    alt="Avatar"
                />
                <p className="personel__title">Name</p>
                <p className="personel__subtitle">{user?.user.name}</p>
                <p className="personel__title">Email</p>
                <p className="personel__subtitle">{user?.user.email}</p>
                <p className="personel__title">Number</p>
                <p className="personel__subtitle">{user?.profile.phoneNumber}</p>
                <p className="personel__title">Role</p>
                <p className="personel__subtitle">{user?.user.role}</p>
                <p className="personel__title">Category</p>
                <p className="personel__subtitle">{user?.profile.category}</p>
                <p className="personel__title">Sub-Category</p>
                <p className="personel__subtitle">{user?.profile.subCategory}</p>
            </Wrapper>
        )
    }
}

export default PersonelInfo

const Wrapper = styled.div`
.edit__div{
    display:flex;
    align-items:center;
    margin-bottom:7px;
    padding-bottom:0px;
    justify-content:flex-end;
}
.edit__icon{
    color: #656565;
    font-size: 35px;
    border: 1px solid #656565;
    border-radius:50px;
    margin: .4rem 0rem;
    padding: 6px;
    cursor: pointer;
}
`;