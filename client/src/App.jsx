import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import ContactCard from './components/ContactCard';

function App() {

  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    try {
      const response = await fetch('http://localhost:1212');

      if(!response.ok) {
        throw new Error('response was not ok');
      }

      const allContacts = await response.json();
      setContacts(allContacts)
      console.log(contacts[0])

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <Navbar />
      <div  className="cards-container">
        {contacts.length > 0 ? 
          contacts.map((item, index) => (
            <ContactCard key={index} contacts = {item} />
          )) : ` `}
      </div>
    </div>
  )
}

export default App
