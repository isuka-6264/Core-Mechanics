import { useState } from 'react'

const API_URL = 'http://localhost/Core%20Mechanics/coremech-php/api/index.php/api/v1'

function RegisterForm({ onRegister }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async () => {
    setMessage('')
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()

      if (data.status === 'success') {
        setIsError(false)
        setMessage('User registered successfully!')
        setName('')
        setEmail('')
        setPassword('')
        onRegister()
      } else {
        setIsError(true)
        setMessage(data.message)
      }
    } catch {
      setIsError(true)
      setMessage('Ошибка загрузки данных')
    }
  }

  return (
    <div className="register-form">
      <h2>Register User</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
      {message && <p className={isError ? 'status error' : 'status success'}>{message}</p>}
    </div>
  )
}

export default RegisterForm