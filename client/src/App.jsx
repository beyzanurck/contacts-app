import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'

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
      console.log(contacts)

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
      {contacts.length > 0 ? contacts[0].first_name : ` `}
    </div>
  )
}

export default App
