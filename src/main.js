/* Manejo del DOM */
document.getElementById("btn-start").addEventListener("click", () => {
    
  document.getElementById("screen1").setAttribute('hidden', true);
  document.getElementById("screen2").removeAttribute('hidden');

})

document.getElementById("btn-kanto").addEventListener("click", () => {
    
    document.getElementById("screen2").setAttribute('hidden', true);
  
  })