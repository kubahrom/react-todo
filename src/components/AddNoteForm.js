import React from 'react';

const AddNoteForm = ({ setOpenForm }) => {
  const handleClick = () => {
    setOpenForm(true);
  };
  return (
    <button
      className="btn-floating btn-large waves-effect waves-light add-note-btn"
      onClick={handleClick}
    >
      <i className="material-icons">add</i>
    </button>
  );
};

export default AddNoteForm;
