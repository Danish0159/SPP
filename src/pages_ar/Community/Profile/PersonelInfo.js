import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Spinner from "../../../components_ar/Spinner";
import { styles } from '../../../Shared/Styles';
import { roles, categories, subCategories } from "../../../utils/constantsAr";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityUserAr, updateProfileAr } from '../../../features_ar/profile/profileSlice';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Select, TextField, MenuItem, Avatar } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const PersonelInfo = () => {

    const [update, setUpdate] = useState(false);

    const { user, isLoading, } = useSelector(
        (state) => state.profileAr
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
        dispatch(getCommunityUserAr());
        // eslint-disable-next-line
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.

        dispatch(
            updateProfileAr({
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
                        <p className="card__subtitle">اسم االمستخدم</p>
                        <TextField
                            fullWidth
                            className="update"
                            type="text"
                            name="text"
                            inputProps={{
                                style: styles.textField,
                            }}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">البريد الإلكتروني</p>
                        <TextField
                            fullWidth
                            className="update"
                            type="email"
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
                        <p className="card__subtitle">اسم الشركة</p>
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
                        <p className="card__subtitle">عنوان الشركة</p>
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
                        <p className="card__subtitle">رؤية الشركة</p>
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
                        <p className="card__subtitle">دور الخدمة</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={roleAr}
                            onChange={(e) => {

                                let obj = roles.find(item => item.value_ar === e.target.value);

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
                                <MenuItem sx={styles.menu} key={index} value={role.value_ar}>
                                    {role.value_ar}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">فئة الخدمة</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={categoryAr}
                            onChange={(e) => {

                                let obj = categories[roleAr].find(item => item.value_ar === e.target.value);

                                setCategoryEn(obj.value_en);
                                setCategoryAr(obj.value_ar);
                                setSubCategoryEn("");
                                setSubCategoryAr("");
                            }}
                            required
                        >
                            {categories[roleAr]?.map((user, index) => (
                                <MenuItem sx={styles.menu} key={index} value={user.value_ar}>
                                    {user.value_ar}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">فئة الخدمة الفرعية</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={subCategoryAr}
                            onChange={(e) => {

                                let obj = subCategories[roleAr][categoryAr].find(item => item.value_ar === e.target.value);

                                setSubCategoryEn(obj.value_en);
                                setSubCategoryAr(obj.value_ar);
                            }}
                            required
                        >
                            {subCategories[roleAr][categoryAr]?.map((user, index) => (
                                <MenuItem sx={styles.menu} key={index} value={user.value_ar}>
                                    {user.value_ar}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <p className="card__subtitle">رقم الاتصال</p>
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
                        تحديث
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
                       setUserName(user.user.name_ar);
                       setEmail(user.user.email);
                       setRoleEn(user.profile.service_en.role);
                       setRoleAr(user.profile.service_ar.role);
                       setCategoryEn(user.profile.service_en.category);
                       setCategoryAr(user.profile.service_ar.category);
                       setSubCategoryEn(user.profile.service_en.subCategory);
                       setSubCategoryAr(user.profile.service_ar.subCategory);
                       setCompanyName(user.profile.about_ar.name);
                       setCompanyAddress(user.profile.about_ar.address);
                       setCompanyVision(user.profile.about_ar.vision);
                       setContactNumber(user.profile.contact_ar.number);
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

                <p className="personel__title">اسم االمستخدم</p>
                <p className="personel__subtitle">{user?.user.name_ar}</p>

                <p className="personel__title">البريد الإلكتروني</p>
                <p className="personel__subtitle">{user?.user.email}</p>

                <p className="personel__title">اسم الشركة</p>
                <p className="personel__subtitle">{user?.profile.about_ar.name}</p>

                <p className="personel__title">عنوان الشركة</p>
                <p className="personel__subtitle">{user?.profile.about_ar.address}</p>

                <p className="personel__title">رؤية الشركة</p>
                <p className="personel__subtitle">{user?.profile.about_ar.vision}</p>

                <p className="personel__title">رقم الاتصال</p>
                <p className="personel__subtitle">{user?.profile.contact_ar.number}</p>

                <p className="personel__title">دور الخدمة</p>
                <p className="personel__subtitle">{user?.profile.service_ar.role}</p>

                <p className="personel__title">فئة الخدمة</p>
                <p className="personel__subtitle">{user?.profile.service_ar.category}</p>

                <p className="personel__title">فئة الخدمة الفرعية</p>
                <p className="personel__subtitle">{user?.profile.service_ar.subCategory}</p>

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