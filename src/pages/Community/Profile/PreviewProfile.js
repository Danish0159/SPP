import React, { useState } from 'react'
import { Avatar } from "@mui/material";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PreviewProfile = () => {
    const [counter, setCounter] = useState([0, 1, 2, 3, 4]);
    return (
        <Wrapper>
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
                sx={{ width: 130, height: 130 }}
                alt="Avatar"
            />
            <div className="preview__info">
                <p className="personel__title">Name</p>
                <p className="personel__subtitle">Jhon Doe</p>
                <p className="personel__title">Email</p>
                <p className="personel__subtitle">JhonDoe@gmail.com</p>
                <p className="personel__title">Role</p>
                <p className="personel__subtitle">Contractor</p>
                <p className="personel__title">Number</p>
                <p className="personel__subtitle">123423232324</p>
                <p className="personel__title">Location</p>
                <p className="personel__subtitle">Pakistan, Lahore</p>
            </div>
            <h2 className='preview__title'>Portfolio</h2>
            {counter.map((one) => {
                return (
                    <Accordion key={one}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p className="personel__title">Orage Train</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="preview__portfolio">
                                <p className="personel__title">Project Name</p>
                                <p className="personel__subtitle">Orange Line</p>
                                <p className="personel__title">Project Location</p>
                                <p className="personel__subtitle">Pakistan, Lahore</p>
                                <aside className='thumbsContainer'>
                                    <div className='thumb'>
                                        <div className='thumbInner'>
                                            <img alt="selected" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" className='img' />
                                        </div>
                                    </div>
                                    <div className='thumb'>
                                        <div className='thumbInner'>
                                            <img alt="selected" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" className='img' />
                                        </div>
                                    </div>
                                    <div className='thumb'>
                                        <div className='thumbInner'>
                                            <img alt="selected" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" className='img' />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                )
            })}

            {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <p className="personel__title">Speedo</p>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="preview__portfolio">
                        <p className="personel__title">Project Name</p>
                        <p className="personel__subtitle">Orange Line</p>
                        <p className="personel__title">Project Location</p>
                        <p className="personel__subtitle">Pakistan, Lahore</p>
                        <aside style={thumbsContainer}>
                            <div style={thumb}>
                                <div style={thumbInner}>
                                    <img alt="selected" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" style={img} />
                                </div>
                            </div>
                            <div style={thumb}>
                                <div style={thumbInner}>
                                    <img alt="selected" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" style={img} />
                                </div>
                            </div>
                            <div style={thumb}>
                                <div style={thumbInner}>
                                    <img alt="selected" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" style={img} />
                                </div>
                            </div>
                        </aside>
                    </div>
                </AccordionDetails>
            </Accordion> */}
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

