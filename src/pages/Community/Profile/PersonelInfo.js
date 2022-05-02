import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { FormControl, Select, TextField, MenuItem } from '@mui/material';
import { users } from "../../../utils/constants";
import CancelIcon from '@mui/icons-material/Cancel';


import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, reset } from "../../../slices/auth";
import Spinner from "../../../components/Spinner";


const PersonelInfo = () => {
    const [update, setUpdate] = useState(false);
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const [name, setName] = useState(user.user.name);
    const [email, setEmail] = useState(user.user.email);
    const [role, setRole] = useState(user.user.role);
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const [phoneNumber, setNumber] = useState(user.profile.phoneNumber);


    // state.
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            toast.success(message);
        }
        dispatch(reset());
        // eslint-disable-next-line
    }, [user, isError, isSuccess, message, dispatch]);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(role);
        console.log(phoneNumber);

        //  API CALL.
        dispatch(
            updateProfile({
                name,
                email,
                role,
                phoneNumber,
                id: user.profile._id,
            })
        );

        setUpdate(false);
        // Reset form.
        setName("");
        setEmail("");
        setRole("");
        setNumber("");
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (update) {
        return <Wrapper>
            <div className='edit__div'>
                <CancelIcon onClick={() => { setUpdate(false) }} className="edit__icon"></CancelIcon>
            </div>

            <form onSubmit={handleSubmit}>
                <p className="card__subtitle">Name</p>
                <TextField
                    fullWidth
                    type="text"
                    name="text"
                    id="Input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <p className="card__subtitle">Email</p>
                <TextField
                    fullWidth
                    type="email"
                    name="email"
                    id="Input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <p className="card__subtitle">Role</p>
                <FormControl fullWidth>
                    <Select
                        id="mui-component-select-Category"
                        value={role}
                        onChange={handleChange}
                        required
                    >
                        {users.map((user, index) => (
                            <MenuItem id="Select" key={index} value={user.value}>
                                {user.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p className="card__subtitle">Number</p>
                <TextField
                    fullWidth
                    type="number"
                    name="number"
                    id="Input"
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
                    <ModeEditOutlineOutlinedIcon onClick={() => { setUpdate(true) }} className="edit__icon"></ModeEditOutlineOutlinedIcon>
                </div>
                <p className="personel__title">Name</p>
                <p className="personel__subtitle">{user.user.name}</p>
                <p className="personel__title">Email</p>
                <p className="personel__subtitle">{user.user.email}</p>
                <p className="personel__title">Role</p>
                <p className="personel__subtitle">{user.user.role}</p>
                <p className="personel__title">Number</p>
                <p className="personel__subtitle">{user.profile.phoneNumber}</p>
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