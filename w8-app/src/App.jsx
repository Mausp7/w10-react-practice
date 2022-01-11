import { useState } from "react";

const App = () => {

let [isLandingPage, setterF]  = useState("");

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
    </div>
  );
}

export default App;
