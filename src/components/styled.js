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
    padding: 1.2rem 0rem 1.2rem 2rem;
    font-size: 2rem;
  }
  .card__subtitle {
    font-size: 1.8rem;
    margin: 2rem 0rem;
  }
`;