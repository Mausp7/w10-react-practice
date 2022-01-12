import { useState } from "react";

const App = () => {

  const cars = [
    {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ]

let [isLandingPage, setterF]  = useState("");
const [inputValue, setInputValue] = useState("");


const handleChange = (event) => {
  setInputValue(event.target.value);
  console.log(event.target.value);
};

  return (
    <div>
      <h1>Hello Word!</h1>
      <button onClick={() => setterF("Landing")}>Landing Page</button>
      <button onClick={() => setterF("Home")}>Home Page</button>
      <button onClick={() => setterF("About")}>About Page</button>
      <hr />

      {isLandingPage === "Landing" && <div>Landing Page</div>}
      {isLandingPage === "Home" && <div>Home Page</div>}
      {isLandingPage === "About" && <div>About Page</div>}      
      <hr />

      <input type="text" value={inputValue} onChange={handleChange} name="" id="" />
      <button type="submit" disabled={inputValue.length < 3}>Submit</button>
      {inputValue.length < 3 && <p>Minimum 3 character!</p>}
      <hr />

      <ul>
        {cars.filter(car => car.brand.startsWith(inputValue)).map((car, i) => <li key={i} >{car.brand} - {car.model} ({car.topSpeed})</li>)}
      </ul>
    </div>

  );
}

export default App;
