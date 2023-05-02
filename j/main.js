//write your page loading script here. Populate the dropdown with the GOT houses.
document.addEventListener("DOMContentLoaded", init);

function init() {
  let houses = [];

  // get external json data and convert it into a JS array
  fetch("https://assets.codepen.io/2538893/houses.json")
    .then((response) => response.json())
    .then((data) => {
      houses = data;
      // loop through the houses array and populate the
      // dropdown with the house names and codes.
      houses.forEach((item) => {
        const option = document.createElement("OPTION");
        option.value = item.code;
        option.innerText = item.name;
        house.appendChild(option);
      });
    })
    .catch((err) => {
      console.log("oops ", err.message);
    });

  // DOM ref to the select dropdown
  let house = document.getElementById("house");

  // display a list of the house members
  // when the select list has changed.
  house.addEventListener("change", (e) => {
    //get the house code from the select
    const code = e.target.value;
    let members = [];

    // loop through houses array
    // check for a matching house code,
    // grab the members of that house
    houses.forEach((item) => {
      if (item.code === code) {
        members = item.members;
      }
    });

    // DOM ref for ul to display members
    const container = document.getElementById("characters");

    // clear out any previous member names
    container.innerHTML = "";

    // handle if no house selected
    if (members.length === 0) {
      let item = document.createElement("LI");
      item.innerText = "No House Selected";
      container.appendChild(item);
    } else {
      // create the li's and append to the ul
      members.forEach((person) => {
        let item = document.createElement("LI");
        item.innerText = person;
        container.appendChild(item);
      });
    } // end if/else
  }); //end addEventListener - change
} //end init
