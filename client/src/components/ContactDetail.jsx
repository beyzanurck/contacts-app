import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

export default function ContactDetail(props) {
  
  const { contactId } = useParams();
  let { state } = useLocation();

  // console.log(state)
  // console.log(state.person.first_name)

  return (
    <div className='contact-detail'>

      <img className="circle-img" src={state.person.image_path} alt="avatar_img" />
      
      <h2>{state.person.first_name} {state.person.last_name}</h2>
      
      <p>{state.person.phone_number}</p>
      <p>{state.person.email}</p>
      <p>{state.person.address}</p>

      <div className='edit-delete-buttons'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    
    </div>
  )
}

