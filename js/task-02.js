const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const products = document.querySelector("#ingredients");
 const liElements = ingredients.map((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      li.classList.add("item");
      return li;
});
  products.append(...liElements);

// const li = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");
// const li5 = document.createElement("li");
// const li6 = document.createElement("li");

// li.textContent = "Potatoes";
// li2.textContent = "Mushrooms";
// li3.textContent = "Garlic";
// li4.textContent = "Tomatos";
// li5.textContent = "Herbs";
// li6.textContent = "Condiments";

// li.classList.add("item");
// li2.classList.add("item");
// li3.classList.add("item");
// li4.classList.add("item");
// li5.classList.add("item");
// li6.classList.add("item");

// products.append(li, li2, li3, li4, li5, li6);



// const components = document.querySelector("#ingredients");

// const list = `<li class="item">${"Potatoes"}</li>
// <li class="item">${"Mushrooms"}</li>
// <li class="item">${"Garlic"}</li>
// <li class="item">${"Tomatos"}</li>
// <li class="item">${"Herbs"}</li>
// <li class="item">${"Condiments"}</li>`;


// components.insertAdjacentHTML("beforeend", list);