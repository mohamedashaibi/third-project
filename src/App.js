import './App.css';
import React from 'react';
import Address from'./Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfileImage from './Component/Profile/ProfileImage';

function App() {
  return (
    <div className="App">
      <ProfileImage/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
