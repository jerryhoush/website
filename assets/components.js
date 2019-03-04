const Home = {
    template:
    <div id="slides" class="carousel slide">
	<ul class="carousel-indicators">
		<li data-target="#slides" data-slide-to="0" class="active"></li>
		<li data-target="#slides" data-slide-to="1"></li>
		<li data-target="#slides" data-slide-to="2"></li>
	</ul>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img src="media/colorado.jpg">
			<div class="carousel-caption">
				<h1 class="display-2">Jerry's Expiration Date</h1>

				<script>
				// Set the date we're counting down to
				var countDownDate = new Date("Dec 8, 2073 15:37:25").getTime();

				// Update the count down every 1 second
				var x = setInterval(function() {

				  // Get todays date and time
				  var now = new Date().getTime();
				    
				  // Find the distance between now and the count down date
				  var distance = countDownDate - now;
				    
				  // Time calculations for days, hours, minutes and seconds
				  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
				  var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
				  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				    
				  // Output the result in an element with id="expiration"
				  document.getElementById("expiration").innerHTML = years + " Years, " +  days + " Days, " + hours + " Hours, "
				  + minutes + " Minutes, " + seconds + " Seconds.";
				    
				  // If the count down is over, write some text 
				  if (distance < 0) {
				    clearInterval(x);
				    document.getElementById("expiration").innerHTML = "EXPIRED";
				  }
				}, 1000);
				</script>
				<h3 id="expiration"></h3>
			</div>
		</div>
		<div class="carousel-item">
			<img src="media/golf.jpeg">
		</div>
		<div class="carousel-item">
			<img src="media/lineup.jpg">
		</div>
	</div>		
</div>

<hr class="my-4">
<!--- Two Column Section -->
<div class="container-fluid padding">
<div class="row padding">
	<div class="col-lg-6">
		<h2>Facts and Figures:</h2>
		<p>Height: 5'9"</p>
		<p>Weight: None of your business.</p>
		<p>Hobbies: Programming, Fitness, Drawing, Painting, Studio Portraiture, DANCING.</p>
		<br>
	</div>
	<div class="col-lg-6">
		<img src="media/prayerhands.jpg" class="img-fluid">
	</div>
</div>
<hr class="my-4">
</div>
}