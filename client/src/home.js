import React, { useState } from 'react';
import {firestore, storage} from './firebase.js'

function Home() {
	var doc = 'placeholder';

    const [user, setUser] = useState("placeholder");
    const [showVideo, setVideo] = useState(false);
    const [vidURL, setURL] = useState("placeholderURL")
    const [response, setResponse] = useState("placeholder")

    async function callApi(){
    	const response = await fetch('/api/hello');
    	const body = await response.json();
    	if (response.status !== 200) throw Error(body.message);
    	setResponse(body.express);
    	return body;
  	};

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
    <div>

		<button onClick={getUsers}>
		  Users
		</button>
		<button onClick={getVideo}>Video Stats </button>
      <h1>{user}</h1>

      {/*<video src='https://storage.googleapis.com/clapd-284917.appspot.com/thommyGif1.mp4' controls />*/}
      {showVideo?<video src={vidURL} controls />:null}
      <button onClick={callApi}>CLick for API</button>
      <h1>{response}</h1>
    </div>
  );
}

export default Home;
