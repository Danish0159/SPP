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
        (state) => state.profile
    );
    return (
        <Wrapper>
            <div className="profile__avatar">
                <Avatar
                    src={user.profile.profilePhoto}
                    sx={{ width: 100, height: 100 }}
                    alt="Avatar"
                />
            </div>
            <div className="preview__info">
                <p className="profile__title">Name</p>
                <p className="profile__subtitle">{user.user.name}</p>
                <p className="profile__title">Email</p>
                <p className="profile__subtitle">{user.user.email}</p>
                <p className="profile__title">Role</p>
                <p className="profile__subtitle">{user.user.role}</p>
                <p className="profile__title">Number</p>
                <p className="profile__subtitle">{user.profile.phoneNumber}</p>
                <p className="profile__title">Location</p>
                <p className="profile__subtitle">
                    {user.profile.location.country},{" "}&nbsp;
                    {user.profile.location.city.map((city, index) => {
                        return (
                            <span key={index}>
                                {city},&nbsp;
                            </span>
                        )
                    })
                    }
                </p>
            </div>
            <h2 className='profile__portfolio'>Portfolio</h2>
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
                                <p className="profile__title">Project Name</p>
                                <p className="profile__subtitle">{project.projectName}</p>
                                <p className="profile__title">Project Location</p>
                                <p className="profile__subtitle">{project.location}</p>
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
        </Wrapper>
    )
}

export default PreviewProfile

const Wrapper = styled.div`
margin-top: 1.3rem;
.preview__info{
    margin-top: 3rem;
}
.preview__portfolio{
margin: 2rem 0rem;
}
`;