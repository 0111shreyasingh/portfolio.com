<?php
   include ('connection.php');
   
   if(! $con ) {
      die('Could not connect: ' . mysql_error());
   }
   
	
	if(! get_magic_quotes_gpc() ) {
               $fname=addslashes($_POST['fname']);
					$lname=addslashes($_POST['lname']);
					$mail=addslashes($_POST['mail']);
					$pas=addslashes($_POST['pass2']);
					$contact=addslashes($_POST['contact']);
            }else {
               $fname=$_POST['fname'];
					$lname=$_POST['lname'];
					$mail=$_POST['mail'];
					$pas=$_POST['pass2'];
					$contact=$_POST['contact'];
            }
   
   $sql = "INSERT INTO `Uinfo`(`Uid`, `Ufname`, `Ulname`, `Uemail`, `Upass`, `Uphn`) 
   VALUES (1, '$fname' , '$lname' , '$mail','$pas','$contact'); ";
      
   mysql_select_db('relivedb');
   $retval = mysql_query( $sql, $con );
   
   if(! $retval ) {
      die('Could not enter data: ' . mysql_error());
   }
   
   echo "Entered data successfully\n";
   
   mysql_close($con);
?>