import React from 'react'
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PreviewProfile = () => {
    const { user } = useSelector(
        (state) => state.profileAr
    );
    return (
        <Wrapper>
            <div className="profile__avatar">
                <Avatar
                    src={user.profile.photo}
                    sx={{ width: 100, height: 100 }}
                    alt="Avatar"
                />
            </div>
            <div className="preview__info">
                <p className="profile__title">اسم االمستخدم</p>
                <p className="profile__subtitle">{user.user.name_ar}</p>
                <p className="profile__title">البريد الإلكتروني</p>
                <p className="profile__subtitle">{user.user.email}</p>
                <p className="profile__title">دور الخدمة</p>
                <p className="profile__subtitle">{user.profile.service_ar.role}</p>
                <p className="profile__title">رقم الاتصال</p>
                <p className="profile__subtitle">{user.profile.contact_ar.number}</p>
                <p className="profile__title">موقع الخدمة</p>
                <p className="profile__subtitle">
                    {user.profile.service_ar.region},&nbsp;
                    {user.profile.service_ar.city.map((city, index) => {
                        return (
                            <span key={index} className="pipe" > {city} </span>
                        )
                    })
                    }
                </p>
            </div>
            <h2 className='profile__portfolio'>مَلَفّ</h2>
            {user.profile.portfolio.length === 0 ? null :
                <>
                    {user.profile.portfolio.map((project, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <p className="profile__title">{project.projectName}</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="preview__portfolio">
                                        <p className="profile__title">اسم المشروع</p>
                                        <p className="profile__subtitle">{project.projectName}</p>
                                        <p className="profile__title">موقع المشروع</p>
                                        <p className="profile__subtitle">{project.projectLocation}</p>
                                        <p className="profile__title">وصف المشروع</p>
                                        <p className="profile__subtitle">{project.projectDescription}</p>
                                        <aside className='thumbsContainer'>
                                            {
                                                project.images.map((img, index) => {
                                                    return (
                                                        <div key={index} className='thumb'>
                                                            <div className='thumbInner'>
                                                                <img alt="img" src={img} className='img' />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </aside>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </>
            }
        </Wrapper>
    )
}

export default PreviewProfile

const Wrapper = styled.div`

    margin-top: 1.3rem;

    .preview__info {
        margin-top: 3rem;
    }

    .profile__title {
        font-size: 2rem;
    }

    .profile__subtitle {
        font-size: 1.8rem;
    }
    
    .preview__portfolio {
        margin: 2rem 0rem;
    }
    
    .pipe:not(:empty) ~ .pipe:not(:empty):before {
        content: "| ";
    }

`;