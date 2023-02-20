const clickMe = document.querySelector('#clickMe');
clickMe.addEventListener("click", fetching);

function fetching() {
   fetch("https://dog.ceo/api/breeds/image/random")
     .then((response) => response.json())
     .then((data) => {
       const img = document.createElement("img");
       img.setAttribute("src", data.message);
       const ul = document.querySelector("ul");
       const li = document.createElement("li");
       ul.appendChild(li);
       li.appendChild(img);
     })

     .catch((error) => console.error(`Error:`, error));
}


// function getDogURL() {
//   const apiURL = "https://dog.ceo/api/breeds/image/random";
//   return fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//       if (jsonResponse.code === 404) return Promise.reject("No dog found!");
//       else return jsonResponse.message;
//     });
// }

// function addDogToList(dogURL) {
//   const list = document.querySelector("ul");
//   const listElement = document.createElement("li");
//   const image = document.createElement("img");
//   image.src = dogURL;
//   listElement.appendChild(image);
//   list.appendChild(listElement);
// }

// const button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//   getDogURL()
//     .then((dogURL) => addDogToList(dogURL))
//     .catch((err) => {
//       const dog404Placeholder = "./dog-placeholder.jpg";
//       addDogToList(dog404Placeholder);
//     });
// });
