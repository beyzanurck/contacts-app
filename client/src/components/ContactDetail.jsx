import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';

export default function ContactDetail(props) {
  
  const { contactId } = useParams();
  let { state } = useLocation();

  // console.log(state)
  // console.log(state.person.first_name)

  const deleteContact = async (id) => {
    try {
      const deleteContact = await fetch(`http://localhost:1212/${id}`, {
        method: "DELETE"
      });

    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className='contact-detail'>

      <img className="circle-img" src={state.person.image_path} alt="avatar_img" />
      
      <h2>{state.person.first_name} {state.person.last_name}</h2>
      
      <p>{state.person.phone_number}</p>
      <p>{state.person.email}</p>
      <p>{state.person.address}</p>

      <div className='edit-delete-buttons'>
        <button>Edit</button>
        <Link to="/" >
          <button onClick={() => {deleteContact(contactId)}}>Delete</button>
        </Link>
      </div>
    
    </div>
  )
}

