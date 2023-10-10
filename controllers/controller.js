const renderNavList = (navList) => {
  let content = "";
  navList.forEach((element) => {
    content += `
           <li class="nav-item" data-type="${element.type}">
           <a class="nav-link active" onclick="fetchProductList()" href="#">${element.showName}</a>
         </li>
               `;
  });
  const navPillsContainer = document.querySelector("#navPills");
  navPillsContainer.innerHTML = content;
};

const renderProductList = (productList) => {
  let content = "";
  productList.forEach((element) => {
    content += `
    <div class="col-lg-3 col-md-6 mb-5">
    <div class="card justify-content-center">
    <img src="${element.imgSrc_jpg}" class="card-img-top" style="height: 100%;" alt="">
    <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <button href="#" class="btn btn-primary">Thử đồ</button>
    </div>
</div>
    </div>
    `;
  });
  document.querySelector("#tabPane").innerHTML = content;
};
