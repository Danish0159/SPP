import styled from "styled-components";

function Spinner() {
  return (
    <Wrapper>
      <div className="loadingSpinnerContainer">
        <div className="loadingSpinner"></div>
      </div>
    </Wrapper>
  );
}
export default Spinner;

const Wrapper = styled.div`
.loadingSpinnerContainer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loadingSpinner {
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #424d83 transparent #424d83 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;