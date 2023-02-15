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