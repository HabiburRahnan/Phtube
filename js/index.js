const handleContainer = async () => {
  const res = await fetch(`
   https://openapi.programming-hero.com/api/videos/categories
   `);
  const data = await res.json();
  //   console.log(data.data);
  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleCard(${
      item.category_id
    })" class="tab text-2xl gap-4 text-center text-black rounded bg-gray-300 active:bg-red-600">${
      item?.category ? item?.category : "no data found"
    }</a> 
    `;
    tabContainer.appendChild(div);
    // console.log(div);
  });
};
const handleCard = async (itemId) => {
  const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${itemId}

    `);
  const data = await res.json();

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  if (data.status == true) {
    data.data.forEach((item) => {
      const div = document.createElement("div");
      //   console.log(item.authors);

      div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl">
      <figure>
        <img class="h-52"
          src="${item?.thumbnail}"
        />
      </figure>
      <div class="card-body">
        <div class="card-footer flex justify-between mt-8">
            <div class="flex  justify-center text-center items-center gap-2">
              <div >
                <div class="avatar online">
                  <div class="w-14 rounded-full flex">
                      <img
                        src="${item?.authors[0]?.profile_picture}"/>
                  </div>
                </div>
              </div>
                <div>
                  <h2 class="card-title ">
                  ${item?.title.slice(0, 20)}
                  </h2>
                </div>
          </div>
        </div>
          <div class="flex justify-center gap-2">
            <h2>${item?.authors[0]?.profile_name}</h2>
            ${
              item?.authors[0].verified
                ? `<img src="./image/fi_10629607.svg" alt="">`
                : ""
            }
            
          
          </div>
                <div class="text-center">
                  <h3>Total Views: ${item?.others?.views}</h3>
               </div>
      </div>
    </div>
   
 
          `;

      cardContainer.appendChild(div);
    });
  }
  if (data.status == false) {
    const noData = document.getElementById("no-data");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class=" w-40 ">
    <img src="./image/Icon.png" alt="">
    <h3 class=" text-3xl">Oops!! Sorry, There <br> is no content here</h3></div>
      
  `;
    noData.appendChild(div);
  }

  //   console.log(data.data);
};
// handleCard();

handleContainer();
