import React, { useContext, useEffect, useRef } from 'react'
import { Button, Checkbox, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import MyCard from './MyCard';
import { v4 } from 'uuid';
import NotesContext from '../context/notesContext';
// מציג את העמוד עם כל התקיות
const Folders = () => {
    const { notesArr, setNotesArr, openModal, setOpenModal,folders, setFolders } = useContext(NotesContext)
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
    // const [openModal, setOpenModal] = useState(false);
    // const [folders, setFolders] = useState([]);
    const folderRef = useRef(1)
    console.log(folders);
    const colorRef = useRef(null)
    const inputRef = useRef(null)

    let currentDate = new Date();
    // Get the day, month, and year
    let dayOfMonth = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Adding 1 because January is 0
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    const deleteFolder = (folderKey) => {
        setFolders((prev) => prev.filter(folder => folder.props.folderKey !== folderKey))
        setNotesArr((prev) => prev.filter(note => note.props.folderId !== folderKey))
        // Update local storage to remove both folder and associated notes
        const updatedFolders = folders.filter(folder => folder.props.folderKey !== folderKey);
        const updatedNotes = notesArr.filter(note => note.props.folderId !== folderKey);

        const serializedFolders = updatedFolders.map((folder) => ({
            folderKey: folder.props.folderKey,
            time: folder.props.time,
            folderName: folder.props.folderName,
            color: folder.props.color,
        }));

        const serializedNotes = updatedNotes.map((note) => ({
            folderId: note.props.folderId,
            noteKey: note.props.noteKey,
            time: note.props.time,
            noteName: note.props.NoteName,
            color: note.props.color,
        }));

        localStorage.setItem('folders', JSON.stringify(serializedFolders));
        localStorage.setItem('Notes', JSON.stringify(serializedNotes));

    };

    const addFolder = () => {
        if (inputRef.current.value && colorRef.current.value) {
            const id = v4();
            setFolders([
                ...folders, <MyCard
                    key={id}
                    folderKey={id}
                    folderName={inputRef.current.value}
                    time={{ dayOfMonth, month, year, hour, minutes }}
                    color={colorRef.current.value}
                    deleteFolder={deleteFolder} />
            ])
            setOpenModal(false)
        }
        else {
            alert("enter name folder")

        }
    }

    useEffect(() => {
        const storedFolders = JSON.parse(localStorage.getItem('folders'));
        if (storedFolders) {
            const parsedFolders = storedFolders.map((folder) => (
                <MyCard
                    key={folder.folderKey}
                    folderKey={folder.folderKey}
                    time={folder.time}
                    folderName={folder.folderName}
                    color={folder.color}
                    deleteFolder={() => deleteFolder(folder.folderKey)}
                />
            ));
            setFolders(parsedFolders);
        }
    }, []);



    useEffect(() => {
        const serializedFolders = folders.map((folder) => ({
            folderKey: folder.props.folderKey,
            time: folder.props.time,
            folderName: folder.props.folderName,
            color: folder.props.color,  // <-- Use the same name here
        }));
        localStorage.setItem('folders', JSON.stringify(serializedFolders));
    }, [folders]);


    return (
        <>
            <form className='flex items-center pt-5 justify-center  bg-slate-200 h-48'>
                <Button onClick={() => setOpenModal(true)}>ADD FOLDER</Button>
                <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={inputRef}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Folder_Name" />
                                </div>
                                <TextInput ref={inputRef} id="email" placeholder="Name Folder Here" onKeyDown={(e) => { e.key == "Enter" && addFolder() }} />
                            </div>
                            <div>
                                <div className="w-[200]">
                                    <Select ref={colorRef}>
                                        {options}
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <Button type='submit' onClick={() => {
                                    addFolder()
                                }} >Add Folder</Button>
                            </div>

                        </div>
                    </Modal.Body>
                </Modal>
            </form>
            <div className='flex flex-wrap '>
                {folders}
            </div>

        </>
    );

}

export default Folders