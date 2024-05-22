import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskList } from './taskList/taskList';
import { NoteState } from './taskList/taskListNote';
import { CreateTaskModal } from './CreateTaskModal/CreateTaskModal';

function App() {

  // states
  const [modalOpen,setModalOpen] = useState(false)
  const [taskListNotes, SetTaskListNotes] = useState(NoteState)

  //handlers
  const handleClose = () => {
    setModalOpen(false)
  }


  return (
    <div className="App">
      <TaskList
        setModalOpen={setModalOpen}
        taskListNotes={taskListNotes}
      />
      <CreateTaskModal
        isOpen={modalOpen}
        onClose={handleClose}
        taskListNotes={taskListNotes}
      />
    </div>
  );
}

export default App;
