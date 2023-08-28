<template>
 <div class="sejour">
   <div class="container-fluid col-md-10">
     <h1>Trouvez votre séjour idéal</h1>
     <p class="subtitle">Découvrez une sélection de nos maisons les plus réservées</p>
   </div>

   <div class="container-fluid col-md-11 text-center">
     <div class="row justify-content-center"> <!-- Utilisez 'justify-content-center' pour centrer horizontalement -->
       <div class="col-md-3 d-flex justify-content-center"> <!-- Utilisez 'd-flex' et 'justify-content-center' pour centrer le contenu -->
         <div class="card">
           <img src="https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/c2c2fb07-a7f2-4a1e-3afc-b8db20ab5000/square1000" class="card-img-top" alt="...">
           <div class="card-body"> <!-- Utilisez 'text-center' pour centrer le texte à l'intérieur de la carte -->
             <h5><span class="badge bg-info"><i class="fa fa-star"></i>4,4</span></h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
       <div class="col-md-3 d-flex justify-content-center"> <!-- Utilisez 'd-flex' et 'justify-content-center' pour centrer le contenu -->
         <div class="card">
           <img src="https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/c2c2fb07-a7f2-4a1e-3afc-b8db20ab5000/square1000" class="card-img-top" alt="...">
           <div class="card-body text-center"> <!-- Utilisez 'text-center' pour centrer le texte à l'intérieur de la carte -->
             <h5><span class="badge bg-info"><i class="fa fa-star"></i>4,4</span></h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
       <div class="col-md-3 d-flex justify-content-center"> <!-- Utilisez 'd-flex' et 'justify-content-center' pour centrer le contenu -->
         <div class="card">
           <img src="https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/c2c2fb07-a7f2-4a1e-3afc-b8db20ab5000/square1000" class="card-img-top" alt="...">
           <div class="card-body text-center"> <!-- Utilisez 'text-center' pour centrer le texte à l'intérieur de la carte -->
             <h5><span class="badge bg-info"><i class="fa fa-star"></i>4,4</span></h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
       <div class="col-md-3 d-flex justify-content-center"> <!-- Utilisez 'd-flex' et 'justify-content-center' pour centrer le contenu -->
         <div class="card">
           <img src="https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/c2c2fb07-a7f2-4a1e-3afc-b8db20ab5000/square1000" class="card-img-top" alt="...">
           <div class="card-body text-center"> <!-- Utilisez 'text-center' pour centrer le texte à l'intérieur de la carte -->
             <h5><span class="badge bg-info"><i class="fa fa-star"></i>4,4</span></h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sejour"
}
</script>

<style scoped>
.sejour {
  background-color: #FC9063;
}

h1{
  font-size: 2rem;
  color: white;
  font-family: poppin,serif;
}

.subtitle{
  font-size: 1.5rem;
  color: white;
  font-family: poppin,serif;
}

.card{
  border: none;
}
</style>