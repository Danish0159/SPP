import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PreviewProfile = () => {
    const { user } = useSelector(
        (state) => state.auth
    );
    return (
        <Wrapper>
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
                sx={{ width: 130, height: 130 }}
                alt="Avatar"
            />
            <div className="preview__info">
                <p className="personel__title">Name</p>
                <p className="personel__subtitle">{user.user.name}</p>
                <p className="personel__title">Email</p>
                <p className="personel__subtitle">{user.user.email}</p>
                <p className="personel__title">Role</p>
                <p className="personel__subtitle">{user.user.role}</p>
                <p className="personel__title">Number</p>
                <p className="personel__subtitle">{user.profile.phoneNumber}</p>
                <p className="personel__title">Location</p>
                <p className="personel__subtitle">{user.profile.location.country} , {user.profile.location.city}</p>
            </div>
            <h2 className='preview__title'>Portfolio</h2>
            {user.profile.portfolio.map((project, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p className="personel__title">{project.projectName}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="preview__portfolio">
                                <p className="personel__title">Project Name</p>
                                <p className="personel__subtitle">{project.projectName}</p>
                                <p className="personel__title">Project Location</p>
                                <p className="personel__subtitle">{project.location}</p>
                                <aside className='thumbsContainer'>
                                    {
                                        project.images.map((img, index) => {
                                            return (
                                                <div key={index} className='thumb'>
                                                    <div className='thumbInner'>
                                                        <img alt="selected" src={img} className='img' />
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
.preview__info{
    margin-top: 3rem;
}
.preview__portfolio{
margin: 2rem 0rem;
}
`;