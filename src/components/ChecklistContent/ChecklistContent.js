import React from 'react'
import { useState } from 'react'
import Form from '../Form/Form'
import Checklist from '../Checklist/Checklist'
import './ChecklistContent.css'

function ChecklistContent() {

  const checklistData = [
    { id: 1, title: "Track 1", artist: 'Artist', downloaded: false },
    { id: 2, title: "Track 2", artist: 'Artist', downloaded: true },
    { id: 3, title: "Track 3",  artist: 'Artist',downloaded: false }
  ];

  const [checklist, setChecklist] = useState(checklistData);

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