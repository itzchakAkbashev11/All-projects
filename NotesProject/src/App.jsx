import './App.css'
import React, { useEffect, useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import NotesContext from './context/notesContext'

const App = () => {
  // היה אפשר להעביר את הVALUE באופן ישיר אבל עשיתי כבר עם סטייט אז השארי ככה
  const [note, setNote] = useState("Akbashev")
  const [notesArr, setNotesArr] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [folders, setFolders] = useState([]);

  // useEffect(()=>{
  //   note
  // },[])
  return (
    <>
      <NotesContext.Provider
        value={{ 
        note, setNote,
        notesArr, setNotesArr ,
        openModal, setOpenModal,
        folders, setFolders


        
        }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </NotesContext.Provider>

    </>
  )
}
export default App
