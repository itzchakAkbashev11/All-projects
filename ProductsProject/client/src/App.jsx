import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserContext from './context/userContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AUTH_USER_URL } from './routes/urls'
import Loading from './shared/Loading'


function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log(user)
  }, [user])

  const authUser = async () => {
    try {
      const { data } = await axios.post(AUTH_USER_URL);
      setUser(data.user)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    authUser()
  }, [])
  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}>
      <BrowserRouter>
        <Loading on={loading} />
        <AppRoutes />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
