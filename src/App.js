import React, { useEffect, useState } from "react";
import './App.css';
import { Button } from "@material-ui/core";
import Navbar from './components/Navbar';
// import myCard from './components/Card';
import { getMatches } from "./api/Api";
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar/>
      {/* <myCard/> */}
      <h1>Hii Sharks</h1>
      <Button variant="outlined" color="primary">click here</Button>
    </div>
  );
}

export default App;
