// JAVA EXTRA CAROUSEL:

const listExtra = document.querySelector(".carousel__list_extra");
const leftBtnExtra = document.querySelector(".carousel__btn_extra.left_extra");
const rightBtnExtra = document.querySelector(
  ".carousel__btn_extra.right_extra"
);
let iconsExtra = document.querySelectorAll(".carousel__item_extra");
let thumbsExtra = document.querySelector("#thumbs_extra");

// SCROLL BUTTONS:

let scrollIntervalExtra;

function startScrollExtra(direction) {
  scrollIntervalExtra = setInterval(() => carouselBtnExtra(direction), 200);
}

function stopScrollExtra() {
  clearInterval(scrollIntervalExtra);
}

leftBtnExtra.addEventListener("mousedown", () =>
  startScrollExtra("prev_extra")
);
rightBtnExtra.addEventListener("mousedown", () =>
  startScrollExtra("next_extra")
);

leftBtnExtra.addEventListener("mouseup", stopScrollExtra);
leftBtnExtra.addEventListener("mouseleave", stopScrollExtra);
rightBtnExtra.addEventListener("mouseup", stopScrollExtra);
rightBtnExtra.addEventListener("mouseleave", stopScrollExtra);

// VIEWPORT

let profileExtra = document.querySelectorAll(".user__profile");
let quoteExtra = document.querySelectorAll(".user__quote");

iconsExtra.forEach((item, index) => {
  item.setAttribute("data-icon_extra", index + 1);
});

profileExtra.forEach((item, index) => {
  item.hidden = true;
  item.setAttribute("data-profile_extra", index + 1);
});

quoteExtra.forEach((item, index) => {
  item.hidden = true;
  item.setAttribute("data-quote_extra", index + 1);
});

// CAROUSEL ACTIONS:

function carouselBtnExtra(direction) {
  if (direction === "prev_extra") {
    // Old shcool method :
    listExtra.insertBefore(
      listExtra.lastElementChild,
      listExtra.firstElementChild
    );
    // listExtra.prepend(iconsExtra[iconsExtra.length - 1]); // Another option, more moder method
  } else if (direction === "next_extra") {
    listExtra.insertBefore(
      listExtra.firstElementChild,
      listExtra.lastElementChild
    );
    // listExtra.append(iconsExtra[0]); // Another option, more moder method
  }
  iconsExtra = document.querySelectorAll(".carousel__item_extra");

  generalThumb();
}

thumbsExtra.onclick = function (event) {
  const thumbTargetItem = event.target.closest("li");
  const thumbTargetImage = event.target.closest("img");

  if (!thumbTargetImage) return;

  const itemsArray = Array.from(listExtra.children);
  const matchId = itemsArray.indexOf(thumbTargetItem);

  let turnNumber = (2 - matchId + itemsArray.length) % itemsArray.length;

  for (let i = 0; i < turnNumber; i++) {
    listExtra.insertBefore(
      listExtra.lastElementChild,
      listExtra.firstElementChild
    );
  }

  generalThumb();

  showThumbExtra(thumbTargetImage.src, thumbTargetImage.alt);
  showProfileExtra(thumbTargetItem);

  event.preventDefault();
};

function generalThumb() {
  const genItemThumb = thumbsExtra.querySelector("li:nth-of-type(3)");
  const genImgThumb = thumbsExtra.querySelector("li:nth-of-type(3) img");

  showProfileExtra(genItemThumb);
  addActionExtra(genItemThumb);
  showThumbExtra(genImgThumb.src, genImgThumb.alt);
}

// generalThumb();

function showThumbExtra(href, title) {
  viewImg.src = href; // viewImg = id
  viewImg.alt = title;
}

// CAROUSEL WORKSHOP:

function showProfileExtra(prof) {
  const iconBoxExtra = prof.getAttribute("data-icon_extra");
  // const iconBoxExtra = prof.dataset.icon_extra; // alternative method
  profileExtra.forEach((item) => {
    item.hidden = true;
    if (iconBoxExtra === item.getAttribute("data-profile_extra")) {
      item.hidden = false;
    }
  });
  quoteExtra.forEach((quote) => {
    quote.hidden = true;
    if (iconBoxExtra === quote.getAttribute("data-quote_extra")) {
      quote.hidden = false;
    }
  });
}

function addActionExtra(item) {
  removeActionExtra();
  item.classList.add("active");
}

function removeActionExtra() {
  iconsExtra.forEach((itemExtra) => {
    itemExtra.classList.remove("active");
  });
}
