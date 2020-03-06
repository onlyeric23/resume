import React from "react"
import Image from "../image"

import "./styles.scss"

const Profile = ({ name, title, phone, email, address }) => {
  return (
    <div className="block profile-block">
      {/* <div className="headshot-container">
        <Image />
      </div> */}
      <div className="text">
        <h1>{name}</h1>
        <div>{title}</div>
        <div>{address}</div>
        <div>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  )
}

export default Profile
