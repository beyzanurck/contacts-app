import React from 'react'

export default function ContactCard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.contacts.first_name} {props.contacts.last_name}</h2>
        <img className="circle-img" src={props.contacts.image_path} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.contacts.phone_number}</p>
        <p className="info">{props.contacts.email}</p>
        <p className="info">{props.contacts.address}</p>
      </div>
    </div>
  )
}
