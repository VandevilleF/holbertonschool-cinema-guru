import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    axios.post('/api/auth/',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(response => {
      setIsLoggedIn(true);
      setUserUsername(response.data.username);
    })
    .catch(error => {
      console.error(error);
    })
  }, {});


  return (
    <>
      <div className="App">
        {isLoggedIn ? (
          <p>Dashboard component</p>
        ) : (
          <p>Authentication component</p>
        )}
      </div>
    </>
  )
}


