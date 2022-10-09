import React, { useState, useEffect } from 'react'
import { Rating, TextField } from '@mui/material';
import { styles } from '../../../Shared/Styles'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Spinner';
import { reviewProjectAr, reset } from '../../../features_ar/profile/profileSlice';
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
        (state) => state.profileAr
    );

    useEffect(() => {
        if (isSuccess) {
            swal({
                title: "تم إرسال المراجعة",
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
        dispatch(reviewProjectAr({
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
        <form onSubmit={handleSubmit}>
            <h1 className='section__title'>مساعدة {User} بشهادة</h1>

            <p className="project__title">اسم</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                placeholder='جون'
                inputProps={{
                    style: styles.textField,
                    maxLength: 20
                }}
                helperText={<small className="helper">{name.length}/{20}</small>}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <p className="project__title">عنوان العمل</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                placeholder='السابق. مدير التسويق'
                inputProps={{
                    style: styles.textField,
                    maxLength: 20
                }}
                helperText={<small className="helper">{title.length}/{20}</small>}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <p className="project__title">رقم الهاتف</p>
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
            <p className="project__title">تقييم</p>
            <Rating
                value={stars}
                sx={{ direction: "ltr" }}
                name="simple-controlled"
                onChange={(event, newValue) => {
                    setStars(newValue);
                }
                }
                precision={0.5}
                size="large"
                style={{ fontSize: "2.6rem" }}
            />
            <p className="project__title">شهادة</p>
            <TextField
                fullWidth
                type="text"
                name="text"
                placeholder='شكرا جزيلا على العمل بصورة جيدة لك.'
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
                إرسال
            </button>
        </form>
    )
}

export default ReviewForm