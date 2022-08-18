import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import success from "../images/success.png";
import styled from "styled-components";
import axios from "axios";

const EmailVerify = () => {

    const [validUrl, setValidUrl] = useState(false);

    const params = useParams();

    useEffect(() => {
        const verify = async () => {
            try {
                const url = `http://localhost:8000/api/user/${params.id}/verify/${params.token}`;
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };

        verify();
    }, [params])

    return (
        <Fragment>
            {validUrl ? (
                <Wrapper>
                    <img src={success} alt="sccess" className="emailverify-image" />
                    <h1>Email Verified Successfully</h1>
                    <Link to="/Login">
                        <button className="emailverify-button">Login</button>
                    </Link>
                </Wrapper>

            ) : (
                <h1>Not Found</h1>
            )}
        </Fragment>
    )
};

export default EmailVerify;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .emailverify-button {
        border: none;
        outline: none;
        padding: 12px 0px;
        background-color: #3bb19b;
        width: 180px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }
`

