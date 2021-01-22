import React from 'react';

const Note = ({ text, completed, notes, setNotes, id }) => {
  const deleteHandler = () => {
    setNotes(notes.filter(note => note.id !== id));
  };
  const completeHandler = () => {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          return { ...note, completed: !note.completed };
        }
        return note;
      })
    );
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col s12 l10">
            <p
              className={`left-align flow-text note-text ${
                completed ? 'completed grey-text text-darken-1' : ''
              } `}
            >
              {text}
            </p>
          </div>
          <button
            className={`btn red waves-effect waves-light ${
              completed ? 'orange' : 'green'
            }`}
            onClick={completeHandler}
          >
            <i className="material-icons prefix">
              {completed ? 'refresh' : 'check'}
            </i>
          </button>
          <button
            className="btn red waves-effect waves-light"
            onClick={deleteHandler}
          >
            <i className="material-icons prefix">delete</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
