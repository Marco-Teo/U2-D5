window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
  
    if (window.scrollY >500) {
     header.style.backgroundColor = "white"; 
    }
    else{
        header.style.backgroundColor ="#ffc017";
    }
  });