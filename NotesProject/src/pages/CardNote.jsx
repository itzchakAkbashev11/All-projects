import { Button, Card, Label, Modal, Select, Textarea } from 'flowbite-react'
import React, { useContext, useRef, useState } from 'react'
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import NotesContext from '../context/notesContext';
import EditedNote from './EditedNote';
import Folders from './Folders';
// תצוגה של כרטיס פתק
const CardNote = ({ folderId, noteKey, NoteName, time, color, deleteNote, }) => {


    const { notesArr, setNotesArr, folders, setFolders } = useContext(NotesContext)
    const [openModal, setOpenModal] = useState(false);
    const updateInputRef = useRef()
    const UpdateColor = useRef()
    const UpdateFolderId = useRef()
    console.log(UpdateColor);
    const options = [
        { hex: "#add8e6", name: " Light Blue" },
        { hex: "#f08080", name: " Light Coral" },
        { hex: "#90ee90", name: " Light Green" },
        { hex: "#ffffe0", name: " Light Yellow" },
        { hex: "#c8a2c8", name: " Light Purple" },
        { hex: "#ffcccb", name: " Light Orange" },
        { hex: "#ffb6c1", name: " Light Pink" },
        { hex: "#e0ffff", name: " Light Cyan" },
        { hex: "#d2b48c", name: " Light Brown" }
    ].map(color => <option style={{ background: color.hex }} key={color.name} value={color.hex}>{color.name}</option>)

    // פונקתיה ל ... לשם תקיה.פתק
    const takeFirstTwoWords = (sentence) => {

        const noteWords = sentence.trim().split(/\s+/);

        if (noteWords.length >= 2) {
            const min_sentence = noteWords.slice(0, 2).join(" ");
            return min_sentence.substring(0, 10)
        }

        else {
            const min_sentence = sentence.substring(0, 10);
            return min_sentence
        }
    }

    const editNote = (updateNoteName, newColor, newFolderId) => {
        const serializedNote = notesArr.map((note) => {
            if (note.props.noteKey == noteKey) {
                return {
                    folderId: newFolderId ? newFolderId : note.props.folderId,
                    noteKey: note.props.noteKey,
                    time: note.props.time,
                    noteName: updateNoteName ? updateNoteName : note.props.NoteName,
                    color: newColor ? newColor : note.props.color
                }
            }
            else {
                return {
                    folderId: note.props.folderId,
                    noteKey: note.props.noteKey,
                    time: note.props.time,
                    noteName: note.props.NoteName,
                    color: note.props.color
                }
            }

        });
        localStorage.setItem('Notes', JSON.stringify(serializedNote));

        const storedNotes = JSON.parse(localStorage.getItem('Notes'));
        if (storedNotes) {
            const parsedNotes = storedNotes.map((note) => (
                <CardNote
                    folderId={note.folderId}
                    key={note.noteKey}
                    noteKey={note.noteKey}
                    time={note.time}
                    NoteName={note.noteName}
                    color={note.color}
                    deleteNote={() => deleteNote(note.noteKey)}
                />
            ));
            setNotesArr(parsedNotes);
        }
    }
    return (
        <div>
            <Card style={{ background: `${color}` }} className="max-w-sm m-6 w-72">

                <div className='flex justify-between'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                        {takeFirstTwoWords(NoteName) ? takeFirstTwoWords(NoteName) : "No Name"}{<span className='text-sky-700 text-sm ps-3'>See More...</span>}
                    </h5>
                    <TiDelete onClick={() => deleteNote(noteKey)} cursor="pointer" size={30} />
                </div>
                <div className="font-normal text-gray-700 dark:text-gray-400 text-center">
                    <span className='font-bold px-4'>Date:{time.dayOfMonth}/{time.month}/{time.year}</span>
                    <span className='font-bold'>Time: {time.hour > 9 ? time.hour : `0` + time.hour}:{time.minutes > 9 ? time.minutes : `0` + time.minutes}</span>

                </div>
                <Button onClick={() => { setOpenModal(true); }}>
                    Edit Note
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button>


                <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={updateInputRef}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="TEXT HERE" />
                                </div>
                                <Textarea defaultValue={NoteName} className='size-60 w-full' ref={updateInputRef} id="email" placeholder="Text Here" />
                            </div>
                            <div>
                                <div className="w-[200] mb-3">
                                    <Select ref={UpdateColor}>
                                        <option className='h-5'>Change Color</option>
                                        {options}
                                    </Select>
                                </div>
                                <div className="w-[200]">
                                    {/* <Select ref={UpdateFolderId} >
                                        {folders.filter(folder=>folder.props.folderKey!=folderId)
                                        .map(folder => 
                                            <option
                                                value={folder.props.folderKey}
                                                key={folder.props.folderName}>
                                                {folder.props.folderName}
                                            </option>
                                        )}

                                    </Select> */}
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <Button onClick={() => {
                                    editNote(updateInputRef.current.value, UpdateColor.current.value,)
                                    setOpenModal(false)
                                }} >Save Changes</Button>
                            </div>

                        </div>
                    </Modal.Body>
                </Modal>
            </Card>
        </div>
    )
}

export default CardNote