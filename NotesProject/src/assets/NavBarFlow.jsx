import { Button, Navbar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Link, Outlet,NavLink } from 'react-router-dom';
import NotesContext from '../context/notesContext';

function NavBarFlow() {
    const { note, setNote } = useContext(NotesContext)

    return (
        <>
            <Navbar className='bg-slate-600 text-white' >
                <Navbar.Brand href="http://localhost:5173/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold">Notes Website - {note}</span>
                </Navbar.Brand>
                <div className="flex md:order-2 p-2">
                    <Button className=' font-bold'>Get started</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <NavLink className='font-bold' to="/" >
                        Home
                    </NavLink>
                    <NavLink className='font-bold'  to="/about">About</NavLink>
                    <NavLink className='font-bold' to="/folders">Folders-Notes</NavLink>
                    <NavLink className='font-bold'  to="/pricing" >Pricing</NavLink>
                    <NavLink className='font-bold'  to="/contact" >Contact</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default NavBarFlow
