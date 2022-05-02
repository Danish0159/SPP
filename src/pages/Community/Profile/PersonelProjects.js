import React, { useState } from 'react'
import { useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const PersonelProjects = () => {
    const { user } = useSelector(
        (state) => state.auth
    );

    function deleteP(name) {
        alert(name);
    }
    function updateP(name) {
        alert(name);
    }

    return (
        <main>
            <h2 className='preview__title'>Portfolio</h2>
            {user.profile.portfolio.map((project, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={
                                <>
                                    <ExpandMoreIcon style={{ fontSize: 20, marginRight: "8px" }} />
                                    <DeleteIcon onClick={() => { deleteP(project._id) }} style={{ fontSize: 20, marginRight: "8px" }} />
                                    <ModeEditOutlineOutlinedIcon onClick={() => { updateP(project._id) }} style={{ fontSize: 20, marginRight: "8px" }} />
                                </>
                            }
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
        </main >
    )
}

export default PersonelProjects