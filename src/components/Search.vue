<template>
  <div class="container-fluid text-center">
    <div class="container col-md-10 col-sm-12">
      <div class="card text-bg-dark">
        <div class="geometric-shape d-none d-md-block">
        </div>
        <img
            src="https://i.ibb.co/4Pm2LND/Microsoft-Teams-image-2.jpg"
            class="card-img img-fluid"
            alt="..."
            style="object-fit: cover;"
        >
        <div class="card-footer text-body-secondary bg-white">
          <form class="row align-items-center justify-content-center">
            <div class="col-md-4 col-sm-6 mb-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Destination">
              </div>
            </div>
            <div class="col-md-2 col-sm-12 mb-2">
              <button class="btn btn-primary btn-block">Rechercher</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
};
</script>

<style scoped>
.geometric-shape {
  position: absolute;
  padding: 20px 40px 20px 20px;
  height: 400px;
  width: 400px;
  border-radius: 550px 8px 8px 8px;
  background-color: #FC9063;
  animation: 0.5s ease-in-out 0s 1 normal none running animation-bd47v2;
  right: 20px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
}

.card-footer {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
}

.card-img {
  max-height: 500px; /* Limitez la hauteur de l'image */
  width: 100%; /* Pour s'assurer que l'image est responsive */
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.transparent-btn {
  background-color: transparent;
  border: none;
  color: black;
}

.container-fluid {
  background: linear-gradient(
      white 0%,
      white 50%,
      #FC9063 50%,
      #FC9063 100%
  );
  padding-bottom: 8rem;
}
</style>
