// LOADER

window.addEventListener("load", ()=>{

  setTimeout(()=>{

    document.getElementById("loader").style.display = "none";

  },1500);

});

// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("dark");

});

// FAQ

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn)=>{

  btn.addEventListener("click", ()=>{

    const answer = btn.nextElementSibling;

    if(answer.style.display === "block"){
      answer.style.display = "none";
    }
    else{
      answer.style.display = "block";
    }

  });

});

// POPUP

const popup = document.getElementById("loginPopup");

const openPopup = document.getElementById("openPopup");

const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", ()=>{

  popup.style.display = "flex";

});

closePopup.addEventListener("click", ()=>{

  popup.style.display = "none";

});

window.addEventListener("click", (e)=>{

  if(e.target === popup){
    popup.style.display = "none";
  }

});
