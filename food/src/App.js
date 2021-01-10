import firebase from 'firebase';
import './App.css';

function App() {

  var config = {
    apiKey: " AIzaSyBsQhiBeBxUxQw744BHlQfEPty5aUhbLY4 ",
    authDomain: "n-tri-569d8.firebaseapp.com",
    databaseURL: "https://n-tri-569d8-default-rtdb.firebaseio.com/",
    storageBucket: "gs://n-tri-569d8.appspot.com/"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

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
