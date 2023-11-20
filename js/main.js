/*
          <!-- elemento js -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="-lc-img">
              <img
                class="img-fluid"
                src="img/angela-caroll-chief-editor.jpg"
                alt="Angela Carrol"
              />
            </div>
            <div class="-lc-description text-center p-3 bg-light">
              <h3>Angela Carrol</h3>
              <div>Chief editor</div>
            </div>
          </div>
          <!-- elemento js -->
*/
"use strict";
//!funzioni

const createImg = (imgString, containerClass) => {
  const elementImg = document.createElement("div");
  elementImg.classList.add(containerClass);
  elementImg.innerHTML = imgString;
  return elementImg;
};

//!programma
const elementRow = document.querySelector(".row");
const fragmentRow = document.createDocumentFragment();
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

//*stampo in console le informazioni dei membri del team (è un normale array ma nelle sue posizioni ho degli oggetti)
for (let i = 0; i < team.length; i++) {
  const element = document.createElement("div");
  element.classList.add("col-12", "col-md-6", "col-lg-4");
  element.append(
    createImg(
      `<img
  class="img-fluid"
  src="img/${team[i].img}"
  alt="Angela Carrol"
/>`,
      "-lc-img"
    )
  );
  element.append(`${team[i].name} - `);
  element.append(`${team[i].role} - `);

  fragmentRow.append(element);
}
elementRow.append(fragmentRow);
