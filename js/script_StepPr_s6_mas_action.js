window.onload = () => {
  const grid = document.querySelector(".gallery_list");
  const galleryBtn = document.querySelector("#gallery_btn");
  const galleryLoader = document.querySelector(".loader");

  let galleryItem = document.querySelectorAll(".gallery__item");
  let galleryCounter = 0;

  newCreateGallery();
  galleryVisibles(8, 25, "none");

  const masonry = new Masonry(grid, {
    itemSelector: `.gallery__item`,
    gutter: 20,
    originLeft: false,
  });

  galleryBtn.addEventListener("click", () => {
    galleryCounter += 1;

    createLoadStylGallery();

    if (galleryCounter === 1) {
      TimeSetGallery(8, 16, "block");
    } else if (galleryCounter === 2) {
      TimeSetGallery(16, 25, "block", true);
    }

    masonry.layout();
  });

  // FUNCTIONS:

  function newCreateGallery() {
    for (let i = 0; i < 17; i++) {
      let newElement = document.createElement("li");
      newElement.innerHTML = `<img class="gallery__img" src="./img/pictures_gen/s6_best-img/s5-bi_${
        i + 1
      }.jpeg" alt="Gallery-images"/>`;
      newElement.classList.add("gallery__item");
      grid.append(newElement);

      galleryItem = document.querySelectorAll(".gallery__item");
    }
  }

  function galleryVisibles(numStart, numEnd, itemVisibles) {
    for (let i = numStart; i < numEnd; i++) {
      galleryItem[i].style.display = `${itemVisibles}`;
    }
  }

  function createLoadStylGallery() {
    galleryLoader.style = "display: block";
    grid.classList.add("opacity");
  }

  function removeLoadStylGallery() {
    grid.classList.remove("opacity");
    galleryLoader.style.display = "none";
  }

  function TimeSetGallery(numStart, numEnd, itemVisibles, btnInvisibles) {
    setTimeout(() => {
      removeLoadStylGallery();
      galleryVisibles(numStart, numEnd, itemVisibles);
      galleryBtn.hidden = btnInvisibles;
      masonry.layout();
    }, 2000);
  }
};
