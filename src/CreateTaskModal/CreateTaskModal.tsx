import { ChangeEventHandler, SetStateAction, useState } from "react";
import { taskListNoteProps } from "../taskList/taskListNote";


export interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    taskListNotes: taskListNoteProps[];

}

export const CreateTaskModal: React.FC<modalProps> = ({ isOpen, onClose, taskListNotes }) => {

    //states 
    const [noteName, setNoteName] = useState('')
    const [noteText, setNotetext] = useState('')

    //handlers
    const handleNameChange: ChangeEventHandler<HTMLInputElement> | undefined = (event) => {
        setNoteName(event.target.value);
    }
    const handleTextChange: ChangeEventHandler<HTMLInputElement> | undefined = (event) => {
        setNotetext(event.target.value);
    }
    //there is certanlt a way to make it more elegant but i didnt figuire out how
    const handleSave = () => {
        const newNote: taskListNoteProps = ({
            id: taskListNotes.length + 1,
            name: noteName,
            text: noteText,
            check: false,
        })
        taskListNotes.push(newNote)
        setNoteName('')
        setNotetext('')
        onClose();
    }

    if (isOpen) {
        return (
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-header">
                        <button className="close-button" onClick={onClose}><h2>close</h2></button>
                    </div>
                    <div className="modal-content">
                        <div className="modal-text-box">
                            <label className="name">Name :</label>

                                <input type="text" id='input-text' className="writable-field" onChange={handleNameChange} value={noteName} />

                        </div>
                        <div className="modal-text-box">
                            <label className="name">Note Text :</label>

                                <input type="text" id='input-text' className="writable-field" onChange={handleTextChange} value={noteText} />

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="save-button" onClick={handleSave}><h2>save</h2></button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}