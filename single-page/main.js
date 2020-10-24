function loadContent(){
    let contentDiv = document.getElementById("app");
    contentDiv.innerHTML = location.hash;

    let homediv = document.querySelector("#home");
    homediv.classList.add('.hidden');
}

  
// if(!location.hash) {
//     location.hash = "#home";
// }
  
//   loadContent();
  
  window.addEventListener("hashchange", loadContent );

  //on hash change remove .hidden from every div
  //on hash change add .hidden to every div except location.hash

  function master() {
      const hiddenDivs = document.querySelectorAll('.hidden')
      hiddenDivs.forEach(hidden => hidden.classList.remove('hidden'));


  }
