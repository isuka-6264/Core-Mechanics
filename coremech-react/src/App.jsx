import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import UserList from './components/UserList'
import RegisterForm from './components/RegisterForm'

function App() {
  const [refresh, setRefresh] = useState(0)

  return (
    <div>
      <ProfileCard />
      <RegisterForm onRegister={() => setRefresh(r => r + 1)} />
      <UserList refresh={refresh} />
    </div>
  )
}

export default App