<?php
include "db.php";
if(!isset($_SESSION['userlog'])){
     header("location:index.php");
  }
   $sessid= $_SESSION['userlog'];
  $sqluser=mysqli_query($con,"select * from `register` where `id`='$sessid'");
  $row=mysqli_fetch_array($sqluser);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>House Price Prediction</title>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.11.7"> </script>
	<script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.min.js"></script>
	<link rel="stylesheet" href="style.css">
	
<style>
	
</style>
    <style>
.navbar-nav .nav-item a:hover {
  font-weight:200;
  background-color:  #f09433;
  border-radius:25px;
}
.navbar-nav .nav-item a {
  font-weight:bold;
}
nav{
/* background: #8E2DE2;  fallback for old browsers */
/* background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  Chrome 10-25, Safari 5.1-6 */
/* background: linear-gradient(to right, #4A00E0, #8E2DE2); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, #12c2e9,#c471ed);
}

</style>
</head>
<body>
    <nav class="navbar navbar-expand-lg text-light navbar-light bg-primary ">
            <a class="navbar-brand font-weight-bold" href="#">House Price Prediction</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="dashboard.php">Output Module<span class="sr-only">(current)</span></a>
                </li>
           
                <li class="nav-item">
                    <a class="nav-link text-white" href="guide.php">Guide Details</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="aboutproject.php">About project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="aboutus.php">About Us</a>
                </li>
				<li class="nav-item">
                    <a class="nav-link text-white" href="logout.php">Logout</a>
                </li>
                </ul>
        </div>
    </nav>

</body>
</html>