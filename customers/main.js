// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  fetch("https://randomuser.me/api/?results=12")

    .then(function(response){
      console.log(response);

      response.json().then(function(data) {
        console.log("Here is the data:", data);
        for (var i = 0; i < data.results.length; i++) {
          let paragraph = document.createElement("p");
          let images = document.createElement("img");

          let info = data.results[i];
          console.log(info.cell);
          let customers = document.querySelector(".customers");
          images.src = info.picture.large;
          paragraph.innerHTML += " " + info.name.first;
          paragraph.innerHTML += " " + info.name.last;
          paragraph.innerHTML += " " + info.email;
          paragraph.innerHTML += " " + info.location.street;
          paragraph.innerHTML += " " + info.location.city;
          paragraph.innerHTML += " " + info.location.state;
          paragraph.innerHTML += " " + info.location.postcode;
          paragraph.innerHTML += " " + info.cell;
          customers.appendChild(images);
          customers.appendChild(paragraph);
        }

      });

    });

  }

)();
