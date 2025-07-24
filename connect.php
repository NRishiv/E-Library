  <?php
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $confirmpassword = $_POST['confirmpassword'];

  $conn = new mysqli('localhost','root','','library');
  if($conn->connect_error)
  {
    die('Connection Failed :'.$conn->connect_error);
  }else
  {
    $stmt = $conn->prepare("insert into signup(username,email,password,confirmpassword) values(?, ?, ?, ?)");
    $stmt->bind_param("ssss",$username, $email, $password, $confirmpassword);
    $stmt->execute();
    echo "Thankyou for Registering...";
    $stmt->close();
    $conn->close();
  }

?>
    
