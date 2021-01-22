import React, { useContext, useState, useEffect } from 'react';
import Note from './Note';
import { NoteContext } from './NoteContext';

const NoteList = ({ filter }) => {
  const [notes, setNotes] = useContext(NoteContext);
  const [filteredNotes, setFilteredNotes] = useState(notes.slice().reverse());

  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredNotes(
          notes
            .filter(note => note.completed === true)
            .slice()
            .reverse()
        );
        break;
      case 'uncompleted':
        setFilteredNotes(
          notes
            .filter(note => note.completed === false)
            .slice()
            .reverse()
        );
        break;
      default:
        setFilteredNotes(notes.slice().reverse());
    }
  }, [notes, filter]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="col s12">
      {filteredNotes.length === 0 ? <h5>You don't have any note.</h5> : ''}
      {filteredNotes.map(note => (
        <Note
          key={note.id}
          text={note.text}
          completed={note.completed}
          setNotes={setNotes}
          notes={notes}
          id={note.id}
        />
      ))}
    </div>
  );
};

export default NoteList;
