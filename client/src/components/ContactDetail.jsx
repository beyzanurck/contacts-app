import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

export default function ContactDetail(props) {
  
  const { contactId } = useParams();
  let { state } = useLocation();

  console.log(state)

  return (
    <div className='contact-detail'>
      <p>{contactId}</p>
      
    </div>
  )
}

