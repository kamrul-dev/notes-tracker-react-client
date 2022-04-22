import React from 'react';
import UpdateModal from '../updateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
  border: "1px solid #00FFC6",
  padding: "5px"
};

const NoteCard = ({ note }) => {


  return (
    <div className="col mt-5" style={{ position: "relative" }}>
      <div className="rounded h-100 color-card-body-247881 note-card">
        <div
          className=" bg-info  rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">
            {" "}
            {note.user_name.substring(0, 1)}
          </p>
        </div>
        <div className="card-body mt-5">
          <h5 className="card-title">Author : {note.user_name}</h5>
          <p className="card-text">{note.text}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              className="color-btn-30AADD btn btn-sm mx-2 "
              
            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
          <UpdateModal  />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;