import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState("")
  const [sortOption, setSortOption] = useState("Defaut")
  const [searchBar, setSearchBar] = useState("Search Movies")

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
  }, []);

  const optionSelect = ["Defaut", "Latest", "Oldest", "Highest Rated", "Lowest Rated"]


  return (
    <>
    <Input label="Username:" type="text" className="input_content" value="" setValue={ setUserUsername } icon={<FontAwesomeIcon icon={faUser} />} inputAttributes="" />
    <Input label="Password:" type="text" className="input_content" value="" setValue={ setUserUsername } icon={<FontAwesomeIcon icon={faKey} />} inputAttributes="" />
    <SelectInput label="Sort:" options={optionSelect} className="select_input" value={ sortOption } setValue={ setSortOption } />
    <Button label="Sign in" className="auth_button" onClick={""} icon={faKey} />
    <Button label="Sign in" className="tag_button" onClick={""} />
    <SearchBar title={ searchBar } setTitle={ setSearchBar }/>
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


