function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// ----------------déclaration des constantes et récupération des données du formulaire
const form =  document.getElementById("form");  
const first =  document.getElementById("first");
const firstError =  document.getElementById("error_first");
const last =  document.getElementById("last")
const lastError =  document.getElementById("error_last");
const email =  document.getElementById("email");
const emailError =  document.getElementById("error_email");
const birthdate =  document.getElementById("birthdate");
const birthdateError =  document.getElementById("error_birthdate");
const quantity =  document.getElementById("quantity");
const quantityError =  document.getElementById("error_quantity");
const loc1 =  document.getElementById("location1");
const loc2 =  document.getElementById("location2");
const loc3 =  document.getElementById("location3");
const loc4 =  document.getElementById("location4");
const loc5 =  document.getElementById("location5");
const loc6 =  document.getElementById("location6");
const locationError =  document.getElementById("error_location");
const checkbox1 =  document.getElementById("checkbox1");
const checkboxError =  document.getElementById("error_checkbox");
// ----------------déclaration des constantes et récupération des données de validation et fermeture du formulaire
const validForm =  document.getElementById("validation");
const endClose =  document.getElementById("endclose");
const modalBody =  document.querySelector(".modal-body");

// ----------------écoute de l'event 'submit'
form.addEventListener("submit", validError);
 

//  Ajouter validation ou messages d'erreur #3 
function validError(event) {

  let today = new Date();// variable date du jour 
  let birthday = new Date(birthdate.value); // variable date anniversaire
  let realDate = (today.getTime()-birthday.getTime()); // variable différence date du jour / date anniversaire

  if (first.value === '' || first.value.length < 2){ // Caractère absent ou inferieur à 2
  
    firstError.textContent ="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.style.fontSize = "14px"; 
    firstError.style.color ="white"; 
    firstError.style.background ="red";  
  }
  else{
    firstError.textContent ="";
    // Si nombre de caractères suffisant, pas de message d'erreur

  }
  if (last.value === '' || last.value.length < 2){ // Caractère absent ou inferieur à 2
    //--#3------ Ajouter validation ou messages d'erreur #3  ---------
    lastError.textContent ="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.style.fontSize = "14px"; 
    lastError.style.color ="white"; 
    lastError.style.background ="red";
    
  }
  else{
    lastError.textContent ="";
    // Si nombre de caractères suffisant, pas de message d'erreur

  }
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Vous devez renseigner une adresse mail.";
    emailError.style.fontSize = "14px"; 
    emailError.style.color ="white"; 
    emailError.style.background ="red";

  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Vous devez renseigner une adresse mail.";
    emailError.style.fontSize = "14px"; 
    emailError.style.color ="white"; 
    emailError.style.background ="red";
  }
  // Set the styling appropriately
  emailError.className = "error active";

  
  if (birthdate.value ===''){// pas de caractère
    birthdateError.textContent ="Vous devez entrer votre date de naissance.";
    birthdateError.style.fontSize = "14px"; 
    birthdateError.style.color ="white";
    birthdateError.style.background ="red";  
 
  }
  else if (realDate < "0") {// date supérieure à la date du jour
    birthdateError.textContent ="Vous devez entrer votre date de naissance.";
    birthdateError.style.fontSize = "14px"; 
    birthdateError.style.color ="white";
    birthdateError.style.background ="red";  
  }
  else{
    birthdateError.textContent =" ";//  Pas de message d'erreur
  }

  if (quantity.value ===''){// pas de caractère
    
    quantityError.textContent ="Vous devez entrer un chiffre supérieur ou égal à 0";
    quantityError.style.fontSize = "14px"; 
    quantityError.style.color ="white";
    quantityError.style.background ="red";  
  }
  else{
    quantityError.textContent =" ";//  Pas de message d'erreur
  }

  if ((loc1.checked)|| (loc2.checked) || (loc3.checked)
    ||(loc4.checked) ||(loc5.checked) ||(loc6.checked)) {
      locationError.textContent ="";
    // pas de message d'erreur, une ville est selectionnée
  }
  else{
   
    locationError.textContent ="Vous devez choisir une option.";
    locationError.style.fontSize = "14px"; 
    locationError.style.color ="white";
    locationError.style.background ="red";  
  }
  if(checkbox1.checked){
    checkboxError.textContent ="";
  //   Pas de message d'erreur
  }
  else{
    
    checkboxError.textContent ="Vous devez vérifier que vous acceptez les termes et conditions.";
    checkboxError.style.fontSize = "14px"; 
    checkboxError.style.color ="white"; 
    checkboxError.style.background ="red";  
  } 
  event.preventDefault();
}

//Ajouter confirmation quand envoi réussi #4

validForm.addEventListener("click", function () {
  if (first.value && last.value && email.value && birthdate.value && quantity.value 
    && ((loc1.checked) || (loc2.checked) || (loc3.checked) || (loc4.checked) || (loc5.checked) || (loc6.checked)) 
    && checkbox1.checked === true) 
    { 
      modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
      modalBody.style.height = "600px";
      modalBody.style.paddingTop = "250px";
      modalBody.style.paddingLeft = "100px";
      modalBody.style.paddingRight = "100px";
      endClose.style.display = "block";
      endClose.addEventListener("click", closeModal);
     
    }
  }
  )

//TODO : fermer la modale #1
const closeBtn = document.querySelectorAll(".close");
// bouton de validation
const submitBtn = document.querySelector(".btn-submit")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event - ajout manquant
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



