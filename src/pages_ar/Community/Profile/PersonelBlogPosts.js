import React, { useEffect, useState, useRef } from 'react'
import styled from "styled-components";
import { Spinner } from '../../../components_ar';
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { searchBlogPostsByIdAr, sendMessageAr, sendLikeAr, deleteBlogPostAr } from '../../../features_ar/blogpost/blogpostSlice';
import { TextField, Avatar, Button } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Tooltip from '@mui/material/Tooltip';

const PersonelBlogPosts = ({ handleStep }) => {

    const chatContainer = useRef(null);

    const [message, setMessage] = useState("");

    const { blogposts, isLoading, isLoadingMessages } = useSelector(
        (state) => state.blogpostAr
    );

    const { user } = useSelector(
        (state) => state.profileAr
    );

    const dispatch = useDispatch();

    function scrollToBottom() {
        if (chatContainer.current) {
            const scroll =
                chatContainer.current.scrollHeight -
                chatContainer.current.clientHeight;

            chatContainer.current.scrollTo(0, scroll);
        }
    }

    useEffect(() => {
        dispatch(searchBlogPostsByIdAr({ profileId: user.profile._id }));
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        scrollToBottom();
    }, [isLoadingMessages]);


    if (isLoading) {
        return <Spinner />;
    }
    else if (blogposts) {
        return (
            <Wrapper>
                {blogposts.data.map((blogpost, index) => {
                    return (
                        <div className="blogpost" key={index}>
                            <div className="blogpost__closed">
                                <div className="container__left">
                                    <Avatar
                                        src={blogpost.createdBy.image}
                                        className="profile__image"
                                        alt="ProfileImage"
                                    />

                                    <div className="titles">
                                        <h1 className="title">{blogpost.createdBy.name}</h1>
                                        <h2 className="subtitle">{blogpost.createdAt}</h2>
                                    </div>
                                </div>

                                <div className="container__right">
                                    <Tooltip title="فتح">
                                        <ArrowDropDownCircleIcon
                                            className="dropdown__icon"
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

                            <div className="blogpost__opened" id={`open${index}`} style={{ display: "none" }}>
                                <pre className="lead" >{blogpost.post.paragraph}</pre>
                                <img src={blogpost.post.image} className="thumbnail" alt="BlogPostImage" />
                                <div className="interaction">
                                    <div
                                        onClick={() => {

                                            dispatch(sendLikeAr({ blogpostId: blogpost._id, like: "like", profileId: user.profile._id }))
                                        }}
                                    >
                                        {blogpost.likes.length}
                                        <Tooltip title="يحب">
                                            <ThumbUpAltIcon className="icons" color="primary" />
                                        </Tooltip>
                                    </div>

                                    <div
                                        onClick={() => {
                                            const chat = document.getElementById(`chat${index}`);
                                            if (chat.style.display === "none") {
                                                chat.style.display = "block";
                                                scrollToBottom();
                                            }
                                            else if (chat.style.display === "block") {
                                                chat.style.display = "none";
                                            }
                                        }}>
                                        {blogpost.messages.length}
                                        <Tooltip title="رسائل">
                                            <MessageIcon className="icons" color="warning" />
                                        </Tooltip>
                                    </div>

                                    <div
                                        onClick={() => {
                                            toast.success("نسخ إلى الحافظة", {
                                                position: "top-center",
                                                autoClose: 300,
                                                hideProgressBar: true,
                                            });
                                            navigator.clipboard.writeText(`mahntysa.netlify.app/Blog/${blogpost._id}`);
                                        }}
                                    >
                                        <Tooltip title="يشارك">
                                            <ShareIcon className="icons" color="success" />
                                        </Tooltip>
                                    </div>

                                    <div
                                        onClick={() => {
                                            dispatch(deleteBlogPostAr({ profileId: user.profile._id, blogpostId: blogpost._id }))
                                        }}
                                    >
                                        <Tooltip title="حذف">
                                            <DeleteIcon className="icons" color="error" />
                                        </Tooltip>
                                    </div>
                                </div>

                            </div>

                            <div className="blogpost__opened" id={`chat${index}`} style={{ display: "none" }}>
                                <div className="chat__form">
                                    <TextField
                                        fullWidth
                                        multiline
                                        className="text__input"
                                        type="text"
                                        name="text"
                                        placeholder="أرسل ردًا"
                                        inputProps={{
                                            style: {
                                                fontSize: "1.3rem",
                                                fontWeight: "400",
                                                color: "#2a2a2a",
                                                lineHeight: "1.2"
                                            }
                                        }}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <Button
                                        className="send__btn"
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            dispatch(
                                                sendMessageAr({
                                                    blogpostId: blogpost._id,
                                                    message: {
                                                        tag: "response",
                                                        entry: message
                                                    },
                                                    profileId: user.profile._id
                                                })
                                            )

                                            setMessage("");
                                        }}>
                                        إرسال
                                    </Button>
                                </div>
                                <div ref={chatContainer} className="chat__messages">
                                    {blogpost.messages.map((message, index) => {
                                        if (message.tag === "response") {
                                            return (
                                                <div className="response" key={index}>
                                                    <p className="response__message">{message.entry}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="query" key={index}>
                                                    <p className="query__message">{message.entry}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className="addblogpost" >
                    <Button
                        className="addblogpost__btn"
                        variant="contained"
                        onClick={() => handleStep(5)}
                        endIcon={<AddOutlinedIcon className="add__icon"/>}
                    >
                        أضف منشور مدونة
                    </Button>
                </div>
            </Wrapper >
        )
    }
    else {
        return null;
    }
}

export default PersonelBlogPosts;

const Wrapper = styled.div`
    .blogpost {
        border-radius: 4px;
        border: 1.5px solid lightgrey;
        box-shadow: -4px 8px 5px 0px rgba(0,0,0,0.06);
        padding: 1rem;
    }

    .blogpost__closed {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container__left {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .profile__image {
        height: 60px;
        width: 60px;
        border: 1px solid blue;
    }

    .titles {
        padding: 0rem 1rem;
    }

    .title {
        color: darkblue;
        font-size: 1.8rem;
    }

    .subtitle {
        color: grey;
        font-weight: 500;
    }

    .dropdown__icon {
        font-size: 3rem;
        color: darkblue;
        cursor: pointer;
    }

    .lead {
        font-size: 1.8rem;
        margin-top: 2rem;
        color: #2b2b2b;
        overflow-x: auto;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
    }

    .thumbnail {
        border-radius: 4px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top: 1.5px solid lightgrey;
        border-right: 1.5px solid lightgrey;
        border-bottom: 1.5px solid lightgrey;
        margin-top: 1rem;
        width: 100%;
        height: 30rem;
    }

    .interaction {
        border-radius: 1rem;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top: 1.5px solid lightgrey;
        border-left: 1.5px solid lightgrey;
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

    .chat__form {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .send__btn {
        margin: 0rem 0.5rem;
    }

    .chat__messages {
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

    .response {
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0.5rem 0rem;
    }

    .response__message {
        padding: 1rem;
        color: white;
        background-color: blue;
        border: 1px solid transparent;
        border-radius: 1rem;
        border-bottom-right-radius: 0px;
        font-size: 1.3rem;
        max-width: 70%;
    }

    .query {
        display: flex;
        justify-content: end;
        align-items: center;
        margin: 0.8rem 0rem;
    }

    .query__message {
        padding: 1rem;
        color: black;
        background-color: lightgrey;
        border: 1px solid transparent;
        border-radius: 1rem;
        border-bottom-left-radius: 0px;
        font-size: 1.3rem;
        max-width: 70%;
    }

    @media only screen and (max-width: 550px) {

        .response__message {
            max-width: 90%;
        }

        .query__message {
            max-width: 90%;
        }

    }

    .addblogpost {
        margin-top: 1rem;
        text-align: center;        
    }

    .addblogpost__btn {
        margin-top: 1rem;
        font-size: 1.3rem;
        background-color: #424d83;
    }

    .add__icon {
        margin-right: 1rem;
    }
`;

