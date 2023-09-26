import React, { useState } from 'react'
import Navbar from './Navbar'

export default function NewContact() {

  const [newContact, setNewContact] = useState({
    "first_name" : "",
    "last_name" : "",
    "email" : "",
    "phone_number": "",
    "address": "",
    "image_path" : ""
  })

  function handleChange(event){
    const {value, name} = event.target
    setNewContact((preValue) => ({...preValue, [name]: value}));

    console.log(newContact)
  }



  return (
    <div>
      <Navbar />

      <form className='new-contact'>
        <input
          placeholder='First Name'
          type='text'
          name='first_name'
          value={newContact.first_name}
          onChange={handleChange}
        />

        <input
          placeholder='Last Name'
          type='text'
          name='last_name'
          value={newContact.last_name}
          onChange={handleChange}
        />

        <input
          placeholder='Email'
          type='email'
          name='email'
          value={newContact.email}
          onChange={handleChange}
        />

        <input
          placeholder='Phone Number'
          type='tel'
          name='phone_number'
          value={newContact.phone_number}
          onChange={handleChange}
        />

        <textarea
          placeholder='Adress'
          name='address'
          value={newContact.address}
          onChange={handleChange}
        />

        <textarea 
          placeholder="Image URL"
          name="image_path" 
          value={newContact.image_path}
          onChange={handleChange}
        />

        <button type='submit'>Add</button>

        <p>New contact has been added successfully!</p>

      </form>

    </div>
  )
}
