import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Checklist from '../Checklist/Checklist';
import './ChecklistContent.css';

function ChecklistContent() {
  const [checklist, setChecklist] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getChecklist();
  }, []);

  const getChecklist = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/checklist');
      if (!response.ok) {
        throw new Error('Failed to fetch checklist data');
      }
      const data = await response.json();
      setChecklist([...checklist, ...data.checklist]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (trackData) => {
    try {
      const response = await fetch('http://localhost:3001/checklist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trackData),
      });
      if (!response.ok) {
        throw new Error('Failed to add track to checklist');
      }
      const data = await response.json();
      console.log('Track added to checklist:', data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/checklist/${id}`, {
        method: 'DELETE',
      });
      const updatedChecklist = checklist.filter(track => track.id !== id);
      setChecklist(updatedChecklist);
      console.log('Track deleted from checklist');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className='ChecklistData'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Form onSubmit={handleFormSubmit} />
      <Checklist checklist={checklist} onDelete={handleDelete} />
    </main>
  );
}

export default ChecklistContent;
