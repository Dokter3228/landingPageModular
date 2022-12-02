function secondTabLoad() {
  let content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  h1.textContent = "Second Tab Loaded";
  content.appendChild(h1);
  let img = document.createElement("img");
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/GrandeTaberna.JPG";
  content.appendChild(img);
  let p = document.createElement("p");
  p.textContent =
    "A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[6] A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat comparable to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of";
  content.appendChild(p);
}

export default secondTabLoad;
