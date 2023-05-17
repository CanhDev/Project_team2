const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var modalE = $(".modal");
var modal__lay = $(".modal__lay");
var registerE = $(".auth-form--register");
var loginE = $(".auth-form--login");
var btn__registerE = $(".btn-register--js");
var switch__btnLogin = $(".switch-btnLogin--js");
var switch__btnRegister = $(".switch-btnRegister--js");
var btn__back = $$(".btn-back--js");
// nút booking
var registerE2 = $(".auth-form--register-2");
var modal_booking = $(".modal-2");
var modal_booking_lay = $(".modal-2__lay");
var bookingBtn = $$(".btn-tour--js");
function open__register2() {
  modal_booking.classList.add("open-flex");
  modal_booking_lay.classList.add("open-block");
  registerE2.classList.add("open-block");
}
function closeE2() {
  modal_booking.classList.remove("open-flex");
}
bookingBtn.forEach((item, i) => {
  item.addEventListener("click", open__register2);
});
modal_booking_lay.addEventListener("click", closeE2);
for (var btn_back of btn__back) {
  btn_back.addEventListener("click", closeE2);
}
//
function open__register() {
  modalE.classList.add("open-flex");
  modal__lay.classList.add("open-block");
  registerE.classList.add("open-block");
  loginE.classList.remove("open-block");
}
function open__login() {
  modalE.classList.add("open-flex");
  modal__lay.classList.add("open-block");
  loginE.classList.add("open-block");
  registerE.classList.remove("open-block");
}
function closeE() {
  modalE.classList.remove("open-flex");
}
btn__registerE.addEventListener("click", open__register);
modal__lay.addEventListener("click", closeE);
switch__btnLogin.addEventListener("click", open__login);
switch__btnRegister.addEventListener("click", open__register);
for (var btn_back of btn__back) {
  btn_back.addEventListener("click", closeE);
}
//search
var headerB_search_btn = $(".search-header-icon");
var headerB_search = $(".header-search");
var headerB_search_input = $(".header-search__input");
headerB_search_btn.onclick = () => {
  headerB_search.classList.toggle("open-header-search");
  headerB_search_input.classList.toggle("open-header-search");
  $("#header").classList.toggle("header-height-open");
};
//guide
var guide_itemList = $$(".guide-item-wrapper");
var guide_item_descList = $$(".guide-item-desc-wrapper");

guide_itemList.forEach((guide_item, index) => {
  guide_item.onclick = () => {
    guide_item_descList[index].classList.toggle("open-guide");
  };
});
// besttour
const Btour_container = $$(".Btour-container");
const nxtBtn = $$(".nxt-btn");
const preBtn = $$(".pre-btn");

Btour_container.forEach((item, index) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtn[index].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[index].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
//admin-signup
const adBtn = $(".btnDN--js");
const emailInput = $(".email--js");
const passWInput = $(".pass--js");

adBtn.onclick = (e) => {
  let check = emailInput.value == "admin" && passWInput.value == "admin";
  if (!check) {
    e.preventDefault();
  }
};
//menu-mobile
const overlayMobile = $(".overlayMB");
const menuMobile = $(".menu-listMB");
const items_MB = $$(".menu-listMB-items");
const menuMB_icon = $(".menuMB__icon");

function closeMenu_MB() {
  overlayMobile.classList.remove("open-block");
  menuMobile.classList.remove("open-block");
}
menuMB_icon.onclick = () => {
  overlayMobile.classList.toggle("open-block");
  menuMobile.classList.toggle("open-block");
};

overlayMobile.addEventListener("click", closeMenu_MB);

items_MB.forEach((item, i) => {
  item.addEventListener("click", closeMenu_MB);
});
//scroll top

const header_top = $(".headerT");
const headertop_height = header_top.offsetHeight;
document.onscroll = function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const newheaderheight = headertop_height - scrollTop;
  header_top.style.height = newheaderheight > 0 ? newheaderheight + "px" : 0;
  header_top.style.opacity = newheaderheight / headertop_height;
};
