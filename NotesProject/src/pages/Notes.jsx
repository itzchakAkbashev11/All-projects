import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Checkbox, Label, Modal, Select, TextInput, Textarea } from 'flowbite-react';
import MyCard from './MyCard';
import { FaArrowRightLong } from "react-icons/fa6";
import { v4 } from 'uuid';
import CardNote from './CardNote'
import NotesContext from '../context/notesContext'
import { useLocation, useNavigate } from 'react-router-dom';
// import EditedNote from './EditedNote';
// מציג את העמוד עם כל הפתקים לפי התקייה

const Notes = () => {
    const { notesArr, setNotesArr } = useContext(NotesContext)
    const [openModal, setOpenModal] = useState(false);
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
    ].map(color => <option style={{background:color.hex}} key={color.name} value={color.hex}>{color.name}</option>)
    const colorRef = useRef()
    const inputRef = useRef()
    const nav = useNavigate();
    const location = useLocation();
    const { folderId } = location.state;

    let currentDate = new Date();
    // Get the day, month, and year
    let dayOfMonth = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Adding 1 because January is 0
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    console.log(folderId);

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        const serializedNote = notesArr.map((note) => ({
            folderId: note.props.folderId,
            noteKey: note.props.noteKey,
            time: note.props.time,
            noteName: note.props.NoteName,
            color: note.props.color,  // <-- Use the same name here
        }));
        localStorage.setItem('Notes', JSON.stringify(serializedNote));
    }, [notesArr]);

    const filterAr = notesArr.filter(note => note.props.folderId === folderId);
    console.log(filterAr);

    const deleteNote = (noteKey) => {
        setNotesArr((prev) => prev.filter(note => note.props.noteKey !== noteKey));
    };

    const addNote = () => {
        if (inputRef.current.value && colorRef.current.value) {
            const id = v4();
            setNotesArr([
                ...notesArr, <CardNote
                    key={id}
                    folderId={folderId}
                    noteKey={id}
                    NoteName={inputRef.current.value}
                    time={{ dayOfMonth, month, year, hour, minutes }}
                    color={colorRef.current.value}
                    deleteNote={deleteNote}
                    />
            ])
            setOpenModal(false)
        }
        else {
            alert("error")

        }
    }
    return (
        <div className='pb-4 '>
            <div className=' bg-slate-200 flex flex-row-reverse p-5'>
                <FaArrowRightLong cursor={"pointer"} className=' size-10'
                    onClick={() => {
                        nav("/folders")
                    }} />
            </div>
            <div className='flex items-center pt-5 justify-center  bg-slate-200 h-48'>
                <Button onClick={() => setOpenModal(true)}>ADD NOTE</Button>
                <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={inputRef}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="TEXT HERE" />
                                </div>
                                <Textarea className='size-60 w-full' ref={inputRef} id="email" placeholder="Text Here" />
                            </div>
                            <div>
                                <div className="w-[200]">
                                    <Select ref={colorRef}>
                                        {options}
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <Button onClick={() => {
                                    addNote()
                                }} >Add Note</Button>
                            </div>

                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <div className='flex flex-wrap '>
                {filterAr}
            </div>
        </div>
    )
}

export default Notes

