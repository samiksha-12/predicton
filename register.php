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

input[type=text], input[type=password], input[type=date] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
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
label{
	color:white;
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

<h2 style="text-align:center;color:white">House Price Prediction Register</h2>
<div style=" margin: auto;width: 50%;border: 3px solid green; padding: 10px;">
<?php
include "db.php";
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $mobile=$_POST['mobile'];
    $password=$_POST['password'];
    $cpassword=$_POST['cpassword'];
$sql=mysqli_query($con,"select * from `register` where `email`='$email'");
$count=mysqli_num_rows($sql);
if($count>=1){
    echo "<script>alert('User Already Registered With This Email!!')</script>";
}else{
    $sql1= "INSERT INTO `register`(`name`, `email`, `mobile`, `password`) VALUES ('$name','$email','$mobile','$password')";
    $data= mysqli_query($con,$sql1);
	if($sql1){
    echo "<script>alert('User Registered Successfully!!')</script>";
    }
}
}

?>
<form action="" method="post" >


  <div class="container">
    <label for=""><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" required>
    
	<label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter email" name="email" required>
	
	<label for="uname"><b>Mobile</b></label>
    <input type="text"  placeholder="Enter Mobile" name="mobile" required>
	
	<label for="uname"><b>DOB</b></label>
    <input type="date"  placeholder="Enter DOB" name="dob" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required>
	
	<label for="psw"><b>Confirm Password</b></label>
    <input type="password" placeholder="Enter Confirm Password" name="cpassword" required>
        
    <button type="submit" name="submit" style="background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;text-align:center;text-decoration:none;width:20%">Register</button><span style="color:white;font-weight:bold;margin-left:20px;margin-right:20px;">OR</span>
  <a href="index.php" style="background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;text-align:center;text-decoration:none;width:20%">Login</a>
  </div>

 
</form>
</div>
</body>
</html>
