import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting Name ${name}, Email ${email}`);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;