// notification center show and hide function
function toggleButton() {
  let icon = document.querySelector("#notification-icon");
  icon.src = "https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png";
  icon.classList.toggle("notification-icon-active");

  // if icon has active class, change icon to x
  icon.classList.contains("notification-icon-active")
    ? (icon.src =
        "https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png")
    : (icon.src =
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-256.png");

  let notificationDiv = document.querySelector("#notification-center");

  // if notification center is not visible, show it
  if (
    notificationDiv.style.display == null ||
    notificationDiv.style.display == "none"
  ) {
    notificationDiv.style.display = "flex";
    notificationDiv.style.flexDirection = "column";
  } else {
    notificationDiv.style.display = "none";
  }
}

// get last visited products from local storage
const getProducts = localStorage.getItem("ins-last-visited-products-49218");

const productsArray = JSON.parse(getProducts);
const productsArrayLength = productsArray.data.length;
const pathName = window.location.pathname;

// if there are more than 3 products and user is not in product page, show notification center
if (productsArrayLength > 3 && !pathName.includes("/tr-TR/TR/urun/")) {
  // get last 3 products
  const lastItemsProducts = productsArray.data.slice(
    Math.max(productsArray.data.length - 3, 1)
  );

  const mainDiv = document.querySelector("#header__container");

  const notificationContainer = document.createElement("div");
  notificationContainer.style.position = "relative";
  notificationContainer.style.zIndex = "100";

  mainDiv.appendChild(notificationContainer);

  const notificationIcon = document.createElement("img");
  notificationIcon.src =
    "https://www.freeiconspng.com/uploads/bell-icon-16.png";
  notificationIcon.style =
    "width: 50px; height: 50px; position: fixed; top: 200px; right: 5px; cursor: pointer; padding: 4px; background-image: #f2f2f2 z-index: 200; background: #f5f5f5; border-radius: 50%";
  notificationIcon.id = "notification-icon";
  notificationIcon.onclick = toggleButton;

  notificationContainer.appendChild(notificationIcon);

  const notificationCenter = document.createElement("div");
  notificationCenter.id = "notification-center";
  notificationCenter.style =
    "position: fixed; top: 100px; right: 60px; display: none; width: 420px; border-radius: 8px; background-color: #fff; z-index: 200;";

  notificationContainer.appendChild(notificationCenter);

  const notificationTitle = document.createElement("h1");
  notificationTitle.innerText = "Discover our deals";
  notificationTitle.style =
    "margin: 0; color: white; text-transform: uppercase; text-align: center; padding-top: 1rem; padding-bottom: 1rem; background-color: purple; border-radius: 8px 8px 0 0;";

  notificationCenter.appendChild(notificationTitle);

  for (let i = 0; i < lastItemsProducts.length; i++) {
    // get product info
    const productName = lastItemsProducts[i].name;
    const productDescription = lastItemsProducts[i].name;
    const productImage = lastItemsProducts[i].product_image_url;
    const productLink = lastItemsProducts[i].url;

    const cardRedirect = document.createElement("a");
    cardRedirect.href = productLink;
    cardRedirect.target = "_blank";
    cardRedirect.style =
      "text-decoration: none; padding: 0px 8px 8px 8px; color: black;";

    const card = document.createElement("div");
    card.style =
      "background-color: #fff; border-radius: 10px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; display: flex; max-width: 100%; margin: 8px; overflow: hidden; width: 400px;";

    const cardImage = document.createElement("img");
    cardImage.src = productImage;
    cardImage.style = "width: 200px; height: 150px;";

    card.appendChild(cardImage);

    const cardInfo = document.createElement("div");
    cardInfo.style =
      "padding: 0px 20px 0px 20px; position: relative; width: 100%;";

    const cardBottomRightText = document.createElement("span");
    cardBottomRightText.innerText = "New";
    cardBottomRightText.style =
      "position: absolute; bottom: 10px; right: 10px; background-color: #2A265F; color: white; padding: 4px; border-radius: 4px; font-size: 10px; letter-spacing: 1px;";

    const cardName = document.createElement("h3");
    cardName.innerText = productName;

    const cardDescription = document.createElement("p");
    cardDescription.innerText = productName;

    cardInfo.appendChild(cardBottomRightText);
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardDescription);

    card.appendChild(cardInfo);

    cardRedirect.appendChild(card);

    notificationCenter.appendChild(cardRedirect);
  }
}
