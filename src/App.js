import './App.css';
import React, {useEffect, useState } from 'react';


function App() {
  const [link, setLink] = useState('');
  const [backendData, setBackendData] = useState('');

  const handleSubmit = () => {
    console.log('Final link:', link);
  };

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setBackendData(data))

  }, [])

  return (
    <div className="App">
      <input type="text" value={link} onChange={e => setLink(e.target.value)} placeholder="Paste link here" />
      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default App;
