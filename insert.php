<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "demo");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$first_name = mysqli_real_escape_string($link, $_REQUEST['fname']);
$last_name = mysqli_real_escape_string($link, $_REQUEST['lname']);
$email = mysqli_real_escape_string($link, $_REQUEST['mail']);
$pas=mysqli_real_escape_string($_POST['pass2']);
$contact=mysqli_real_escape_string($_POST['contact']);
 
// Attempt insert query execution

 $sql = "INSERT INTO Uinfo(Uid, Ufname, Ulname, Uemail, Upass, Uphn) 
   VALUES (1, '$first_name' , '$last_name' , '$email','$pas','$contact') ";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>