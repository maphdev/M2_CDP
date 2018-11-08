var exports = module.exports = {};

var firebase;

exports.init = function(firebaseInstance){
  firebase = firebaseInstance;
  return this;
}

exports.createAccount = function (userName, mail, password) {
  firebase
  .auth()
  .createUserWithEmailAndPassword(mail, password)
  .then(function() {
    var rootRef = firebase.database().ref();
    var usersRef = rootRef.child('users');
    var user = {userName: userName, mail: mail};
    return usersRef.child(firebase.auth().currentUser.uid).set(user);
  })
  .catch(function(error) {
    console.log(error.message);
  });
};

exports.logIn = function (mail, password) {
  firebase
  .auth()
  .signInWithEmailAndPassword(mail, password)
  .catch(function(error){
    console.log(error.message);
  });
};
