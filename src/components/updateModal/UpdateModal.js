import React, { useState } from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");


//don't worry its just a package for modal. just go and explore https://www.npmjs.com/package/react-modal

export default function UpdateModal({ id, isReload, setIsReload }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const textData = event.target.textData.value;

    const url = `http://localhost:5000/note/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ userName, textData })
    })
      .then(res => res.json())
      .then(data => {
        alert('Are you sure to update?');
        setIsReload(!isReload);
        event.target.reset();
        closeModal();
      })
  }

  return (
    <div>
      <button onClick={openModal} className="color-btn-30AADD btn-sm btn">
        {" "}
        Update
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn d-block color-btn-30AADD">
          X
        </button>
        <div className="mb-1 mt-1 fw-bold">Please insert text for update</div>
        <div className=" p-3 color-card-body-247881 rounded">
          <form onSubmit={handleUpdate} className="container " >
            <div className="input-group mb-3 mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                aria-label="Username"
                name="userName"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="textData"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="submit" className="btn color-btn-30AADD" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

