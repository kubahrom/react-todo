import React, { createContext, useState } from 'react';

export const NoteContext = createContext();

export const NoteProvider = props => {
  let localNotes = JSON.parse(localStorage.getItem('notes'));
  if (localNotes === null) {
    localStorage.setItem('notes', JSON.stringify([]));
    localNotes = [];
  }
  const [notes, setNotes] = useState(localNotes);

  return (
    <NoteContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NoteContext.Provider>
  );
};
