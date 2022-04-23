import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PersonelProjects = () => {
    const [counter, setCounter] = useState([0, 1, 2, 3, 4]);
    return (
        <main>
            <h2 className='preview__title'>Portfolio</h2>
            {counter.map((one) => {
                return (
                    <Accordion>
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
        </main >
    )
}

export default PersonelProjects