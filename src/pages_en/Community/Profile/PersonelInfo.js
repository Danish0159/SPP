import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Select, TextField, MenuItem, Avatar } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from "react-redux";
import { getCommunityUserEn, updateProfileEn } from '../../../features_en/profile/profileSlice';
import Spinner from "../../../components_en/Spinner";
import { styles } from '../../../Shared/Styles';
import { roles, categories, subCategories } from "../../../utils/constantsEn";

const PersonelInfo = () => {

    const [update, setUpdate] = useState(false);

    const { user, isLoading } = useSelector(
        (state) => state.profileEn
    );

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [roleEn, setRoleEn] = useState("");
    const [roleAr, setRoleAr] = useState("");
    const [categoryEn, setCategoryEn] = useState("");
    const [categoryAr, setCategoryAr] = useState("");
    const [subCategoryEn, setSubCategoryEn] = useState("");
    const [subCategoryAr, setSubCategoryAr] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyVision, setCompanyVision] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");


    // state.
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommunityUserEn());
        // eslint-disable-next-line
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.

        dispatch(
            updateProfileEn({
                id: user.profile._id,
                userName,
                email,
                roleEn,
                roleAr,
                categoryEn,
                categoryAr,
                subCategoryEn,
                subCategoryAr,
                companyName,
                companyAddress,
                companyVision,
                contactNumber,
                profilePhoto,
            })
        );

        setUpdate(false);
        // Reset form.
        setUserName("");
        setEmail("");
        setRoleEn("");
        setRoleAr("");
        setCategoryEn("");
        setCategoryAr("");
        setSubCategoryEn("");
        setSubCategoryAr("");
        setCompanyName("");
        setCompanyAddress("");
        setCompanyVision("");
        setContactNumber("");
        setProfilePhoto("");

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
                <div className="profile__updatePhoto">
                    {profilePhoto &&
                        <Avatar
                            style={{ marginBottom: "0.5rem" }}
                            src={profilePhoto}
                            sx={{ width: 90, height: 90 }}
                            alt="Avatar"
                        />
                    }
                    <input
                        type="file"
                        name="myImage"
                        style={{ width: "90px" }}
                        onChange={(event) => {

                        }}
                    />
                </div>

                <div className="profile__updateData">

                    <div>
                        <p className="card__subtitle">User Name</p>
                        <TextField
                            fullWidth
                            type="text"
                            className="update"
                            name="name"
                            inputProps={{
                                style: styles.textField,
                            }}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>


                    <div>
                        <p className="card__subtitle">Email</p>
                        <TextField
                            fullWidth
                            type="email"
                            className="update"
                            name="email"
                            inputProps={{
                                style: styles.textField,
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">Company Name</p>
                        <TextField
                            fullWidth
                            type="text"
                            name="text"
                            className="update"
                            inputProps={{
                                style: styles.desciption,
                                maxLength: 50
                            }}
                            helperText={<small className="helper">{companyName.length}/{50}</small>}
                            rows={1}
                            multiline
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">Company Address</p>
                        <TextField
                            fullWidth
                            type="text"
                            name="text"
                            className="update"
                            inputProps={{
                                style: styles.desciption,
                            }}
                            rows={1}
                            multiline
                            value={companyAddress}
                            onChange={(e) => setCompanyAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">Company Vision</p>
                        <TextField
                            fullWidth
                            type="text"
                            name="text"
                            className="update"
                            inputProps={{
                                style: styles.desciption,
                                maxLength: 200
                            }}
                            helperText={<small className="helper">{companyVision.length}/{200}</small>}
                            rows={3}
                            multiline
                            value={companyVision}
                            onChange={(e) => setCompanyVision(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">Service Role</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={roleEn}
                            onChange={(e) => {

                                let obj = roles.find(item => item.value_en === e.target.value);

                                setRoleEn(obj.value_en);
                                setRoleAr(obj.value_ar);
                                setCategoryEn("");
                                setCategoryAr("");
                                setSubCategoryEn("");
                                setSubCategoryAr("");
                            }}
                            required
                        >
                            {roles.map((role, index) => (
                                <MenuItem sx={styles.menu} key={index} value={role.value_en}>
                                    {role.value_en}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">Service Category</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={categoryEn}
                            onChange={(e) => {

                                let obj = categories[roleEn].find(item => item.value_en === e.target.value);

                                setCategoryEn(obj.value_en);
                                setCategoryAr(obj.value_ar);
                                setSubCategoryEn("");
                                setSubCategoryAr("");
                            }}
                            required
                        >
                            {categories[roleEn]?.map((user, index) => (
                                <MenuItem sx={styles.menu} key={index} value={user.value_en}>
                                    {user.value_en}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">Service Sub-Category</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            value={subCategoryEn}
                            className="update"
                            onChange={(e) => {

                                let obj = subCategories[roleEn][categoryEn].find(item => item.value_en === e.target.value);

                                setSubCategoryEn(obj.value_en);
                                setSubCategoryAr(obj.value_ar);
                            }}
                            required
                        >
                            {subCategories[roleEn][categoryEn]?.map((user, index) => (
                                <MenuItem sx={styles.menu} key={index} value={user.value_en}>
                                    {user.value_en}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">Contact Number</p>
                        <TextField
                            fullWidth
                            type="tel"
                            className="update"
                            name="number"
                            inputProps={{
                                style: styles.textField,
                                maxLength: 10
                            }}
                            value={contactNumber}
                            onChange={(e) => {

                                let regExp = /^[0-9]*$/;

                                if (regExp.test(e.target.value)) {
                                    setContactNumber(e.target.value)
                                } else {
                                    console.log("Only numbers are allowed");
                                }
                            }}
                            required
                        />
                    </div>



                    <button
                        style={{ marginTop: '2rem' }}
                        className="blue-btn card-btn"
                        type="submit"
                    >
                        UPDATE
                    </button>
                </div>
            </form>
        </Wrapper>;
    }
    else {
        return (
            <Wrapper>
                <div className='edit__div'>
                    <ModeEditOutlineOutlinedIcon onClick={() => {
                        setUpdate(true)
                        setUserName(user.user.name_en);
                        setEmail(user.user.email);
                        setRoleEn(user.profile.service_en.role);
                        setRoleAr(user.profile.service_ar.role);
                        setCategoryEn(user.profile.service_en.category);
                        setCategoryAr(user.profile.service_ar.category);
                        setSubCategoryEn(user.profile.service_en.subCategory);
                        setSubCategoryAr(user.profile.service_ar.subCategory);
                        setCompanyName(user.profile.about_en.name);
                        setCompanyAddress(user.profile.about_en.address);
                        setCompanyVision(user.profile.about_en.vision);
                        setContactNumber(user.profile.contact_en.number);
                        setProfilePhoto(user.profile.photo);

                    }} className="edit__icon"></ModeEditOutlineOutlinedIcon>
                </div>
                <div className="personel__avatar">
                    <Avatar
                        style={{ marginBottom: "4rem" }}
                        src={user?.profile.photo}
                        sx={{ width: 100, height: 100, }}
                        alt="Avatar"
                    />
                </div>

                <p className="personel__title">User Name</p>
                <p className="personel__subtitle">{user?.user.name_en}</p>

                <p className="personel__title">Email</p>
                <p className="personel__subtitle">{user?.user.email}</p>

                <p className="personel__title">Company Name</p>
                <p className="personel__subtitle">{user?.profile.about_en.name}</p>

                <p className="personel__title">Company Address</p>
                <p className="personel__subtitle">{user?.profile.about_en.address}</p>

                <p className="personel__title">Company Vision</p>
                <p className="personel__subtitle">{user?.profile.about_en.vision}</p>

                <p className="personel__title">Contact Number</p>
                <p className="personel__subtitle">{user?.profile.contact_en.number}</p>

                <p className="personel__title">Service Role</p>
                <p className="personel__subtitle">{user?.profile.service_en.role}</p>

                <p className="personel__title">Service Category</p>
                <p className="personel__subtitle">{user?.profile.service_en.category}</p>

                <p className="personel__title">Service Sub-Category</p>
                <p className="personel__subtitle">{user?.profile.service_en.subCategory}</p>

            </Wrapper>
        )
    }
}

export default PersonelInfo

const Wrapper = styled.div`

.profile__updatePhoto {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}

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

.personel__title {
    font-size: 20px;
    margin: 5px 0px;
    padding: 6px;
    font-weight: 600;
    
}

.personel__subtitle {
    font-size: 18px;
    padding: 4px;
}

`;