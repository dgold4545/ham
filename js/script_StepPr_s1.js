let serviceNav = document.querySelectorAll(".service_item");
let serviceContent = document.querySelectorAll(".service__content_item");

serviceContent.forEach((item) => {
  item.style = "display: none";
});

serviceContent[0].style = "display: grid";

serviceNav.forEach((item, index) => {
  item.setAttribute("data-value", index + 1);
  let navValue = +item.getAttribute("data-value");

  item.addEventListener("click", () => {
    serviceNav.forEach((active) => active.classList.remove("active"));

    item.classList.add("active");

    serviceContent.forEach((item, index) => {
      item.style = "display: none";
      if (index + 1 === navValue) {
        item.style = "display: grid";
      }
    });
  });
});
