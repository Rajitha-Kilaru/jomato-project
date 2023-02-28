import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Card } from 'react-bootstrap';

function App() {
  const restaurants = [
    "Paradise",
    "Millitary House",
    "kritunga",
    "Biryanis",
    "Bawarchi"
  ]

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json()).then(json => setcardData(json));
  },[])

  let [restaurName, setrestaurName] = useState(restaurants);
  let [cardData,setcardData] = useState([]);
  console.log(cardData)
  
  const displayRestaurants = (e) => {
   console.log(e.target.value)
    restaurName = restaurName.filter((filterName) => (
    filterName.includes(e.target.value)
   ));
   setrestaurName(restaurName)
  }

  
  return (
    <div className="App">
      <div>
        <h1>Jomato</h1>
        <h2>Find the best Restaurants in your city</h2>
      </div>
      <div>
        <select style={{marginRight: 20 }}>
          <option selected disabled hidden>Select City</option>
          <option>Hyd</option>
          <option>Hyd1</option>
          <option>Hyd2</option>
          <option>Hyd3</option>
        </select>
        <input type="text" placeholder="Search for Restaurant" onChange={displayRestaurants} style={{marginRight: 20 }}/>
        <button type="button">Search</button>
      </div>
      <div>
        {restaurName.map((names) => (
          <p>{names}</p>
        ))}
      </div>
      <div className="cards">
        {cardData.map((item) => (
          <Card style={{ width: '18rem', float: 'left', margin: '10px'}}>
          <Card.Header>{item.id}</Card.Header>
          <Card.Body>
            <Card.Title style={{backgroundColor: 'pink'}}>{item.name}</Card.Title>
            <Card.Subtitle >{item.email}</Card.Subtitle >
          </Card.Body>
        </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
