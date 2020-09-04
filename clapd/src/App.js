import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firestore from './firebase.js'

function App() {
	var doc = 'placeholder';

    const [user, setUser] = useState("placeholder");

	async function getUsers() {
		const user1 = firestore.collection("users").doc("EnIePj6PjLfizBzlhPfd");
		doc = await user1.get().then( (doc) => {setUser(doc.data().user_name) });
		//console.log(user);
	}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        Upload, edit, and share your clips with the world. 
		<button onClick={getUsers}>
		  Users
		</button>
      <h1>{user}</h1>
      </header>
    </div>
  );
}

export default App;
