import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function handleChangeFname(event) {
    console.log(event.target.value);
    setFName(event.target.value);
  }
  function handleChangeLname(event) {
    console.log(event.target.value);
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={handleChangeFname}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={handleChangeLname}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
