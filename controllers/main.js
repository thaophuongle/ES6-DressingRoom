const navPillsContainer = document.querySelector("#navPills");

const fetchNavItemsList = () => {
  getNavItemsList()
    .then((res) => {
      renderNavList(res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

fetchNavItemsList();

const fetchProductList = () => {
  getProductList()
    .then((res) => {
      navPillsContainer.querySelectorAll("li").forEach((tab) => {
        tab.addEventListener("click", () => {
          const type = tab.getAttribute("data-type");

          const products = res.data.filter((product) => product.type === type);
          renderProductList(products);
        });
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
fetchProductList();

const thuDo = (id) => {
  getProductById(id)
    .then((res) => {
      const product = res.data;

      let targetImg;
      switch (product.type) {
        case "topclothes":
          targetImg = document.getElementById("bikinitopImg");
          break;
        case "botclothes":
          targetImg = document.getElementById("bikinibottomImg");
          break;
        case "shoes":
          targetImg = document.getElementById("feetImg");
          break;
        case "handbags":
          targetImg = document.getElementById("handbagImg");
          break;
        case "necklaces":
          targetImg = document.getElementById("necklaceImg");
          break;
        case "hairstyle":
          targetImg = document.getElementById("hairstyleImg");
          break;
        case "background":
          targetImg = document.getElementById("backgroundImg");
          break;
        default:
          targetImg = null;
          break;
      }
      if (targetImg) {
        targetImg.src = product.imgSrc_png;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
