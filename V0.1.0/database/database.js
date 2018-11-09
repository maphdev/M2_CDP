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
    window.location.href = '/';
    window.localStorage.setItem("userId", firebase.auth().currentUser.uid);
    window.localStorage.setItem("userMail", mail);
  })
  .catch(function(error) {
    window.alert(error.message);
  });
}

function logIn(mail, password){
  firebase
  .auth()
  .signInWithEmailAndPassword(mail, password)
  .then(function(){
    window.location.href = '/';
    window.localStorage.setItem("userId", firebase.auth().currentUser.uid);
    window.localStorage.setItem("userMail", mail);
  })
  .catch(function(error){
    window.alert(error.message);
  });

}

function logOut(){
  firebase
  .auth()
  .signOut()
  .then(function(){
    window.location.href = '/';
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("userMail");
  })
  .catch(function(error){
    window.alert(error.message);
  })
}

function createProject(name, description, durationSprint, startingDay){
  var rootRef = firebase.database().ref();
    var projectsRef = rootRef.child('projects');
    var data = {name: name, description: description, durationSprint: durationSprint, startingDay: startingDay, devList: {0: window.localStorage.getItem("userMail")}};
    projectsRef.push(data, function(err){
      if (err){
        window.alert(err);
      } else {
        window.location.href = '/';
      }
    });

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
