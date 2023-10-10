const BASE_URL_NAVPILLS =
  "https://6523df74ea560a22a4e8f5f6.mockapi.io/navPills";
const BASE_URL_TABPANES =
  "https://6523df74ea560a22a4e8f5f6.mockapi.io/tabPanes";

const getNavItemsList = () => {
  return axios({
    url: BASE_URL_NAVPILLS,
    method: "GET",
  });
};

const getProductList = () => {
  return axios({
    url: BASE_URL_TABPANES,
    method: "GET",
    // params: {
    //   type: productType,
    // },
  });
};
