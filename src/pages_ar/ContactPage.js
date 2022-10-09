import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import logo from "../images/logo.png";
import { styles } from "../Shared/Styles";
import swal from 'sweetalert';


const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Netlify code to handle forms.
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { "form-name": "contact", name, email, message };

    fetch("/", {
      method: "POST",
      body: encode(data),
    })
      .then(() =>
        swal({
          title: "تم الارسال بنجاح!!",
          icon: "success",
          text: "سيتواصل معك فريق الدعم قريبًا."
        }).then(() => {
          window.location.replace("https://mahntysa.netlify.app/");
        })
      )
      .catch((error) => toast.error(error));

    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Wrapper>
      <div className="contact">
        <div className="contact__left">
          <Link to="/ar">
            <img className="contact__left--logo" src={logo} alt="Logo" />
          </Link>
          <div className="contact__left--content">
            <p className="contact__left--text">
              مجتمع حيث يمكنك العثور على المقاولين والمصممين والشركات. طريقة لتعلم وإبراز مهاراتك.
            </p>
          </div>
        </div>
        <div className="contact__right">
          <div className="form">
            <h1 className="section__title">اتصل بالدعم</h1>
            <form
              onSubmit={handleSubmit}
              action="/thank-you/"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="project__subtitle">اسم</p>
              <TextField
                fullWidth
                type="text"
                name="name"
                id="name"
                inputProps={{
                  style: styles.textField,
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <p className="project__subtitle">البريد الإلكتروني</p>
              <TextField
                fullWidth
                type="email"
                name="email"
                id="email"
                sx={{ direction: "ltr" }}
                inputProps={{
                  style: styles.textField,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="project__subtitle">رسالة</p>
              <TextField
                fullWidth
                type="text"
                name="message"
                id="message"
                inputProps={{
                  style: styles.desciption,
                }}
                rows={5}
                multiline
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                style={{ marginTop: "2rem" }}
                className="blue-btn submit-button"
                type="submit"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactPage


const Wrapper = styled.div`
  .contact {
    display: flex;
    min-height: 100vh;
  }
  .contact__left {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #424d83;
    height: 100vh;
    flex: 0 0 32%;
    padding: 2.2rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 850px) {
      padding: 2rem;
    }
  }
  @media only screen and (max-width: 850px) {
    .contact {
      flex-direction: column;
    }
    .contact__left {
      position: relative;
      top: 0;
      z-index: 0;
    }
  }
  .contact__left--logo {
    height: 6rem;
    @media only screen and (max-width: 850px) {
      height: 4.2rem;
    }
  }
  .contact__left--text {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
  .contact__right {
    background: url(https://res.cloudinary.com/dm1mlee94/image/upload/v1652984141/Img_megrmd.png);
    opacity: 1;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0rem;
  }
  .form {
    background-color: white;
    font-size: 2rem;
    padding: 2rem 2rem;
    border-radius: 0.5rem;
    max-width: 70%;
    width: 100%;
    margin: 3rem 0rem;
    @media only screen and (max-width: 1200px) {
      max-width: 90%;
      padding: 2rem;
    }
  }
  .project__subtitle {
    font-size: 2rem;
    color: var(--clr-black);
    margin: 1.5rem 0rem;
  }
`;