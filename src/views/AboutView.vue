<template>
  <div class="about">
    <div class="container-fluid mt-3 justify-content-center"> <h1 class="display-3 mt-3 text-center">
          A brief about <span>“The Next Move Technology“</span>  
        </h1>
      <div class="row">
        <div class="timeline mt-5 ">
           <div class="col-xl-12"> 
            <ul class="list">
              <div class="content">
                <img src="" alt="NZK" loading="" class="">
                <h6>FOUNDER</h6>
                <h5>Natasha Kapeyi</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur saepe totam necessitatibus sequi fuga repudiandae qui cum, numquam iusto, ratione autem atque! Reprehenderit facilis modi, dolorum veritatis officiis quidem dolor.</p>
              </div>
              <div class="content">
                <img src="" alt="MR" loading="" class="">
                <h6>FOUNDER</h6>
                <h5>Muhammad Rajah</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur saepe totam necessitatibus sequi fuga repudiandae qui cum, numquam iusto, ratione autem atque! Reprehenderit facilis modi, dolorum veritatis officiis quidem dolor.</p>
              </div>
           </ul>
          </div>      
        </div>

      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

h1{
  text-shadow:2px 2px 5px #3A8541;
}

span{
  color: #3A8541;
}

/* timeline */
ul.list {
	position: relative;
	margin: 0;
	padding: 0
}

 ul.list:before {
	position: absolute;
	content: "";
	width: 2px;
	height: 100%;
	background-color: #3A8541;
	left: 71%;
	top: 0;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}

ul.list li {
	position: relative;
	clear: both;
	display: list-item;
}

.list , .content {
	width: 63%;
	color:white;
	padding: 50px;
	float: left;
	text-align: start;
  position: relative;
  right:-7rem;
}
ul.list li:nth-child(2n) .content {
	float: right;
	text-align: left;
}
.list:after {
	position: absolute;
	content: "";
	width: 10px;
	height: 10px;
	background-color: #3A8541;
	left: 69.9%;
	top: 60%;
	-webkit-transform: translate(50%, -50%);
 transform: translate(50%, -50%);
	border-radius: 50%;
} 

/* content */
/* .content {
	border: 2px solid greenyellow;
	background-color:inherit
} */
</style>
