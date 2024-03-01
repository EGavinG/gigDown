import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import Checklist from '../Checklist/Checklist'
import './ChecklistContent.css'

function ChecklistContent() {

  const checklistData = [
    { id: 1, title: "Track 1", artist: 'Artist', downloaded: false },
    { id: 2, title: "Track 2", artist: 'Artist', downloaded: true },
    { id: 3, title: "Track 3",  artist: 'Artist',downloaded: false }
  ];

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
  };

  return (
    <main className='ChecklistData'>
      <Form onSubmit={handleFormSubmit}/>
      <Checklist checklist={checklist}/>
    </main>
  );
}

export default ChecklistContent;