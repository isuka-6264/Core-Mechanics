import { useState, useEffect } from 'react'

const API_URL = 'http://localhost/Core%20Mechanics/coremech-php/api/index.php/api/v1'

function UserList({ refresh }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
        setLoading(false)
      })
      .catch(() => {
        setError('Ошибка загрузки данных')
        setLoading(false)
      })
  }, [refresh])

  if (loading) return <p className="status">Загрузка...</p>
  if (error) return <p className="status error">{error}</p>

  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.length === 0
        ? <p className="status">No users found.</p>
        : <ul>
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>
      }
    </div>
  )
}

export default UserList