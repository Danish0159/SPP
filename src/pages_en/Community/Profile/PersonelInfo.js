import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Select, TextField, MenuItem, Avatar } from '@mui/material';
import { users } from "../../../utils/constantsEn";
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from "react-redux";
import { getCommunityUserEn, updateProfileEn } from '../../../features_en/profile/profileSlice';
import Spinner from "../../../components_en/Spinner";
import { styles } from '../../../Shared/styles';
import { categories, subCategories } from "../../../utils/constantsEn";

const PersonelInfo = () => {

    const [update, setUpdate] = useState(false);

    const { user, isLoading } = useSelector(
        (state) => state.profileEn
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
    const [companyName, setCompanyName] = useState("");
    const [companyAbout, setCompanyAbout] = useState("");
    const [companyVision, setCompanyVision] = useState("");
    const [companyMission, setCompanyMission] = useState("");


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
                companyName: companyName,
                companyAbout: companyAbout,
                companyVision: companyVision,
                companyMission: companyMission,
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
        setCompanyName("");
        setCompanyAbout("");
        setCompanyVision("");
        setCompanyMission("");

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
                        <p className="card__subtitle">Name</p>
                        <TextField
                            fullWidth
                            type="text"
                            className="update"
                            name="name"
                            inputProps={{
                                style: styles.textField,
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            helperText={<p style={{ fontSize: "1.5rem" }}>{companyName.length}/{50}</p>}
                            rows={1}
                            multiline
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">About Company</p>
                        <TextField
                            fullWidth
                            type="text"
                            name="text"
                            className="update"
                            inputProps={{
                                style: styles.desciption,
                                maxLength: 200
                            }}
                            helperText={<p style={{ fontSize: "1.5rem" }}>{companyAbout.length}/{200}</p>}
                            rows={3}
                            multiline
                            value={companyAbout}
                            onChange={(e) => setCompanyAbout(e.target.value)}
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
                            helperText={<p style={{ fontSize: "1.5rem" }}>{companyVision.length}/{200}</p>}
                            rows={3}
                            multiline
                            value={companyVision}
                            onChange={(e) => setCompanyVision(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <p className="card__subtitle">Company Mission</p>
                        <TextField
                            fullWidth
                            type="text"
                            name="text"
                            className="update"
                            inputProps={{
                                style: styles.desciption,
                                maxLength: 200
                            }}
                            helperText={<p style={{ fontSize: "1.5rem" }}>{companyMission.length}/{200}</p>}
                            rows={3}
                            multiline
                            value={companyMission}
                            onChange={(e) => setCompanyMission(e.target.value)}
                            required
                        />
                    </div>


                    <div>
                        <p className="card__subtitle">Role</p>
                        <Select
                            sx={styles.select}
                            fullWidth
                            className="update"
                            value={roleEn}
                            onChange={(e) => {

                                let obj = users.find(item => item.value_en === e.target.value);

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
                                <MenuItem sx={styles.menu} key={index} value={user.value_en}>
                                    {user.value_en}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div>
                        <p className="card__subtitle">Category</p>
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
                        <p className="card__subtitle">Sub-Category</p>
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
                        setCategoryEn(user.profile.category_en);
                        setCategoryAr(user.profile.category_ar);
                        setSubCategoryEn(user.profile.subCategory_en);
                        setSubCategoryAr(user.profile.subCategory_ar);
                        setName(user.user.name_en);
                        setEmail(user.user.email);
                        setRoleEn(user.user.role_en);
                        setRoleAr(user.user.role_ar);
                        setNumber(user.profile.phoneNumber);
                        setProfilePhoto(user.profile.profilePhoto);
                        setCompanyName(user.profile.about_en.companyName);
                        setCompanyAbout(user.profile.about_en.companyAbout);
                        setCompanyVision(user.profile.about_en.companyVision);
                        setCompanyMission(user.profile.about_en.companyMission);

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

                <p className="personel__title">Name</p>
                <p className="personel__subtitle">{user?.user.name_en}</p>

                <p className="personel__title">Email</p>
                <p className="personel__subtitle">{user?.user.email}</p>

                <p className="personel__title">Company Name</p>
                <p className="personel__subtitle">{user?.profile.about_en.companyName}</p>

                <p className="personel__title">About Company</p>
                <p className="personel__subtitle">{user?.profile.about_en.companyAbout}</p>

                <p className="personel__title">Company Vision</p>
                <p className="personel__subtitle">{user?.profile.about_en.companyVision}</p>

                <p className="personel__title">Company Mission</p>
                <p className="personel__subtitle">{user?.profile.about_en.companyMission}</p>

                <p className="personel__title">Number</p>
                <p className="personel__subtitle">{user?.profile.phoneNumber}</p>

                <p className="personel__title">Role</p>
                <p className="personel__subtitle">{user?.user.role_en}</p>

                <p className="personel__title">Category</p>
                <p className="personel__subtitle">{user?.profile.category_en}</p>

                <p className="personel__title">Sub-Category</p>
                <p className="personel__subtitle">{user?.profile.subCategory_en}</p>
                
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