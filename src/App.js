import { useState, useEffect } from 'react';
import M from 'materialize-css';
import AddNoteForm from './components/AddNoteForm';
import Filter from './components/Filter';
import Form from './components/Form';
import { NoteProvider } from './components/NoteContext';
import NoteList from './components/NoteList';

function App() {
  const [filter, setFilter] = useState('all');
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <NoteProvider>
      <div className="App">
        <div className="container content">
          <div className="row center-align">
            <h4>NOTES</h4>
            {openForm === true ? <Form setOpenForm={setOpenForm} /> : ''}
            <Filter setFilter={setFilter} />
            <NoteList filter={filter} />
          </div>
        </div>
        {openForm === false ? <AddNoteForm setOpenForm={setOpenForm} /> : ''}
      </div>
    </NoteProvider>
  );
}

export default App;
