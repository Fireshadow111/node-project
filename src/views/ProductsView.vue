<template>
  <div class="container-fluid vh-100">
    <!-- <img src="https://i.ibb.co/Qv7k393/cdfda49dd7071ec1623e87f55943ab3e.gif" alt="Code-Image" loading="lazy" class="img-fluid"> -->
    <h1 class="center display-1 text-center fst-italic fw-bold">
      The Products we offer
    </h1>
  </div>
  <section class="container mt-5">
    <div class="card">
      <div class="card-body">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <h1>WEB DEVELOPMENT</h1>
            <p class="card-text">
              Web development can range from developing a simple single static
              page of plain text to complex web applications, electronic
              businesses, and social network services.
            </p>
            <a href="#" class="btn">View Product</a>
          </div>
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/K7dcPpD/Rectangle-3.png"
              alt="Code-Image"
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
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/QfQ6YG5/Rectangle-2.png"
              alt="Code-Image"
              loading="lazy"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h1 class="text-uppercase card-title">Cyber Security</h1>
            <p class="card-text">
              Cybersecurity is the practice of protecting internet-connected
              systems such as hardware, software and data from cyberthreats.
            </p>
            <a href="#" class="btn">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mt-5">
    <div class="card">
      <div class="card-body">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <h1 class="text-uppercase card-title">Data Science</h1>
            <p class="card-text">
              Data science is an interdisciplinary academic field that uses
              statistics, scientific computing, scientific methods.
            </p>
            <a href="#" class="btn">View Product</a>
          </div>
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/DDZrtFD/7797fca87154f8d93a02e3506d6fb9ee-removebg-preview.png"
              alt="Code-Image"
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
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/vsp6Jhn/game-development-removebg-preview.png"
              alt="Code-Image"
              loading="lazy"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h1 class="text-uppercase card-title">Game Development</h1>
            <p class="card-text">
              The game development process typically requires input from one or
              more game designers, artists, programmers, animators, testers,
              project managers, etc.
            </p>
            <a href="#" class="btn">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mt-5">
    <div class="card">
      <div class="card-body">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <h1 class="text-uppercase card-title">App Development</h1>
            <p class="card-text">
              App development uses programming languages and development skills
              to create, test, and develop applications on mobile devices.
            </p>
            <a href="#" class="btn">View Product</a>
          </div>
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/C5XX2zw/the-complete-guide-to-mobile-app-development-2021-ded2abd1b1-removebg-preview.png"
              alt="Code-Image"
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
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6">
            <img
              src="https://i.ibb.co/QNW9Hj1/634970c7cbeed5644711b937-62fd57ccd6890f25796f92f9-Adobe-Stock-295461823-removebg-preview.png"
              alt="Code-Image"
              loading="lazy"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h1 class="text-uppercase card-title card-title">
              Software Development
            </h1>
            <p class="card-text">
              Software development is the process of designing, creating,
              testing, and maintaining different software applications.
            </p>
            <a href="#" class="btn">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
div.container-fluid {
  background-image: url("https://i.ibb.co/Qv7k393/cdfda49dd7071ec1623e87f55943ab3e.gif");
  background-size: cover;
  /* margin-bottom: 10px; */
}

.center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  background: inherit;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(255, 255, 255, 0.19);
  width: 75%;
}

p {
  text-align: justify;
}

.vh-100 {
  height: 50vh !important;
}

.btn {
  border-color: #3a8541;
  color: #ffff;
}

.ml-0 {
  left: 29%;
}
</style>
