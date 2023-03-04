function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function changeThumbnail(src) {
	document.getElementById(
		"product-thumbnail"
	  ).style.backgroundImage = `url(${src})`;
	  document.getElementById("product-thumbnail-img").src = src;
}

function getDetailData() {
  const queryId = getProductId();
  const rslt = products.find((product) => product.id === +queryId);
  if (!rslt) {
    document.getElementById('contentarea').innerHTML = `<div class="card text-center p-4 my-4"><h1>404 Not Found</h1><p>Sorry, We Couldn't Find This Page.</p></div>`;
    return;
  }
  console.log(document.getElementById("product-price"));
  document.getElementById("product-category").textContent = `${rslt.category}`;
  document.getElementById("product-price").innerHTML = `$${rslt.price}`;
  document.getElementById(
    "product-discountPercentage"
  ).innerHTML = `$${rslt.discountPercentage}`;
  document.getElementById(
    "product-review"
  ).innerHTML = `(${rslt.review} reviews)`;
  document.getElementById("product-title").innerHTML = rslt.title;
  if (rslt.description) {
    document.getElementById("product-description").innerHTML = rslt.description;
  } else {
    document.getElementById("product-description").innerHTML = 'No content';
  }
  document.getElementById(
    "product-thumbnail"
  ).style.backgroundImage = `url(${rslt.thumbnail})`;
  document.getElementById("product-thumbnail-img").src = rslt.thumbnail;
  let images = "";
  rslt.images.forEach((img) => {
    images += `<div class="col-3"><img style="cursor: pointer" src="${img}" alt="" onclick="changeThumbnail('${img}')"></div>`;
  });
  document.getElementById("product-images").innerHTML = images;
  document.getElementById('product-related').innerHTML = 'No release.';
}

getDetailData();

function increaseValue() {
  var value = parseInt(document.getElementById("product-quantity").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("product-quantity").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("product-quantity").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("product-quantity").value = value;
}
