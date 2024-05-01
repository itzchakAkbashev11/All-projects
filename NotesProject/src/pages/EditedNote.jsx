import React, { useContext, useState } from 'react'
import { Button, Label, Modal, Select, Textarea } from 'flowbite-react';
import NotesContext from '../context/notesContext';

const EditedNote = ( inputRef, NoteName, time, color, colorRef, options,) => {
    const { text, setText } = useState(inputRef)
    const [openModal, setOpenModal] = useState(false);
  

    return (
        <>
            <div>
                <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={inputRef}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="TEXT HERE" />
                                </div>
                                <Textarea className='size-60 w-full' id="email" placeholder="Text Here"  />
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
                                    setText()
                                }} >save changes</Button>
                            </div>

                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default EditedNote