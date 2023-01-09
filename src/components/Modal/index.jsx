import styled from "styled-components";

const Modal = ({ setModal, modal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContainer modalVisible={modal} onClick={closeModal}>
      <LoginModal modalVisible={modal} onClick={(e) => e.stopPropagation()}>
        
      </LoginModal>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes fadeIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @keyframes fadeOut {
    0% {
      background-color: rgba(0, 0, 0, 0.5);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  animation: ${(props) => (props.modalVisible ? "fadeIn" : "fadeOut")} 0.6s;
`;

const LoginModal = styled.div`
  width: 540px;
  height: 350px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.black};
  @keyframes slideIn {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(130%);
    }
  }
  animation: ${(props) => (props.modalVisible ? "slideIn" : "slideOut")} 0.6s;
`;