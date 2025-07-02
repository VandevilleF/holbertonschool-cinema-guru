import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    axios.post('http://localhost:8000/api/auth/',
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
  }, []);

  return (
    <>
      <div className="App">
        {isLoggedIn ? (
          <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
        )}
      </div>
    </>
  )
}


