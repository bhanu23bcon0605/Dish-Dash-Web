// ───────── CART ─────────

let cartCount = 0;

function addToCart(){

  cartCount++;

  document.getElementById("cartCount").textContent = cartCount;
}

/* ───────── CATEGORY BUTTONS ───────── */

document.querySelectorAll(".pill").forEach((pill)=>{

  pill.addEventListener("click", ()=>{

    document.querySelectorAll(".pill").forEach((p)=>{
      p.classList.remove("active");
    });

    pill.classList.add("active");

  });

});

/* ───────── RESTAURANT SLIDER ───────── */

const slider = document.getElementById("restaurantSlider");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", ()=>{

  slider.scrollBy({
    left:340,
    behavior:"smooth"
  });

});

prevBtn.addEventListener("click", ()=>{

  slider.scrollBy({
    left:-340,
    behavior:"smooth"
  });

});
