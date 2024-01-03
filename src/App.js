import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    // Perform any necessary operations with the final link
    console.log('Final link:', link);
  };

  return (
    <div className="App">
      <input type="text" value={link} onChange={e => setLink(e.target.value)} placeholder="Paste link here" />
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
}

export default App;
