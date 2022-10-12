import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const contentDescription = document.querySelector(".content-decription");
const closetSize = document.querySelectorAll(".size");
const priceWrapper = document.querySelector(".price-wrapper");
const navbar = document.querySelector("nav");
const mainPriceFactorsUL = document.querySelector(".price-factor");
const featuresUL = document.querySelector(".feature");
const contentImage = document.querySelector(".content-image");

let state = {
  data: [
    {
      name: "SilverWood",
      id: uuidv4(),
      slideNo: 1,
      imageUrl:
        "https://www.pexels.com/photo/interior-with-wooden-walls-round-mirror-shelves-and-cupboard-5998051/",
      amount: {
        4: 7789,
        6: 8876,
        10: 10765,
      },

      mainPriceFactors: {
        4: [
          "Size of space - 4",
          "Number of doors & drawers - 3/4",
          "Lighting & accessories - yes",
          "Finish color - shine",
          "Wall mounted - yes",
        ],
        6: [
          "Size of space - 6",
          "Number of doors & drawers - 4/6",
          "Lighting & accessories - yes",
          "Finish color - matt & shine",
          "Wall mounted - yes",
        ],
        10: [
          "Size of space - 10",
          "Number of doors & drawers - 8/10",
          "Lighting & accessories - yes",
          "Finish color - gloss finish / shine",
          "Wall mounted - yes",
        ],
      },
      features: {
        4: [
          "Designed 24'' deep",
          "Integrated LED lighting package",
          "Soft-close drawers",
          "Glass soft-close cabinet doors",
          "Accessories",
        ],
        6: [
          "Designed 26'' deep",
          "Integrated LED lighting package",
          "Soft-close drawers & handles",
          "Glass soft-close cabinet doors",
          "Accessories",
        ],
        10: [
          "Designed 30'' deep",
          "Integrated LED lighting package",
          "Soft-close drawers & handles",
          "Glass/Steel soft-close cabinet doors",
          "Accessories",
        ],
      },
    },
    {
      name: "GreenHills",
      id: uuidv4(),
      slideNo: 2,
      imageUrl:
        "https://www.pexels.com/photo/modern-dark-kitchen-in-spacious-stylish-flat-6969864/",
      amount: {
        4: 7099,
        6: 8659,
        10: 10888,
      },

      mainPriceFactors: {
        4: [
          "Size of space - 4",
          "Number of doors & drawers - 3/4",
          "Lighting & accessories - dark/yes",
          "Finish color - matt",
          "Wall mounted - yes",
        ],
        6: [
          "Size of space - 6",
          "Number of doors & drawers - 4/6",
          "Lighting & accessories - dark/yes",
          "Finish color - matt & shine",
          "Wall mounted - yes",
        ],
        10: [
          "Size of space - 10",
          "Number of doors & drawers - 8/10",
          "Lighting & accessories - dark/yes",
          "Finish color - matt finish / shine",
          "Wall mounted - yes",
        ],
      },
      features: {
        4: [
          "Designed 24'' deep",
          "Integrated LED matt package",
          "Soft-close drawers",
          "hard-plastic soft-close doors",
          "Accessories",
        ],
        6: [
          "Designed 26'' deep",
          "Integrated LED matt package",
          "Soft-close drawers & handles",
          "Glass/hard-plastic soft-close doors",
          "Accessories",
        ],
        10: [
          "Designed 30'' deep",
          "Integrated LED matt package",
          "Soft-close drawers & handles",
          "Glass/Steel/hard-plastic soft-close doors",
          "Accessories",
        ],
      },
    },
    {
      name: "Blossom",
      id: uuidv4(),
      slideNo: 3,
      imageUrl:
        "https://www.pexels.com/photo/interior-of-modern-minimalist-kitchen-with-glossy-cabinets-7061668/",
      amount: {
        4: 8854,
        6: 9543,
        10: 10354,
      },

      mainPriceFactors: {
        4: [
          "Size of space - 4",
          "Number of doors & drawers - 3/4",
          "Lighting & accessories - yes",
          "Finish color - shine/gloss",
          "Wall mounted - yes",
        ],
        6: [
          "Size of space - 6",
          "Number of doors & drawers - 4/6",
          "Lighting & accessories - yes",
          "Finish color - matt & shine/gloss",
          "Wall mounted - yes",
        ],
        10: [
          "Size of space - 10",
          "Number of doors & drawers - 8/10",
          "Lighting & accessories - yes",
          "Finish color - matt & shine/gloss",
          "Wall mounted - yes",
        ],
      },
      features: {
        4: [
          "Designed 24'' deep",
          "Integrated LED lighting package",
          "Soft-close drawers",
          "Glass soft-close cabinet doors",
          "Accessories",
        ],
        6: [
          "Designed 26'' deep",
          "Integrated LED lighting package",
          "Soft-close drawers & handles",
          "Glass soft-close doors & handles",
          "Accessories",
        ],
        10: [
          "Designed 30'' deep",
          "Integrated LED lighting package",
          "Soft-close drawers & handles",
          "Glass/Steel soft-close doors & handles",
          "Accessories",
        ],
      },
    },
  ],
  size: 4,
};
let counter = 1;

function showUI() {
  let { foundElement } = findSpecificElement(counter);
  let str = `
          <button class="btn"><i class="fa-solid fa-angle-left"></i></button>
          <h3>${foundElement.name}</h3>
          <button class="btn">
            <i class="fa-solid fa-angle-right"></i>
          </button>
  `;

  let str2 = `
    <p>As shown price:</p>
    <h2>$${foundElement.amount[state.size].toLocaleString()}</h2>
    <span>Installation service available</span>
  `;

  let str3 = foundElement.mainPriceFactors[state.size].reduce((acc, curr) => {
    return (
      acc +
      `
      <li><i class="fa-regular fa-circle"></i>${curr}</li>
      `
    );
  }, "");

  let str4 = foundElement.features[state.size].reduce((acc, curr) => {
    return (
      acc +
      `
      <li><i class="fa-solid fa-check"></i>${curr}</li>
      `
    );
  }, "");

  navbar.innerHTML = str;
  priceWrapper.innerHTML = str2;
  mainPriceFactorsUL.innerHTML = str3;
  featuresUL.innerHTML = str4;

  contentImage.style.background = `url(${foundElement.imageUrl}) no-repeat center center/cover`;
}

function findSpecificElement(countNo) {
  let foundElement, foundIdx;

  foundElement = state.data.find((element, idx) => {
    foundIdx = idx;
    return element.slideNo === countNo;
  });

  return {
    foundElement,
    foundIdx,
  };
}

function changeUI(e) {
  if (e.target.classList.contains("fa-angle-right")) {
    counter++;
    showUI();
    console.log(counter);
    if (counter === 4) {
      counter = 1;
    }
  } else if (e.target.classList.contains("fa-angle-left")) {
    counter--;
    showUI();
    // console.log(state.counter);
    if (counter === 0) {
      counter = 3;
    }
  }
}

function changeCloset(e) {
  closetSize.forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
  state.size = e.target.innerHTML.substring(0, 2).trim();
  showUI();
}

// Add EventListeners
window.addEventListener("load", showUI);
contentDescription.addEventListener("click", changeUI);
closetSize.forEach((item) => item.addEventListener("click", changeCloset));
