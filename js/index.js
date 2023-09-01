const handleContainer = async () => {
  const res = await fetch(`
   https://openapi.programming-hero.com/api/videos/categories
   `);
  const data = await res.json();
  const tabContainer = document.getElementById("tab-container");
  data.data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a class="tab text-2xl gap-4 text-center text-black rounded bg-gray-300">${item.category}</a> 
    `;
    tabContainer.appendChild(div);
    // console.log(div);
  });
};
const handleCard = async () => {
  const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/1000
    `);
  const data = await res.json();
  const cardContainer = document.getElementById("card-container");
  data.data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    
      
      `; 
      
    
  });
  console.log(data.data);
};
handleCard();


handleContainer();
