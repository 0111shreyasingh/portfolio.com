    <?php      
        $host = "localhost";  
        $dbusername = "root";  
        $dbpassword = "shera@7376";  
        $dbname = "relivedb";  
          
        $con = mysqli_connect($host, $dbusername, $dbpassword, $dbname);  
        if(mysqli_connect_errno()) {  
            die("Failed to connect with MySQL: ". mysqli_connect_error());  
        }  
    ?>  