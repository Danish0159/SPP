import styled from "styled-components";

export const CardLayout = styled.div`
   max-width: 100rem;
   margin: auto;
   padding: 5rem 2rem;
   min-height: calc(100vh - 100px);
   display: grid;
   grid-template-columns: 2fr 8fr;
   align-items: center;
   grid-gap: 3rem;
   @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
  .card {
    box-shadow: 0 0 6px #888;
    min-height: 50vh;
  }
  .card__content {
    padding: 2rem 4rem;
  }
  .card__title {
    background-color: var(--clr-blue-2);
    color: #ffffff;
    padding: 1.2rem 2rem 1.2rem 2rem;
    font-size: 2rem;
  }
  .card__subtitle {
    font-size: 1.8rem;
    margin: 2rem 0rem;
  }
 .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
    margin-top: 2rem;
  }
  .card-btn {
    font-size: 1.6rem;
    border-radius: 25px;
    /* OverRiding index.css styling */
    margin: 0.1rem;
    font-weight: 500;
  }
  /////////////
  /* Thumbs */
  .thumbsContainer{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .thumb{
    display: inline-flex;
    border-radius:2px;
    border : 1px solid #eaeaea;
    margin-bottom: 8px;
    margin-right:8px;
    width: 100px;
    height: 100px;
    padding: 4px;
    box-sizing:border-box;
  }
  .thumbInner{
    display:flex;
    min-width:0px;
    overflow:hidden ;
  }
  .img{
    display: block;
    width: auto;
    height: 100%;
  }
  .thumbPadding {
    padding: 10px 0px;
  }
  /* Drop Zone Text */
.drop {
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.5rem;
  color: var(--clr-black);
}
`;

// Seperate styling for Review Page.
// export const Review = styled.div`
//   .card__subtitle {
//     font-size: 1.8rem;
//     margin: 2rem 0rem;
//   }
//   .card-btn {
//     font-size: 1.6rem;
//     border-radius: 25px;
//     /* OverRiding index.css styling */
//     margin: 0.1rem;
//     font-weight: 500;
//   }
// `;