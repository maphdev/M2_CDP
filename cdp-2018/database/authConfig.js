// use firebase
let firebase = require("firebase");
// config of project
let config = {
  apiKey: "AIzaSyDGpvGZiH5GKObheHKI-nf1vtA5xZ3ladQ",
  authDomain: "conduite-de-projet-2018.firebaseapp.com",
  databaseURL: "https://conduite-de-projet-2018.firebaseio.com",
  projectId: "conduite-de-projet-2018",
  storageBucket: "conduite-de-projet-2018.appspot.com",
  messagingSenderId: "585908692122"
};

function init(){
  firebase.initializeApp(config);
  return firebase;
}

let dataConfig = {
  firebase: init(),
  config: config
}

module.exports = dataConfig;
