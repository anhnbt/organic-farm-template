var arrSP = [
  {
    tenSP: 'Onion',
    gia: '$2',
    hinh: 'https://product.hstatic.net/200000536787/product/upload_9531ce3d7338402894ca9963b1bd7958_1024x1024_f20d05c1d29444dabeee118d395f0093_1024x1024.jpg',
    type: 'onion',
  },
  {
    tenSP: 'Salad',
    gia: '$3',
    hinh: 'https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg',
    type: 'salad',
  },
  {
    tenSP: 'Pumpkin',
    gia: '$5',
    hinh: 'https://thucphamsachvita.com/wp-content/uploads/2020/06/bi-do-3.jpg',
    type: 'pumpkin',
  },
  {
    tenSP: 'Carrot',
    gia: '$1',
    hinh: 'https://product.hstatic.net/200000423303/product/ca-rot-huu-co_051657cb99144443bac8015f6dd34dae.jpg',
    type: 'carrot',
  },
  {
    tenSP: 'Cabbage',
    gia: '$2',
    hinh: 'https://product.hstatic.net/200000423303/product/bap-cai-huu-co_203a09f5391b4cb59bbad82f94c1cd7d.jpg',
    type: 'cabbage',
  },
  {
    tenSP: 'Kankoo rapeseed oil',
    gia: '$21',
    hinh: 'https://cdn.tgdd.vn/Products/Images/2286/237078/bhx/dau-hat-cai-kankoo-chai-1-lit-202104171101384850.jpg',
    type: 'rapeseedoil',
  },
  {
    tenSP: 'Simply rapeseed oil',
    gia: '$30',
    hinh: 'https://cdn.tgdd.vn/Products/Images/2286/76167/bhx/dau-hat-cai-nguyen-chat-simply-chai-1-lit-202201181532564460.jpg',
    type: 'rapeseedoil',
  },
  {
    tenSP: 'Extra Virgin Olivoila',
    gia: '$32',
    hinh: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/365/460/products/dau-oliu-extra-virgin-750ml.jpg?v=1571648300393',
    type: 'oliveoil',
  },
  {
    tenSP: 'Truffle Flavored olive oil',
    gia: '$26',
    hinh: 'https://product.hstatic.net/200000330299/product/extra-virgin-olive-oil-with-basil-250mll-metro-chef_5db11b7735e246b9b9cbc1e07d3d148a_large.jpg',
    type: 'oliveoil',
  },
  {
    tenSP: 'Daesang Cooking corn oil',
    gia: '$30',
    hinh: 'https://cf.shopee.vn/file/a62046a4f2ce38adafebbb19f0573b95',
    type: 'cornoil',
  },
  {
    tenSP: 'Mazola Cooking corn oil',
    gia: '$32',
    hinh: 'https://c5e3u5z6.rocketcdn.me/wp-content/uploads/bfi_thumb/Untitled-design-7-1-phj5npytu7pqtadtch80v6hpwrq80s5nam52qzjf28.png',
    type: 'cornoil',
  },
  {
    tenSP: 'Bio Planete Avocado oil',
    gia: '$40',
    hinh: 'https://omamart.vn/wp-content/uploads/2019/04/dau-bo-ep-lanh-huu-co-bio-planete.jpg',
    type: 'avocadooil',
  },
  {
    tenSP: 'pure peanut oil',
    gia: '$12',
    hinh: 'https://salt.tikicdn.com/ts/product/13/c3/84/01bd48f1967e6b771e6886b1dff6656b.jpg',
    type: 'peanutoil',
  },
  {
    tenSP: 'Pure avocado oil',
    gia: '$39',
    hinh: 'https://product.hstatic.net/200000485529/product/dau-bo-nguyen-chat-avocado-mt_02e0e5ffde664a95aa7f423cd8a0318f_master.jpg',
    type: 'avocadooil',
  },
  {
    tenSP: 'Dam Ha peanut oil',
    gia: '$13',
    hinh: 'http://hn.check.net.vn/Data/product/mainimages/original/product6235.jpg',
    type: 'peanutoil',
  }
]

function showSP(type_arr=[]) {
  var all_item = document.getElementById("all_item");
  all_item.innerHTML = '';
  for (i = 0; i < arrSP.length; i++) {
    type = arrSP[i].type;
    console.log(type);
    gia = arrSP[i].gia;
    console.log(gia);
    if (type_arr.length > 0) {
      if (type_arr.includes(type) == false) continue;
    }
    all_item.innerHTML += `
                <div class="item col-sm-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="${arrSP[i].hinh}" class="img-fluid" alt="">
                    </div>
                    <div class="thumb-content">
                      <h4>Onion</h4>
                      <p class="item-price"><span>${arrSP[i].gia}</span></p>
                      <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                  </div>
                </div>
    `;
  }
}
showSP();

function chonSP() {
  var arr1 = document.getElementsByClassName("type");
  var type_arr = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i].checked == true) type_arr.push(arr1[i].value);
  }
  showSP(type_arr);
}