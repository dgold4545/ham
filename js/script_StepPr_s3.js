// ЗМІННІ:

const workImagesList = document.querySelector(".work__images_list");
const workBtn = document.querySelector("#work_btn");
let workImgItems = document.getElementsByClassName("work__images_item");
let workImgItemsQuery = document.querySelectorAll(".work__images_item");
const DataTypes = [
  "LandingPages",
  "Wordpress",
  "graphDesign",
  "WebDesign",
  "graphDesign",
  "Wordpress",
  "LandingPages",
  "graphDesign",
  "WebDesign",
  "Wordpress",
  "LandingPages",
  "LandingPages",
  "graphDesign",
  "Wordpress",
  "LandingPages",
  "WebDesign",
  "graphDesign",
  "Wordpress",
  "LandingPages",
  "graphDesign",
  "WebDesign",
  "Wordpress",
  "LandingPages",
  "WebDesign",
];

const workLoader = document.querySelector(".loader");
let workCounter = 0;

// GENERAL FUNCTIONAL:

// Button:

workBtn.addEventListener("click", function () {
  workCounter += 1;

  createLoadStyling();

  function counterClick(numStart, numEnd) {
    for (let i = numStart; i <= numEnd; i++) {
      let imageItem = document.createElement("li");
      imageItem.classList.add("work__images_item");

      let currentDataTypes = DataTypes[i - 1];
      imageItem.setAttribute("data-type", currentDataTypes);

      imageItem.innerHTML = `<img class="work_img" src="./img/pictures_gen/s3_amazing-work-add/graphic-design${i}.jpg" alt="Image_Amazing_Work" />`;
      workImagesList.append(imageItem);
    }

    workImgItemsQuery = document.querySelectorAll(".work__images_item"); //оновлюємо li післе першого, та другого натискання на кнопку
    hoverPanel(workImgItemsQuery); // Запускаємо функцію hoverPanel уже після натискання на кнопку
  }

  // Функції стилізації зображенні під час емітації завантаження картинок.
  // Приглушає тональність та робить їх сірими під час псевдозавантаження

  function createLoadStyling() {
    workImagesList.style = "opacity: 0.2";
    workLoader.style = "display: block";
  }

  function removeLoadStyling() {
    workImagesList.style = "opacity: 1";
    workLoader.style = "display: none";
  }

  // Timer:

  function workTimeSet(numStart, numEnd, btnInvisible) {
    setTimeout(() => {
      removeLoadStyling();
      counterClick(numStart, numEnd);
      workBtn.hidden = btnInvisible;
    }, 2000);
  }

  if (workCounter === 1) {
    workTimeSet(1, 12);
  } else if (workCounter === 2) {
    workTimeSet(13, 24, true);
  }
});

hoverPanel(workImgItemsQuery); // Запускаємо функцію hoverPanel уперший раз, при завантаженні сторінки

// Filters:

function filterImages(filter) {
  for (let i = 0; i < workImgItems.length; i++) {
    let imagesLi = workImgItems[i];
    let dataFilter = imagesLi.getAttribute("data-type");

    if (filter === "all") {
      imagesLi.style.display = "flex";
    } else if (
      (filter === "graphDesign" && dataFilter === "graphDesign") ||
      (filter === "WebDesign" && dataFilter === "WebDesign") ||
      (filter === "LandingPages" && dataFilter === "LandingPages") ||
      (filter === "Wordpress" && dataFilter === "Wordpress")
    ) {
      imagesLi.style.display = "block";
    } else {
      imagesLi.style.display = "none";
    }
  }
}

// NAVIGATION BAR

const navList = document.querySelector(".work__nav_list");
const navItems = document.querySelectorAll(".work__nav_item");

navList.addEventListener("click", (event) => {
  let navLi = event.target.closest("li");

  if (navLi.classList.contains("active")) {
    removeNavAction();
    for (img of workImgItems) {
      img.style.display = "flex";
    }
    navItems[0].classList.add("active");

    // Upgrade. Alternative option:
    // if (navLi === navItems[0] && navLi.classList.contains("active")) {
    //   navLi.classList.remove("active");
    // }
  } else {
    removeNavAction();
    navLi.classList.add("active");
  }

  function removeNavAction() {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

// HOVER LINK PANEL

const workImagas = document.querySelectorAll(".work_img");

const ghostContent = `<div class="work__content">
<div class="work__content_icons">
  <a href="#key-amazing">
    <svg class="work__content_start" xmlns="http://www.w3.org/2000/svg" width="48" height="43" viewBox="0 1 42 42">
      <g clip-path="url(#clip0_2143_233)">
      <rect x="1" y="2" width="40" height="40" rx="20" stroke="#18CFAB" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z" />
      </g>
    </svg>
  </a>
  <a href="#work_btn">
    <svg class="work__content_stop" xmlns="http://www.w3.org/2000/svg" width="48" height="43" viewBox="45 1 43 43" >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z" fill="#18CFAB" />
    <rect x="60" y="17" width="12" height="11" />
    </svg>
  </a>
</div>
<div>
  <p class="work__content_title">creative design</p>
  <p class="work__content_text">Web Design</p>
</div>
                      </div>`;

workImagesList.addEventListener("click", (event) => {
  const targetContentItem = event.target.closest(".work__images_item");
  if (!targetContentItem) return;

  const targetImg = targetContentItem.querySelector("img");

  document.querySelectorAll(".work__content").forEach((item) => {
    item.remove();
  });

  document.querySelectorAll(".work_img").forEach((item) => {
    item.classList.remove("work__hidden");
  });

  targetContentItem.insertAdjacentHTML("afterbegin", ghostContent);
  targetImg.classList.add("work__hidden");
});

function hoverPanel(panel) {
  panel.forEach((item) => {
    item.addEventListener("mouseenter", (mouseEvent) => {
      const targetContentItem = mouseEvent.target.closest("li");
      if (!targetContentItem) return;

      const targetImg = targetContentItem.querySelector("img");
      targetContentItem.insertAdjacentHTML("afterbegin", ghostContent);
      targetImg.classList.add("hover_hidden");
    });

    item.addEventListener("mouseleave", (mouseEvent) => {
      const targetContentItem = mouseEvent.target.closest("li");
      if (!targetContentItem) return;

      const targetImg = targetContentItem.querySelector("img");
      targetImg.classList.remove("hover_hidden");

      const targetContent = targetContentItem.querySelector(".work__content");
      if (targetContent) {
        targetContent.remove();
      }
    });
  });
}
