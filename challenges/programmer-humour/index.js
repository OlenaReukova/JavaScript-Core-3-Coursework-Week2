window.onload = renderFun;
function renderFun() {
  fetch("https://xkcd.now.sh/?comic=latest").then((response) =>
    response
      .json()
      .then((data) => {
        const img = document.querySelector("#container");
        img.setAttribute("src", data.img);
        console.log(data);
      })
      .catch((err) => console.error(`Error:`, err))
  );
}
