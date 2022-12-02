import pageLoad from "./page-load";
import secondTabLoad from "./secondTab";
import thirdTabLoad from "./thirdTab";

const firstTabBtn = document.getElementById("firstTab");
const secondTabBtn = document.getElementById("secondTab");
const thirdTabBtn = document.getElementById("thirdTab");
const content = document.getElementById("content");

firstTabBtn.addEventListener("click", function () {
  content.innerHTML = "";
  pageLoad();
  firstTabBtn.style.backgroundColor = "red";
  secondTabBtn.style.backgroundColor = "lightblue";
  thirdTabBtn.style.backgroundColor = "lightblue";
});

secondTabBtn.addEventListener("click", function () {
  content.innerHTML = "";
  secondTabLoad();
  secondTabBtn.style.backgroundColor = "red";
  firstTabBtn.style.backgroundColor = "lightblue";
  thirdTabBtn.style.backgroundColor = "lightblue";
});

thirdTabBtn.addEventListener("click", function () {
  content.innerHTML = "";
  thirdTabLoad();
  thirdTabBtn.style.backgroundColor = "red";
  secondTabBtn.style.backgroundColor = "lightblue";
  firstTabBtn.style.backgroundColor = "lightblue";
});

pageLoad();
firstTabBtn.style.backgroundColor = "red";
