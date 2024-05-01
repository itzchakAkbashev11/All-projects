import React, { useContext } from 'react'
import GetDataContext from '../context/getDataContext'
import ButtonsNav from './unVisual/ButtonsNav';
import { Table } from "flowbite-react";

// textData component contains the table to show the details in numbers 

const TextData = () => {
    const { data, setData } = useContext(GetDataContext)
    console.log(data.atltitue);
    return (
        <>
                    <h1 className='text-center text-2xl text-blue-500'>AirForce Project</h1>

            <ButtonsNav />
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Body className="divide-y">
                        <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-2xl">
                                Altitue
                            </Table.Cell>
                            <Table.Cell className='text-2xl'>{data.atltitue}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="text-2xl bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                HIS
                            </Table.Cell>
                            <Table.Cell>{data.his}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="text-2xl bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-2xl">ADI</Table.Cell>
                            <Table.Cell>{data.adi}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}












export default TextData