<template>
  <div class="about">
    <div class="container-fluid mt-3 mb-4 justify-content-center">
      <h1 class="display-3 mt-3 text-center">
        A brief about <span>“The Next Move Technology“</span>
      </h1>
      <section class="container mt-5">
        <div class="card">
          <div class="card-body">
            <div
              class="row justify-content-center align-items-center text-center"
            >
              <div class="col-md-4 mt-3">
                <h5>Founder & UI/UX HOD</h5>
                <h2>Natasha Kapeyi</h2>
                <p class="card-text">“I founded my company with a mission to redefine industry norms and provide innovative solutions. Fueled by a passion for excellence, we've built a brand known for reliability, customer-centricity, and a commitment to surpassing expectations. Our success is a testament to the hard work and dedication of a talented team, and I am excited about the continued growth and impact we'll achieve in the future.”</p>
              </div>
              <div class="col-md-4">
                <img
                  src="https://i.ibb.co/QpZKHRV/Frame-4.png"
                  alt="founder 1"
                  loading="lazy"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mt-5">
        <div class="card ml-0">
          <div class="card-body">
            <div
              class="row justify-content-center align-items-center text-center"
            >
              <div class="col-md-4">
                <img
                  src="https://i.ibb.co/x2ZSfPh/image-1-removebg-preview.png"
                  alt="founder 1"
                  loading="lazy"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-4 mt-3">
                <h5>Founder & CYBER HOD</h5>
                <h2>Muhammad Rajah</h2>
                <p class="card-text">
                  “ In the pursuit of prosperity and influence, I embarked on the journey of founding this company. Driven by a desire for financial success and the ability to wield significant influence, the establishment of this venture represents my strategic move to carve a path toward both wealth and power. The vision is anchored in the belief that economic success and authority can be harnessed to make a lasting impact, fostering a legacy that extends beyond mere monetary gains.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script></script>

<style scoped>
h1 {
  text-shadow: 2px 2px 5px #3a8541;
}

span {
  color: #3a8541;
}

.card {
  background: inherit;
  color: white;
 
  width: 65%;
  justify-content: center;


  border-radius: 50px;
  border: 3px solid #44d62c;
  transition: transform 0.3s;
  box-shadow: 0px 0px 15px 4px
}

.card:hover{
  transform:scale(105%)
}

/* .card-body{
	padding: 0;
} */

.img-fluid {
  max-width: 50%;
}

.container{
  display: grid;
    align-content: center;
    justify-items: center;
}

</style>
