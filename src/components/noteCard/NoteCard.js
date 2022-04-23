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

const NoteCard = ({ note, handleDelete, isReload, setIsReload}) => {

  return (
    <div className="col mt-5" style={{ position: "relative" }}>
      <div className="rounded h-100 color-card-body-247881 note-card">
        <div
          className=" bg-info  rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">
            {" "}
            {note.userName.substring(0, 1)}
          </p>
        </div>
        <div className="card-body mt-5">
          <h5 className="card-title">Author : {note.userName}</h5>
          <p className="card-text">{note.textData}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              onClick={() => handleDelete(note._id)}
              className="color-btn-30AADD btn btn-sm mx-2 "

            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
          <UpdateModal note={note} isReload={isReload} setIsReload={setIsReload} id={note._id}/>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;