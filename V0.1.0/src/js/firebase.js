// Initialize Firebase
var config = {
  apiKey: "AIzaSyDGpvGZiH5GKObheHKI-nf1vtA5xZ3ladQ",
  authDomain: "conduite-de-projet-2018.firebaseapp.com",
  databaseURL: "https://conduite-de-projet-2018.firebaseio.com",
  projectId: "conduite-de-projet-2018",
  storageBucket: "conduite-de-projet-2018.appspot.com",
  messagingSenderId: "585908692122"
};
firebase.initializeApp(config);

function createAccount(userName, mail, password){
  firebase
  .auth()
  .createUserWithEmailAndPassword(mail, password)
  .then(function() {
    var rootRef = firebase.database().ref();
    var usersRef = rootRef.child('users');
    var user = {userName: userName, mail: mail};
    return usersRef.child(firebase.auth().currentUser.uid).set(user);
  })
  .then(function() {
    window.location.href = 'index.html';
  })
  .catch(function(error) {
    console.log(error.message);
  });
}

function logIn(mail, password){

}

function logOut(){

}

function createProject(name, description, durationSprint, startingDay){

}

function getProject(id){

}

function getProjectList(){

}

function updateProjectName(name){

}

function updateProjectDescription(description){

}

function updateProjectDurationSprint(durationSprint){

}

function updateProjectStartingDay(startingDay){

}

function deleteProject(id){

}

function addDeveloperToProject(mail, idProject){

}

function removeDeveloperFromProject(mail, idProject){

}

function getDeveloperList(idProject){

}
