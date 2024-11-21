// CAROUSEL

const list = document.querySelector(".carousel__list");
let icons = document.querySelectorAll(".carousel__item");

let thumbs = document.querySelector("#thumbs");

const leftBtn = document.querySelector(".carousel__btn.left");
const rightBtn = document.querySelector(".carousel__btn.right");

let scrollInterval;

// CREATE ELEMENTS:
// function carouselCreateItems() {
//   for (let i = 0; i < 10; i++) {
//     let carouselLiCraete = document.createElement("li");
//     carouselLiCraete.innerHTML = `<img class="carousel__img" src="./img/pictures_gen/s5_people-say/s5-ps_${
//       i + 1
//     }.gif" alt="Unit Avatar Character ${i + 1}"/>`;
//     carouselLiCraete.classList.add("carousel__item");
//     thumbs.append(carouselLiCraete);
//   }
// }
// carouselCreateItems();

function startScroll(direction) {
  scrollInterval = setInterval(() => carouselBtn(direction), 200);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

leftBtn.addEventListener("mousedown", () => startScroll("prev"));
rightBtn.addEventListener("mousedown", () => startScroll("next"));

leftBtn.addEventListener("mouseup", stopScroll);
leftBtn.addEventListener("mouseleave", stopScroll);
rightBtn.addEventListener("mouseup", stopScroll);
rightBtn.addEventListener("mouseleave", stopScroll);

function carouselBtn(direction) {
  if (direction === "prev") {
    list.prepend(icons[icons.length - 1]);
  } else if (direction === "next") {
    list.append(icons[0]);
  }
  icons = document.querySelectorAll(".carousel__item");

  removeAction();
}

// VIEWPORT

let profile = document.querySelectorAll(".user__profile");
let quote = document.querySelectorAll(".user__quote");

icons.forEach((item, index) => {
  item.setAttribute("data-icon", index + 1);
});

profile.forEach((item, index) => {
  item.hidden = true;
  item.setAttribute("data-profile", index + 1);
});

quote.forEach((item, index) => {
  item.hidden = true;
  item.setAttribute("data-quote", index + 1);
});

// CAROUSEL ACTIONS:

thumbs.onclick = function (event) {
  // thumbs – id
  let thumbBoxLi = event.target.closest("li");
  let thumbnail = event.target.closest("img");

  if (!thumbnail) return;

  showProfile(thumbBoxLi);
  showThumb(thumbnail.src, thumbnail.alt);
  toggleAction(thumbBoxLi);

  event.preventDefault();
};

// CAROUSEL WORKSHOP:

function showThumb(href, title) {
  viewImg.src = href;
  viewImg.alt = title;
}

function startedSection() {
  const startItem = icons[0];
  const startImg = icons[0].querySelector("img");

  showProfile(startItem);
  showThumb(startImg.src, startImg.alt);
  
  removeAction()
}
startedSection();

function showProfile(prof) {
  let iconBox = prof.getAttribute("data-icon");
  profile.forEach((item) => {
    item.hidden = true;
    if (iconBox === item.getAttribute("data-profile")) {
      item.hidden = false;
    }
  });
  quote.forEach((item) => {
    item.hidden = true;
    if (iconBox === item.getAttribute("data-quote")) {
      item.hidden = false;
    }
  });
}

function toggleAction(li) {
  if (li.classList.contains("active")) {
    li.classList.remove("active");
  } else {
    removeAction();
    li.classList.add("active");
  }
}

function removeAction() {
  icons.forEach((item) => {
    item.classList.remove("active");
  });
}
