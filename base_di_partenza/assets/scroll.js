window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
  
    if (window.scrollY >100) {
     header.style.backgroundColor = "transparent"; 
    }
    else{
        header.style.backgroundColor ="#ffc017";
    }
  });