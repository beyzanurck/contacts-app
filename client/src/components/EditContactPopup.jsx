import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

export default function EditContactPopup({show , onClose, contact, onContactChange}) {

  const [editContact, setEditContact] = useState({
    "first_name" : contact.person.first_name,
    "last_name" : contact.person.last_name,
    "email" : contact.person.email,
    "phone_number": contact.person.phone_number,
    "address": contact.person.address,
    "image_path" : contact.person.image_path
  })

  function handleChange (event) {

    const { value, name } = event.target;
    setEditContact((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const editTheContact= async (editContact) => {
    try {

      const {first_name, last_name, email, phone_number, address, image_path} = editContact;

      const body = {first_name, last_name, email, phone_number, address, image_path};

      const response = await fetch(`http://localhost:1212/${contact.person.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      if (response.ok) {
        onContactChange(editContact);
      } else {
        console.error('Failed to update the contact');
      }

    } catch (error) {
      console.error(error.message)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    editTheContact(editContact);
  }


  return (
    <div>

      <Modal show={show} onHide={onClose} size="lg">

        <Modal.Header closeButton>
        <Modal.Title>Edit Person</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <form className="form-editEvent">

            <input
              name="first_name"
              onChange={handleChange}
              value={editContact.first_name}
              placeholder="First Name"
            />

            <input
              name="last_name"
              onChange={handleChange}
              value={editContact.last_name}
              placeholder="Last Name"
            />

            <input
            placeholder='Phone Number'
            type='tel'
            name='phone_number'
            value={editContact.phone_number}
            onChange={handleChange}
            />

            <textarea
              placeholder='Adress'
              name='address'
              value={editContact.address}
              onChange={handleChange}
            />

            <textarea 
              placeholder="Image URL"
              name="image_path" 
              value={editContact.image_path}
              onChange={handleChange}
            />
          </form>
                
        </Modal.Body>

        <Modal.Footer>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Save
          </Button>

          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>

        </Modal.Footer>

      </Modal>
      
    </div>
  )
}
