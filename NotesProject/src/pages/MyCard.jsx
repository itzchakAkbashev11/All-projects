import React from 'react'
import { Button, Card } from 'flowbite-react';
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

// תצוגה של כרטיס התקייה
const MyCard = ({ folderKey, folderName, time, color, deleteFolder }) => {
  const nav = useNavigate();
  console.log(folderKey);

  const takeFirstTwoWords = (sentence) => {

    const noteWords = sentence.trim().split(/\s+/);

    if (noteWords.length >= 2) {
      const min_sentence = noteWords.slice(0, 2).join(" ");
      return min_sentence.substring(0, 10) + " ..."
    }

    else {
      const min_sentence = sentence.substring(0, 10);
      return min_sentence + " ..."
    }
  }
  return (

    <div>
      <Card style={{ background: `${color}` }} className="max-w-sm m-6 w-72">

        <div className='flex justify-between'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {takeFirstTwoWords(folderName) ? takeFirstTwoWords(folderName) : "No Name"}
          </h5>
          <TiDelete onClick={() => deleteFolder(folderKey)} cursor="pointer" size={30} />
        </div>

        <div className="font-normal text-gray-700 dark:text-gray-400 text-center">
          <span className='font-bold px-4'>Date:{time.dayOfMonth}/{time.month}/{time.year}</span>
          <span className='font-bold'>Time: {time.hour > 9 ? time.hour : `0` + time.hour}:{time.minutes > 9 ? time.minutes : `0` + time.minutes}</span>
        </div>

        <Button onClick={() => nav("/folders/notes", { state: { folderId: folderKey } })}>
          Enter Folder
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
    </div>
  )
}

export default MyCard






