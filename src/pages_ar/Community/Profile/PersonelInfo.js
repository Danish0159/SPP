import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Select, TextField, MenuItem, Avatar } from '@mui/material';
import { users } from "../../../utils/constantsAr";
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from "react-redux";
import { getCommunityUserAr, updateProfileAr } from '../../../features_ar/profile/profileSlice';
import Spinner from "../../../components_ar/Spinner";
import { styles } from '../../../Shared/styles';
import { categories, subCategories } from "../../../utils/constantsAr"

const PersonelInfo = () => {

    const [update, setUpdate] = useState(false);

    const { user, isLoading, } = useSelector(
        (state) => state.profileAr
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [roleEn, setRoleEn] = useState("");
    const [roleAr, setRoleAr] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [categoryEn, setCategoryEn] = useState("");
    const [categoryAr, setCategoryAr] = useState("");
    const [subCategoryEn, setSubCategoryEn] = useState("");
    const [subCategoryAr, setSubCategoryAr] = useState("");

    // state.
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommunityUserAr());
        // eslint-disable-next-line
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.
        console.log({
            profilePhoto,
            name,
            email,
            phoneNumber,
            roleEn,
            roleAr,
            categoryEn,
            categoryAr,
            subCategoryEn,
            subCategoryAr,
            id: user.profile._id
        });

        dispatch(
            updateProfileAr({
                profilePhoto,
                name,
                email,
                phoneNumber,
                role_en: roleEn,
                role_ar: roleAr,
                category_en: categoryEn,
                category_ar: categoryAr,
                subCategory_en: subCategoryEn,
                subCategory_ar: subCategoryAr,
                id: user.profile._id
            })
        );

        setUpdate(false);
        // Reset form.
        setName("");
        setEmail("");
        setRoleEn("");
        setRoleAr("");
        setNumber("");
        setProfilePhoto("");
        setCategoryEn("");
        setCategoryAr("");
        setSubCategoryEn("");
        setSubCategoryAr("");

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
                            var file = event.target.files[0];
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                setProfilePhoto(event.target.result);
                            };
                            reader.readAsDataURL(file);
                        }}
                    />
                </div>

                <div className="profile__updateData">

                    <div>
                        <p className="card__subtitle">اسم</p>
                        <TextField
                            fullWidth
                            className="update"
                            type="text"
                            name="text"
                            inputProps={{
                                style: styles.textField,
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">البريد الإلكتروني</p>
                        <TextField
                            fullWidth
                            sx={{ direction: "ltr" }}
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
                        <p className="card__subtitle">وظيفة</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={roleAr}
                            onChange={(e) => {

                                let obj = users.find(item => item.value_ar === e.target.value);

                                setRoleEn(obj.value_en);
                                setRoleAr(obj.value_ar);
                                setCategoryEn("");
                                setCategoryAr("");
                                setSubCategoryEn("");
                                setSubCategoryAr("");
                            }}
                            required
                        >
                            {users.map((user, index) => (
                                <MenuItem sx={styles.menu} key={index} value={user.value_ar}>
                                    {user.value_ar}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">فئة</p>
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
                        <p className="card__subtitle">تصنيف فرعي</p>
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
                            sx={{ direction: "ltr" }}
                            type="number"
                            className="update"
                            name="number"
                            inputProps={{
                                style: styles.textField,
                            }}
                            value={phoneNumber}
                            onChange={(e) => setNumber(e.target.value)}
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
                        setCategoryEn(user.profile.category_en);
                        setCategoryAr(user.profile.category_ar);
                        setSubCategoryEn(user.profile.subCategory_en);
                        setSubCategoryAr(user.profile.subCategory_ar);
                        setName(user.user.name_ar);
                        setEmail(user.user.email);
                        setRoleEn(user.user.role_en);
                        setRoleAr(user.user.role_ar);
                        setNumber(user.profile.phoneNumber);
                        setProfilePhoto(user.profile.profilePhoto);

                    }} className="edit__icon"></ModeEditOutlineOutlinedIcon>
                </div>
                <div className="personel__avatar">
                    <Avatar
                        style={{ marginBottom: "4rem" }}
                        src={user?.profile.profilePhoto}
                        sx={{ width: 100, height: 100, }}
                        alt="Avatar"
                    />
                </div>
                <p className="personel__title">اسم</p>
                <p className="personel__subtitle">{user?.user.name_ar}</p>
                <p className="personel__title">البريد الإلكتروني</p>
                <p className="personel__subtitle">{user?.user.email}</p>
                <p className="personel__title">رقم الاتصال</p>
                <p className="personel__subtitle">{user?.profile.phoneNumber}</p>
                <p className="personel__title">وظيفة</p>
                <p className="personel__subtitle">{user?.user.role_ar}</p>
                <p className="personel__title">فئة</p>
                <p className="personel__subtitle">{user?.profile.category_ar}</p>
                <p className="personel__title">تصنيف فرعي</p>
                <p className="personel__subtitle">{user?.profile.subCategory_ar}</p>
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