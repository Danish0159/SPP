import React, { useState } from 'react'
import { Rating, TextField } from '@mui/material';
import { styles } from '../../../components/Shared/styles'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Spinner';
import { reviewProject } from '../../../features/profile/profileSlice';

const ReviewForm = ({ User, userId, id }) => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("Ex. Director of Marketting");
    const [stars, setStars] = useState(2.5);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [review, setReview] = useState("It was great working with zubair! Thanks for your help! ");

    // State.
    const dispatch = useDispatch();
    const { isLoading, } = useSelector(
        (state) => state.profile
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.
        dispatch(reviewProject({
            name,
            title,
            stars,
            phoneNumber,
            review,
            profileId: userId,
            projectId: id,
        }));
        setName("");
        setTitle("");
        setReview("");
        setStars(null);
        setPhoneNumber("");
    };

    if (isLoading) {
        return (
            <div className="section-100vh">
                <Spinner />;
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1 className='section__title'>Help {User} with a testimonial</h1>

            <p className="project__subtitle">Name</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                inputProps={{
                    style: styles.textField,
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <p className="project__subtitle">Business title</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                inputProps={{
                    style: styles.textField,
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <p className="project__subtitle">Phone Number</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                inputProps={{
                    style: styles.textField,
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
            />
            <p className="project__subtitle">Rating</p>
            <Rating
                value={stars}
                name="simple-controlled"
                onChange={(event, newValue) => {
                    setStars(newValue);
                }
                }
                precision={0.5}
                size="large"
                style={{ fontSize: "2.6rem" }}
            />
            <p className="project__subtitle">Testimonial</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                inputProps={{
                    style: styles.desciption,
                }}
                rows={5}
                multiline
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
            />
            <button
                style={{ marginTop: '2rem' }}
                className="blue-btn submit-button"
                type="submit"
            >
                SUBMIT
            </button>
        </form>
    )
}

export default ReviewForm