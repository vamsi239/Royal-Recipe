let loading = document.querySelector(".loading");
let container = document.querySelector(".container");
let card = document.querySelectorAll(".card");

card.forEach(function(cards){
   cards.addEventListener("click", function(){
       console.log(cards);

       document.querySelector("body").innerHTML=""
       let div = document.createElement("div");
       div.classList.add("foodDetail");
       div.innerHTML=`
       <img src=${cards.firstElementChild.src} alt="">
<div class="detailText">
   <h1>Eat Best with Royal</h1>
   <h3>Exciting Offer Upto 50% OFF</h3>
   <p>This item is being choosen by many people</p>
   <p>The ingredients of the item are of high quality </p>
   <p>Pay on delivery might be available</p>
   
   <button id="buy">Buy Now</button>
   <button id="addtoCart">Cart</button>
   <a href="">Back</a>

</div>
       `
       document.querySelector("body").appendChild(div);
       var addtoCart = document.getElementById('addtoCart');
addtoCart.addEventListener('click', function(){
   alert("Item added to Cart");
});

var buy = document.getElementById('buy');
buy.addEventListener('click', function(){
   alert("Thank you for choosing. Agent is going to contact you within a minute.");
});
   })
})






//  loading
container.style.display="none";
setTimeout(function(){
container.style.display="block";
loading.style.display="none";



}, 2000)