import Modal from "react-modal";
import Image from "next/image";
import emailImage from "@assets/images/email.svg";

type Props = { show: boolean; onClose: () => void };

const customModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    opacity: ".95",
    background: "#161616",
    border: "none",
  },
};

Modal.setAppElement("#__next");

export default function ContactModal({ show, onClose }: Props) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={customModalStyle}
      overlayClassName="overlay"
    >
      <div className="d-flex flex-column justify-items-center align-items-center">
        <Image draggable={false} src={emailImage} alt="" />
        <p className="h4 text-center px-md-5">
          Muito obrigado pelo contato! Recebi seu email e em breve retornarei :)
        </p>
        <div className="w-100 px-md-5 my-4">
          <button
            type="button"
            className="btn btn-dark w-100"
            data-bs-dismiss="modal"
            onClick={onClose}
          >
            <span className="h3">Fechar</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
