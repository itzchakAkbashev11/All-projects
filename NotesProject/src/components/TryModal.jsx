
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function TryModal() {
  const [openModal, setOpenModal] = useState(false);
  const [userText, setUserText] = useState("");

  return (
    <>
      <Button className='mx-3' onClick={() => setOpenModal(true)}>MY NOTE</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header > <span className='text-green-500'> {userText}</span></Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <input className="h-28 p-2 w-full text-base leading-relaxed text-gray-500 dark:text-gray-400" 
            placeholder='Your text here'
            value={userText}
            onChange={(e)=>{
                setUserText(e.target.value)
            }}/>             
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false) }>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default TryModal
