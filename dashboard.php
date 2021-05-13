<?php include "header.php" ?>
<style>
body{
	
background-image: url("img/bg.jpg");
  background-color: #cccccc;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;

}

</style>
 <style>
        span.reference{
            position:fixed;
            left:5px;
            top:5px;
            font-size:10px;
            text-shadow:1px 1px 1px #fff;
        }
        span.reference a{
            color:#555;
            text-decoration:none;
			text-transform:uppercase;
        }
        span.reference a:hover{
            color:#000;
            
        }
        h1{
            color:#ccc;
            font-size:36px;
            text-shadow:1px 1px 1px #fff;
            padding:20px;
        }
		.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 0;
  position: absolute;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);
}
.loadercontainer{
	background-color:#1900cc4d;
	width:100vw;
	height:100vh;
	z-index:1;
	position:fixed;
	top:0px;
	
}
#trlbl{
	margin: 0;
  position: absolute;
  top: 37%;
  left: 50%;
  color:white;
  font-weight:bold;
  font-size:24px;
  transform: translate(-50%, -50%);
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
    </style>
  <div id="content">
        <h1 id="loss" style="padding:0px;margin:0px"></h1>
            <div id="wrapper">
                <div id="steps">
                    <form id="formElem" name="formElem" action="" method="post">
                        <fieldset class="step">
                            <legend>Location</legend>
                            <p>
                                <label for="username">Location</label>
                                <span id="location"></span>
                            </p>
                            <p>
                                <label for="email">Area</label>
								<span id="area"></span>
                               
                            </p>
                        
                        </fieldset>
                        <fieldset class="step">
                            <legend>Interials</legend>
                            <p>
                                <label for="">No. Of Bedrooms</label>
                               <span id="noobedrooms"></span>
                            </p>
                            <p>
                                <label for="">TV</label>
                                <span id="tv"></span>
                            </p>
                            <p>
                                <label for="">Sofa</label>
                                <span id="sofa"></span>
                            </p>
                            <p>
                                <label for="">Dining Table</label>
                                <span id="diningtable"></span>
                            </p>
							 <p>
                                <label for="">Refrigerator</label>
                                <span id="refrigerator"></span>
                            </p>
							 <p>
                                <label for="">Bed</label>
                                 <span id="bed"></span>
                            </p>
							<p>
                                <label for="">Washing Machine</label>
                                <span id="washingmachine"></span>
                            </p>
							<p>
                                <label for="">AC</label>
                                <span id="ac"></span>
                            </p>
							<p>
                                <label for="">Microwave</label>
                                <span id="microwave"></span>
                            </p>
							<p>
                                <label for="">Wardrobe</label>
                                 <span id="wardrobe"></span>
                            </p>
							<p>
                                <label for="">Gas Connection</label>
                                 <span id="gasconnection"></span>
                            </p>
							<p>
                                <label for="">Wifi</label>
                                <span id="wifi"></span>
                            </p>
                        </fieldset>
                        <fieldset class="step">
                            <legend>Exterials</legend>
                            <p>
                                <label for="">Gymnasium</label>
                                <span id="gymnasium"></span>
                            </p>
                            <p>
                                <label for="">Swimming Pool</label>
                                 <span id="swimmingpool"></span>
                            </p>
                            <p>
                                <label for="">Indoor Games</label>
                                 <span id="indoorgames"></span>
                            </p>
                            <p>
                                <label for="">Jogging Track</label>
                                 <span id="joggingtrack"></span>
                            </p>
							 <p>
                                <label for="">Sports Facility</label>
                                 <span id="sportsfacility"></span>
                            </p>
							<p>
                                <label for="">Club House</label>
                                <span id="clubhouse"></span>
                            </p>
							<p>
                                <label for="">Children Play Area</label>
                              <span id="childrenplayarea"></span>
                            </p>
							<p>
                                <label for="">Golf Course</label>
                                <span id="golfcourse"></span>
                            </p>
							<p>
                                <label for="">Car Parking</label>
                                <span id="carparking"></span>
                            </p>
							<p>
                                <label for="">Cafeteria</label>
                              <span id="cafeteria"></span>
                            </p>
                        </fieldset>
                        <fieldset class="step">
                            <legend>Facilities</legend>
                            <p>
                                <label for="">Hospital</label>
                                  <span id="hospital"></span>
                            </p>
                            <p>
                                <label for="">School</label>
                                 <span id="school"></span>
                            </p>
							<p>
                                <label for="">ATM</label>
                                   <span id="atm"></span>
                            </p>
							<p>
                                <label for="">Shopping Mall</label>
                                <span id="shoppingmall"></span>
                            </p>
                        </fieldset>
						<fieldset class="step">
                            <legend>Security and Life</legend>
							<p>
                                <label for="">24 x 7 Security</label>
                                  <span id="tfsec"></span>
                            </p>
							<p>
                                <label for="">Lift Available</label>
                                  <span id="liftavailable"></span>
                            </p>
							<p>
                                <label for="">Power Backup</label>
                                  <span id="powerbackup"></span>
                            </p>
						
							<p>
                                <label for="">Maintenance Staff</label>
                                   <span id="maintenance"></span>
                            </p>
							<p>
                                <label for="">Multipurpose Rooms</label>
                                  <span id="multipurposerooms"></span>
                            </p>
							<p>
                                <label for="">Staff Quarters</label>
                                   <span id="staffquarters"></span>
                            </p>
							<p>
                                <label for="">Resale</label>
                                   <span id="resale"></span>
                            </p>
							
							<p>
                                <label for="">Intercoms</label>
                                   <span id="intercoms"></span>
                            </p>
							<p>
                                <label for="">Landscaped Gardens</label>
                                   <span id="landscapedgardens"></span>
                            </p>
							<p>
                                <label for="">Vaastu Compliant</label>
                                  <span id="vaastucompliant"></span>
                            </p>
							<p>
                                <label for="">Rain Water Harvesting</label>
                                   <span id="rainwaterharvesting"></span>
                            </p>
                            <p class="submit">
							<span id="predict"></span>
                              
                            </p>
							
                        </fieldset>
                    </form>
                </div>
                <div id="navigation" style="display:none;">
                    <ul>
                        <li class="selected">
                            <a href="#">Location</a>
                        </li>
                        <li>
                            <a href="#">Interials</a>
                        </li>
                        <li>
                            <a href="#">Exterials</a>
                        </li>
                        <li>
                            <a href="#">Facilities</a>
                        </li>
						<li>
                            <a href="#">Security & Life</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
		<div id="loadercontainer">
		<span id="trlbl"></span>
		<div  id="loader" style="text-align:center"></div>
		</div>
<script src="index.js"></script>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Predicted Amount</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-success text-center" id="predictamt" style="color:green;font-weight:bold;font-size:22px">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>

<?php include "footer.php" ?>