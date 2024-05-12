import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskList } from './task_list/taskList';
import { AddModal } from './addModal/addModal';
import { NoteState } from './task_list/taskListNote';

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
      <AddModal
        isOpen={modalOpen}
        onClose={handleClose}
        taskListNotes={taskListNotes}
      />
    </div>
  );
}

export default App;
