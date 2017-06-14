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
          let info = data.results[i];
          console.log(info);
          let customers = document.querySelector(".customers");
          customers.innerHTML = data.results;
        }

      });

    });
    // function getInfo(data) {
    //   for (var i = 0; i < data.length; i++) {
    //     let info = data[i];
    //     let customers = document.querySelector(".customers");
    //     customers.innerHTML = info;
    //   }
    // }
  }

)();
