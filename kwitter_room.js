var firebaseConfig = {
    apiKey: "AIzaSyB2IrNi4wmVvmrXQkNNMm6BZaczZAf1oc8",
    authDomain: "kwitter-ba651.firebaseapp.com",
    databaseURL: "https://kwitter-ba651-default-rtdb.firebaseio.com",
    projectId: "kwitter-ba651",
    storageBucket: "kwitter-ba651.appspot.com",
    messagingSenderId: "588137003910",
    appId: "1:588137003910:web:ccb3b685feae1399b2ca07",
    measurementId: "G-CVP0WDY6W4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name ; 

  
    function addRoom(){
  room_name =document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update(
        {
            purpose : "adding room"
        }
    );
  }
  function getData() 
{firebase.database().ref("/").on('value', 
function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach
 (function(childSnapshot)
  {
        childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names = "+Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;

      //End code
      })
      ;});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      windows.location ="kwitter_page.html";
}