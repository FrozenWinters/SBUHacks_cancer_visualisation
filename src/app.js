;(function ($, window, document, firebase) {

  var config = {
    apiKey: "AIzaSyDghAy581yi2FVLRV88sHsakZK0qm5UNAE",
    authDomain: "sbuhacks-cancer-backend.firebaseapp.com",
    databaseURL: "https://sbuhacks-cancer-backend.firebaseio.com",
    projectId: "sbuhacks-cancer-backend",
    storageBucket: "sbuhacks-cancer-backend.appspot.com",
    messagingSenderId: "773297593173"
  };
  firebase.initializeApp(config);

  var db = firebase.database();
}
