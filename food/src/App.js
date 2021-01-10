import firebase from 'firebase';
import './App.css';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBsQhiBeBxUxQw744BHlQfEPty5aUhbLY4",
    authDomain: "n-tri-569d8.firebaseapp.com",
    databaseURL: "https://n-tri-569d8-default-rtdb.firebaseio.com",
    projectId: "n-tri-569d8",
    storageBucket: "n-tri-569d8.appspot.com",
    messagingSenderId: "625441764832",
    appId: "1:625441764832:web:ace3552467d5d7b2db6785",
    measurementId: "G-C7EF5TGRG5"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Get a reference to the database service
  var database = firebase.database();

  database.ref('user1').set(
    {
      username: "quinn",
      email: 'qintu@breadonmars.com',
      gender: 'Male'
    }
  );

  // Set the configuration for your app
  // TODO: Replace with your project's config object

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
