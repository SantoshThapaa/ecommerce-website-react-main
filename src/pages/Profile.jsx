import React from 'react'
import { isAuthenticated } from '../auth/authIndex'

const Profile = () => {
  const { name, email } = isAuthenticated().user
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-75 p-4 d-flex align-items-center justify-content-center flex-column">
          <div className="circle" style={{width: '200px', height: '200px', aspectRatio:1, borderRadius: '100px' }}></div>
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
        </div>
      </div>
    </>
  )
}

export default Profile