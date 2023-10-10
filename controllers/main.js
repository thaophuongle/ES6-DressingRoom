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

document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = navPillsContainer.querySelector(
    "[data-type='topclothes']"
  );
  if (defaultTab) {
    defaultTab.click();
  }
});
