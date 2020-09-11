import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {firestore, storage} from './firebase.js'

function App() {
	var doc = 'placeholder';

    const [user, setUser] = useState("placeholder");
    const [showVideo, setVideo] = useState(false);
    const [vidURL, setURL] = useState("placeholderURL")

	async function getUsers() {
		const user1 = firestore.collection("users").doc("EnIePj6PjLfizBzlhPfd");
		doc = await user1.get().then( (doc) => {setUser(doc.data().user_name) });
		//console.log(user);
	}

	async function getVideo() {
		var storageRef = storage.ref();
		var clipstore = storageRef.child('clipstore');
		var clipRef = storageRef.child('thommyGif1.mp4');
		var baseURL = "https://storage.googleapis.com/";
		clipRef.getMetadata().then(function(metadata) {
  			// Metadata now contains the metadata for 'images/forest.jpg'
  			var bucket = metadata.bucket;
  			var path = metadata.fullPath;
			var vidURL = baseURL + bucket + "/" + path;
			setVideo(true);
			setURL(vidURL);
  			
		}).catch(function(error) {
  			// Uh-oh, an error occurred!
  			console.log(error.message)
		});

	
	}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        Upload, edit, and share your clips with the world. 
		<button onClick={getUsers}>
		  Users
		</button>
		<button onClick={getVideo}>Video Stats </button>
      <h1>{user}</h1>

      {/*<video src='https://storage.googleapis.com/clapd-284917.appspot.com/thommyGif1.mp4' controls />*/}
      {showVideo?<video src={vidURL} controls />:null}
      {console.log(vidURL)}
      </header>
    </div>
  );
}

export default App;
