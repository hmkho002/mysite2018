var username = "hockmeng";
var email = "hmkho002@suss.edu.sg";

function getConfirmation() {
  var retVal =  confirm("Do you want to marry me?");

  if(retVal == true) {
      document.getElementById("name").value = username;
      document.getElementById("email").value = email;
      //document.write("User will proceed a wedding...")
      //return true;
  } else {
      //document.write("User has cancelled the wedding.");
      //return false;
  }
}