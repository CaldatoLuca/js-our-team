# Our Team

![thumnail](/readme-img/thumnail.jpeg)

_HTML+css+js_

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

## Risoluzione

**Creo un array di oggetti con le informazioni dei membri del team**

```js
//* dati del team - array di oggetti
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
```

**Creo con due funzioni gli elementi html da inserire nell' elementi contenitore**

```js
const elementRow = document.querySelector(".row");
```

```js
const createImg = (imgString, containerClass) => {
  const element = document.createElement("div");
  element.classList.add(containerClass);
  element.innerHTML = imgString;
  return element;
};

const createDescription = (counter) => {
  const element = document.createElement("div");
  const elementH3 = document.createElement("h3");
  const elementDiv = document.createElement("div");
  element.classList.add("-lc-description", "text-center", "p-3", "bg-light");
  elementH3.innerHTML = team[counter].name;
  elementDiv.innerHTML = team[counter].role;
  element.append(elementH3);
  element.append(elementDiv);
  return element;
};
```

- uso delle arrow function (il risultato non sarebbe cambiato se avessi usato le function classiche)

**Attraverso ciclo for scorro l' array e inserisco i vari elementi nel loro contenitore**

```js
const fragmentRow = document.createDocumentFragment();
```

```js
//*creo le schede dei membri del team (è un normale array ma nelle sue posizioni ho degli oggetti)
for (let i = 0; i < team.length; i++) {
  const element = document.createElement("div");
  element.classList.add("col-12", "col-md-6", "col-lg-4");
  element.append(
    createImg(
      `<img
  class="img-fluid w-100"
  src="img/${team[i].img}"
  alt="Angela Carrol"
/>`,
      "-lc-img"
    )
  );
  element.append(createDescription(i));

  fragmentRow.append(element);
}
elementRow.append(fragmentRow);
```

- mi aiuto con un fragment per rendere più leggera l' operazione
- richiamo i valori che mi servono con la seguente sintassi:
  - array[i].chiaveOggetto
  - team[0].name = "Wayne Barnett"
  - richiamo il primo elemento dell' array e attraverso la chiave dell' oggetto risalgo al valore desiderato
