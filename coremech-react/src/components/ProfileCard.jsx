import { useState } from 'react'

function ProfileCard() {
  const [avatar, setAvatar] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatar(url)
    }
  }

  return (
    <div className="card">
      <h1>Моя визитка</h1>
      <div className="avatar">
        {avatar
          ? <img src={avatar} alt="Avatar" width={120} height={120} style={{borderRadius:'50%', objectFit:'cover'}}/>
          : <div className="avatar-placeholder">No Photo</div>
        }
      </div>
      <input type="file" accept="image/*" onChange={handleImageUpload}/>
      <ul>
        <li><strong>Имя:</strong> Во Мань Линь</li>
        <li><strong>Специальность:</strong> ИТКН</li>
        <li><strong>Группа:</strong> БИВТ-24-3</li>
      </ul>
      <p>Passionate about web development and building cool projects. Currently learning React and NestJS.</p>
    </div>
  )
}

export default ProfileCard