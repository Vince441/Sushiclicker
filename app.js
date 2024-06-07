const sushi = document.querySelector(".sushi img");
const count = document.querySelector(".count");
const bonusButton = document.getElementById("#bonus");

let nombreClics = 0;
let sushiPerCliks = 1;

function comptage(){
nombreClics += sushiPerCliks
count.textContent = "Nombre de sushi : " + nombreClics.toFixed(1)
}

sushi.addEventListener("click", comptage)

sushi.addEventListener("click", () =>{
sushi.classList.toggle("clicked");
setTimeout(() =>{
    sushi.classList.remove("clicked");}, 200);
})


function createBonus(bonus, bonus_price, bonus_click, bonus_level){
return `
<div class="bonus" id="${bonus}" onClick="bonus(['${bonus}', ${bonus_price}, ${bonus_click}, ${bonus_level}])">
<div class="bonus_item_content">
<div class="bonus_name">
<p>${bonus.toUpperCase()}</p>
</div>
<div class="price">
<p>${bonus_price}x</p>
</div>
<div class="click_bonus">
<p class="click_bonus_number">${bonus_click}</p>
<p class="click_bonus_copy">Sushi p/click</p>
</div>
<div class="level">
<p class="level_text">Level</p>
<p class="level_number">${bonus_level}</p>
</div>
</div>
</div>
`;
}

const bonusToAdd = [
    {
      bonus_name: "Maki",
      bonus_price: 20,
      bonus_click: 1.2,
      bonus_level: 0,
    },
  
    {
      bonus_name: "California Rolls",
      bonus_price: 500,
      bonus_click: 32,
      bonus_level: 0,
    },
  
    {
      bonus_name: "Gyoza",
      bonus_price: 100,
      bonus_click: 6.6,
      bonus_level: 0,
    },
  
    {
      bonus_name: "Sashimi",
      bonus_price: 1000,
      bonus_click: 70,
      bonus_level: 0,
    },
  
    {
      bonus_name: "Onigiri",
      bonus_price: 250,
      bonus_click: 15.6,
      bonus_level: 0,
    },
  
    {
      bonus_name: "Ramen",
      bonus_price: 999999,
      bonus_click: 400,
      bonus_level: 0,
    },
  
  ];





const cards = document.querySelector("#bonus")


let baseLevel = 0;
let levelUp = 1;

function bonus(boost) {
  if (nombreClics < boost[1]) {
    return alert("Eat me more")
  }
  else {
    sushiPerCliks += boost[2]
    document.getElementById("sushiPerClicks").textContent = sushiPerCliks.toFixed(1) + " SUSHI P/CLICK ";


    nombreClics -= boost[1]
    document.getElementById("bonus").textContent = nombreClics.toFixed(1);

    for (const item of bonusToAdd) {
      if(item.bonus_name === boost[0]){
        item.bonus_level++
        item.bonus_price = (item.bonus_price ** 1.33).toFixed(1)
      }
    }
    generatebonus()
  }
}

const generatebonus = () => {
  cards.innerHTML = "";
  for (let i = 0; i < bonusToAdd.length; i++) {

    const html = createBonus(
      bonusToAdd[i].bonus_name,
      bonusToAdd[i].bonus_price,
      bonusToAdd[i].bonus_click,
      bonusToAdd[i].bonus_level,
    );

    cards.innerHTML += html;
  }
};


generatebonus();