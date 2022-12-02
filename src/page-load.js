function pageLoad() {
  let content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  h1.textContent = "Home";
  content.appendChild(h1);
  let img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80";
  content.appendChild(img);
  let p = document.createElement("p");
  p.textContent =
    "A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.";
  content.appendChild(p);
}

export default pageLoad;
