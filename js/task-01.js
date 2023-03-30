const categories = document.querySelector("#categories");
const items = [...categories.children];

console.dir(`Number of categories: ${categories.childElementCount}`);

items.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.dir(`Elements: ${item.querySelectorAll("li").length}`);
});

