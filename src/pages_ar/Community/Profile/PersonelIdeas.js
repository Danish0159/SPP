import React, { useRef } from 'react'
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteIdeaAr } from '../../../features_ar/profile/profileSlice';
import Spinner from "../../../components_ar/Spinner";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Tooltip from '@mui/material/Tooltip';


const PersonelIdeas = ({ handleStep }) => {

    const commentsContainer = useRef(null);

    const dispatch = useDispatch();

    const { user, isLoading } = useSelector(
        (state) => state.profileAr
    );

    if (isLoading) {
        return <Spinner />;
    }
    else if (user) {
        return (
            <Wrapper>
                {user.profile.ideas.map((idea, index) => {
                    return (
                        <div className="idea" key={index}>
                            <div className="idea__closed">
                                <div className="container__left">
                                    <h1 className="title">{idea.ideaCaption}</h1>
                                </div>

                                <div className="container__right">
                                    <Tooltip title="فتح">
                                        <ArrowDropDownCircleIcon
                                            className="dropdown__icon"
                                            color="primary"
                                            onClick={() => {

                                                const chat = document.getElementById(`chat${index}`);
                                                if (chat.style.display === "block") {
                                                    chat.style.display = "none";
                                                }

                                                const open = document.getElementById(`open${index}`);
                                                if (open.style.display === "none") {

                                                    open.style.display = "block";
                                                }
                                                else if (open.style.display === "block") {
                                                    open.style.display = "none";
                                                }
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                            </div>

                            <div className="idea__opened" id={`open${index}`} style={{ display: "none" }}>
                                <div className='images__container'>
                                    {
                                        idea.images.map((image, index) => {
                                            return (
                                                <img key={index} alt="IdeaImage" src={image} className="idea__image" />
                                            )
                                        })
                                    }
                                </div>

                                <div className="interaction">
                                    <div
                                        onClick={() => {
                                            const chat = document.getElementById(`chat${index}`);
                                            if (chat.style.display === "none") {
                                                chat.style.display = "block";
                                                const scroll =
                                                    commentsContainer.current.scrollHeight -
                                                    commentsContainer.current.clientHeight;

                                                commentsContainer.current.scrollTo(0, scroll);
                                            }
                                            else if (chat.style.display === "block") {
                                                chat.style.display = "none";
                                            }
                                        }}>
                                        {idea.comments.length}
                                        <Tooltip title="تعليقات">
                                            <CommentIcon className="icons" color="warning" />
                                        </Tooltip>
                                    </div>

                                    <div
                                        onClick={() => {
                                            dispatch(deleteIdeaAr({ profileId: user.profile._id, ideaId: idea._id }))
                                        }}
                                    >
                                        <Tooltip title="حذف">
                                            <DeleteIcon className="icons" color="error" />
                                        </Tooltip>
                                    </div>
                                </div>

                            </div>

                            <div className="idea__opened" id={`chat${index}`} style={{ display: "none" }}>
                                <div ref={commentsContainer} className="comments">
                                    {idea.comments.map((comment, index) => {
                                        return (
                                            <div key={index} className="idea__comment">
                                                <p className="comment__entry">
                                                    <CommentIcon color="primary" fontSize="large" />  {comment.entry}
                                                </p>
                                                <p className="comment__date">
                                                  ____ {comment.date}
                                                </p>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    )
                })}


                <div className="addidea" >
                    <Button
                        className="addidea__btn"
                        variant="contained"
                        onClick={() => handleStep(6)}
                        endIcon={<AddOutlinedIcon className="add__icon"/>}
                    >
                        أضف فكرة
                    </Button>
                </div>

            </Wrapper>
        )
    }
    else {
        return null;
    }
}

export default PersonelIdeas

const Wrapper = styled.div`
    .idea {
        border-radius: 4px;
        border: 1.5px solid lightgrey;
        box-shadow: -4px 8px 5px 0px rgba(0,0,0,0.06);
        padding: 1rem;
    }

    .idea__closed {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container__left {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        color: darkblue;
        font-size: 1.8rem;
    }

    .dropdown__icon {
        font-size: 3rem;
        color: darkblue;
        cursor: pointer;
    }

    .images__container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .idea__image{
        border-radius: 2rem;
        border: 1.5px solid lightgrey;
        width: 150px;
        height: 150px;
        margin: 5px;
    }

    .interaction {
        border-radius: 1rem;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top: 1.5px solid lightgrey;
        border-right: 1.5px solid lightgrey;
        border-bottom: 1.5px solid lightgrey;
        padding: 1rem 0rem;
        font-size: 1.5rem;
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .icons {
        font-size: 2.5rem;
        cursor: pointer;
    }

    .comments {
        border-radius: 4px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top: 1.5px solid lightblue;
        border-left: 1.5px solid lightblue;
        border-bottom: 1.5px solid lightblue;
        margin-top: 2rem;
        padding: 1rem;
        height: 20rem;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    .idea__comment {
        margin-top: 0.5rem;
        color: black;
        border-bottom: 1px solid lightgrey;
        font-size: 1.6rem;
    }

    .comment__entry {
        padding: 2px;
    }

    .comment__date {
        color: #227d72;
        text-align: left;
        padding: 2px;
    }

    .addidea {
        margin-top: 1rem;
        text-align: center;        
    }

    .addidea__btn {
        margin-top: 1rem;
        font-size: 1.3rem;
        background-color: #424d83;
    }

    .add__icon {
        margin-right: 1rem;
    }
`;


