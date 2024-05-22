import { useState } from "react";
import { NoteState, taskListNoteProps } from "./taskListNote";

export interface taskListProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    taskListNotes:  taskListNoteProps[];
}

export const TaskList: React.FC<taskListProps> = ({setModalOpen,taskListNotes}) => {

    const handleModalOpen = () => {
        setModalOpen(true)
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
                )}
            </div>
        </div>
    );
};