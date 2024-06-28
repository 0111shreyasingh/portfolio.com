    <?php      
        include('connection.php');  
        $umail = $_POST['mail'];  
        $pas = $_POST['pass'];  
          
            //to prevent from mysqli injection  
            $umail = stripcslashes($umail);  
            $pas = stripcslashes($pas);  
            $umail = mysqli_real_escape_string($con, $mail);  
            $pas = mysqli_real_escape_string($con, $pas);  
          
            $sql = "select * from login where  Uemail = '$username' and Upass = '$pas'";  
            $result = mysqli_query($con, $sql);  
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
            $count = mysqli_num_rows($result);  
              
            if($count == 1){  
                echo "<h1><center> Login successful </center></h1>";  
            }  
            else{  
                echo "<h1> Login failed. Invalid username or password.</h1>";  
            }     
    ?>  