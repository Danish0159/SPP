import React, { useState, useEffect } from 'react'
import { Rating, TextField } from '@mui/material';
import { styles } from '../../../Shared/Styles'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Spinner';
import { reviewProjectEn, reset } from '../../../features_en/profile/profileSlice';
import swal from 'sweetalert';


const ReviewForm = ({ User, userId, id }) => {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [stars, setStars] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState();
    const [review, setReview] = useState("");

    // State.
    const dispatch = useDispatch();
    const { isLoading, isSuccess } = useSelector(
        (state) => state.profileEn
    );

    useEffect(() => {
        if (isSuccess) {
            swal({
                title: "Review Submitted",
                icon: "success",
            }).then(() => {
                dispatch(reset());
                window.location.replace("https://mahntysa.netlify.app/");

            });
        }
        // eslint-disable-next-line
    }, [isSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.
        dispatch(reviewProjectEn({
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
        setStars(0);
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
        <form onSubmit={handleSubmit} >
            <h1 className='section__title'>Help {User} with a testimonial</h1>

            <p className="project__title">Name</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                placeholder='John'
                inputProps={{
                    style: styles.textField,
                    maxLength: 20
                }}
                helperText={<small className="helper">{name.length}/{20}</small>}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <p className="project__title">Business title</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                placeholder='Ex. Director of Marketing'
                inputProps={{
                    style: styles.textField,
                    maxLength: 20
                }}
                helperText={<small className="helper">{title.length}/{20}</small>}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <p className="project__title">Phone Number</p>
            <TextField
                fullWidth
                type="tel"
                name="number"
                inputProps={{
                    style: styles.textField,
                    maxLength: 10
                }}
                value={phoneNumber}
                onChange={(e) => {
                    let regExp = /^[0-9]*$/;

                    if (regExp.test(e.target.value)) {
                        setPhoneNumber(e.target.value);
                    } else {
                        console.log("Only numbers are allowed");
                    }
                }}
                required
            />
            <p className="project__title">Rating</p>
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
            <p className="project__title">Testimonial</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                placeholder='Thank you so much for a job well done.'
                inputProps={{
                    style: styles.desciption,
                    maxLength: 100
                }}
                helperText={<small className="helper">{review.length}/{100}</small>}
                rows={3}
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