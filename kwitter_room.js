var firebaseConfig = {
      apiKey: "AIzaSyBuvcyYYQAXHxDWD1nn-Xt_7XdHCxKb4gA",
      authDomain: "kwitter-ef5ca.firebaseapp.com",
      databaseURL: "https://kwitter-ef5ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-ef5ca",
      storageBucket: "kwitter-ef5ca.appspot.com",
      messagingSenderId: "450743205985",
      appId: "1:450743205985:web:20a16152baa389d7bd2a20"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

    getData();
    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html"
    }