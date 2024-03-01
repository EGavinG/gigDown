import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import Checklist from '../Checklist/Checklist'
import './ChecklistContent.css'

function ChecklistContent() {

  const getChecklist = () => {
    fetch('http://localhost:3001/checklist')
    .then(response => response.json())
    .then(data => setChecklist([...checklist, ...data.checklist]))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getChecklist();
  }, [])

  const [checklist, setChecklist] = useState([]);

  const handleFormSubmit = (trackData) => {
    setChecklist(checklistData => [...checklistData, trackData]);
    
    fetch('http://localhost:3001/checklist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add track to checklist');
      }
      return response.json();
    })
    .then(data => {
      console.log('Track added to checklist:', data);
    })
    .catch(error => console.error('Error adding track to checklist:', error));
  };

  const handleDelete = (id) => {
    deleteTrackInput(id);
    setChecklist(checklist.filter(track => track.id !== id));
  };


  const deleteTrackInput = (id) => {
    fetch(`http://localhost:3001/checklist/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete track from checklist');
      }
      console.log('Track deleted from checklist');
    })
    .catch(error => console.error('Error deleting track from checklist:', error));
  };

  return (
    <main className='ChecklistData'>
      <Form onSubmit={handleFormSubmit}/>
      <Checklist checklist={checklist} onDelete={handleDelete}/>
    </main>
  );
}

export default ChecklistContent;