import './App.css';
import React, {useState } from 'react';


function App() {
  const [link, setLink] = useState('');
  const [backendData, setBackendData] = useState('');

  const handleSubmit = () => {
    console.log('Final link:', link);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({link})
    }    
    fetch("/api", options)
      .then(res => res.json())
      .then(data => setBackendData(data))
  };

  return (
    <div className="container">
      <div className="form">
        <input type="text" value={link} onChange={e => setLink(e.target.value)} placeholder="Paste link here" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h1>Summary:</h1>
      <div className="output">
        <p>{backendData.message}</p>
      </div>
    </div>
  );
}

export default App;
