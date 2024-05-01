import React, { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import GetDataContext from './context/getDataContext'

const App = () => {

  const [data, setData] = useState(0)
//use the context and provide the data that contains the details
  return (
    <>
      <GetDataContext.Provider  value={{
        data,
        setData
      }}>
        <AppRoutes />
      </GetDataContext.Provider>
    </>
  )
}
export default App
