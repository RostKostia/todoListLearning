import { useState } from "react";
import { NoteState, taskListNoteProps } from "./taskListNote";


export interface taskListProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    taskListNotes: taskListNoteProps[];
    SetTaskListNotes: React.Dispatch<React.SetStateAction<taskListNoteProps[]>>;
}

export const TaskList: React.FC<taskListProps> = ({ setModalOpen, taskListNotes, SetTaskListNotes }) => {

    const handleModalOpen = () => {
        setModalOpen(true)
    }

    //very bad realisation in need of fixing but im out of ideas
    const handleCheck = (id: number) => {
        SetTaskListNotes(taskListNotes.map(note => 
            note.id === id ? {...note, check: !note.check}: note
        ))
    }

    return (
        <div className="task-list">
            <button className="add_button">
                <h1 onClick={handleModalOpen} className="note-button-text">
                    add new note
                </h1>
            </button>
            <div className="task-list-body">
                {taskListNotes.map((note) =>
                    <div className="task-list-note">
                        <div className="task-list-note-box">
                            <div className="note-head">
                                <div className="note-id">
                                    <h3>id:{note.id}</h3>
                                </div>
                                <div className="note-name">
                                    <h1 className="note-name-text">
                                        {note.name}
                                    </h1>
                                </div>
                            </div>
                            <div className="note-text">
                                <h3>
                                    {note.text}
                                </h3>
                            </div>
                        </div>
                        <div className="note-checkbox">
                            <input type="checkbox" className="note-input-checkbox" checked={note.check} onClick={() => handleCheck(note.id)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
