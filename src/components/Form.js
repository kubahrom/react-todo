import React, { useEffect, useState, useContext } from 'react';
import { NoteContext } from './NoteContext';
import M from 'materialize-css';
import { nanoid } from 'nanoid';

const Form = ({ setOpenForm }) => {
  const [inputNote, setInputNote] = useState('');
  const setNotes = useContext(NoteContext)[1];
  useEffect(() => {
    M.AutoInit();
  }, []);

  const submitHandler = e => {
    e.preventDefault();
  };

  const handleInputChange = e => {
    setInputNote(e.target.value);
  };

  const handleAddNote = () => {
    if (inputNote !== '') {
      const newNote = {
        id: nanoid(),
        text: inputNote,
        completed: false,
      };
      setNotes(prevNotes => [...prevNotes, newNote]);
      setInputNote('');
    }
  };

  const handleClose = () => {
    setOpenForm(false);
  };
  return (
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <div className="row note-form">
            <i className="material-icons close-note-form" onClick={handleClose}>
              close
            </i>
            <form className="col s12" onSubmit={submitHandler}>
              <div className="input-field col s12">
                <i className="material-icons prefix">lightbulb_outline</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  value={inputNote}
                  onChange={handleInputChange}
                />
                <label htmlFor="icon_prefix">New note</label>
              </div>
              <div className="col s6 offset-s6 full-height right-align">
                <button
                  className="btn waves-effect waves-light"
                  onClick={handleAddNote}
                >
                  <i className="material-icons left">add_circle_outline</i>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
