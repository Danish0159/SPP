import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, reset } from "../../../slices/auth";
import Spinner from "../../../components/Spinner";


const PersonelProjects = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    // state.
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            toast.success(message);
        }
        dispatch(reset());
        // eslint-disable-next-line
    }, [user, isError, isSuccess, message, dispatch]);


    function handleDelete(projectId) {
        //  API CALL.
        dispatch(
            deleteProject({
                profileId: user.profile._id,
                projectId,
            })
        );
    }

    if (isLoading) {
        return <Spinner />;
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
                                    <DeleteIcon onClick={() => { handleDelete(project._id) }} style={{ fontSize: 20, marginRight: "8px" }} />
                                    <ModeEditOutlineOutlinedIcon style={{ fontSize: 20, marginRight: "8px" }} />
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