import React from 'react';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
