const box = document.querySelector(".box");

let url = "https://reqres.in/api/users";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    const dataArr = Object.values(data);
    // console.log(dataArr);

    const newData = dataArr[4];
    console.log(newData);

    newData.map((key) => {
      console.log(key);

      const miniBox = document.createElement("div");
      miniBox.classList.add("box__two");

      const poster = document.createElement("img");
      poster.classList.add("box__img");
      poster.src = key.avatar;

      const name = document.createElement("h4");
      name.classList.add("box__name");
      name.textContent = key.first_name;

      const email = document.createElement("p");
      email.classList.add("box__email");
      email.textContent = key.email;

      miniBox.appendChild(name);
      miniBox.appendChild(email);
      miniBox.appendChild(poster);

      box.appendChild(miniBox);
    });
  })
  .catch((error) => console.log(error));
