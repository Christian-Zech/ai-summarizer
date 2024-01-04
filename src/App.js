import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
  const [link, setLink] = useState('');
  const [backendData, setBackendData] = useState('');

  const SECOND_MS = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api")
        .then(res => res.json())
        .then(data => setBackendData(data));
    }, SECOND_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])


  const handleSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({link})
    }    
    fetch("/api", options)
  };

  return (
    <div className="container">
      <div className="form">
        <input type="text" value={link} onChange={e => setLink(e.target.value)} placeholder="Paste link here" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h1>Summary:</h1>
      <div className="output">
        <p>{backendData.summary}</p>
      </div>
    </div>
  );
}

export default App;
