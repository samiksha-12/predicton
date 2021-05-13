<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
	font-family: Arial, Helvetica, sans-serif;

background-image: url("img/02C.jpg");
  background-color: #cccccc;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
label{
	color:white;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
<body>

<h2 style="text-align:center;color:white">House Price Prediction</h2>
<div style=" margin: auto;width: 50%;border: 3px solid green; padding: 10px;">
<?php 
include "db.php"; 

if(isset($_POST['submit'])){
	 $email=$_POST['email1'];
	 $password1=$_POST['password1'];
	$sql=mysqli_query($con,"select * from `register` where `email`='$email' and `password`='$password1'");
	  $countmob=mysqli_num_rows($sql);
	 $dbpassfetch=mysqli_fetch_array($sql);
	 $password=$dbpassfetch['password'];
	 $id=$dbpassfetch['id'];
	 if($countmob!=1){
		echo "<script>alert('Email is Not Registered With Us!! Please Register First.');</script>";
	 }else if($email=="" || $password==""){
		 echo $error="<script>alert('Please Enter All Fields!!');</script>";
	 }else{
		 $_SESSION['userlog']=$id;
		 header('Location: dashboard.php');
		}

}
?>
<form action="" method="post" >

  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter email" name="email1" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password1" required>
        
    <button type="submit" name="submit" class="" style="width:75px;font-weight:bold;text-align:center">Login</button>
	<span style="color:white;font-weight:bold">OR</span> <a href="register.php" style="background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;text-align:center;text-decoration:none">Register</a>
  </div>

 
</form>
</div>
</body>
</html>
