/*const admin = require('firebase-admin');

const serviceAccount = require('../clapd-284917-cdbbc056bbde.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function read(){
	const snapshot = await db.collection('users').get();
	snapshot.forEach((doc) => {
  		console.log(doc.id, '=>', doc.data());
	});
} 	

read()*/

const firebase = require('firebase');

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDf00ev9OB01hGvUuRt52kNuMQwnFcBZqo",
authDomain: "clapd-284917.firebaseapp.com",
databaseURL: "https://clapd-284917.firebaseio.com",
projectId: "clapd-284917",
storageBucket: "clapd-284917.appspot.com",
messagingSenderId: "940774499714",
appId: "1:940774499714:web:388d3c9d2925f23d219b9b",
measurementId: "G-VKF0YDXJVY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
