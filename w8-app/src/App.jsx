const App = () => {
  const carName = "Subaru";
  const carNumber = 152;
  const isCar = true;

  const cars = [
    {brand: "Opel", type: "Corsa", milage: "12356", gas: true},
    {brand: "Subaru", type: "Forester", milage: "15656", gas: true},
    {brand: "Nissan", type: "Pathfinder", milage: "165465", gas: false},
    {brand: "Peugeot", type: "306", milage: "262356", gas: true},
  ];

  const human = {gender: "male", firstName: "Aron", lastName: "Tombácz", age: 36};
  const nulla = null;
  const ud = undefined;

  return (
    <div>
      <h1>Hello Word!</h1>
      <p className="par">Lorem ipsum dolor sit 
      <br />
      Nisi quos provident illum voluptatum </p>
      <div id="egyedi">Ez egy {carName} {carNumber + 5} </div>
      <input type="password" placeholder="Jelszó" />
      
      {cars.map((car, i)=> <div key={i} className="card">Ez egy {car.brand} {car.type}, ami {car.milage} km-t ment már, és {car.gas ? "benzin" : "diesel"} üzemű.</div>)}

    </div>
  );
}

export default App;
