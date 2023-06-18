import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<div id="restaurant-item">
<div class="restaurant-list_header">
    <picture>
      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_URL}images/small/${resto.pictureId}">
      <img loading="lazy" class="restaurant-list_headerimage lazyload" alt="${resto.name}" data-src="${CONFIG.BASE_URL}images/large/${resto.pictureId}" crossorigin="anonymous">
    </picture>
    <div class="restaurant-list-rating">
      <h3>Rating: <span class="restaurant-list_headerratingscore">${resto.rating}</span></h3>
    </div>
</div>
<div class="restaurant-list_content">
    <h3><a href="/#/detail/${resto.id}" class="link-detail">${resto.name}</a></h3>
    <p class="title-detail">Alamat:</p>
    <p class="detail-content">${resto.address}</p>
    <p class="title-detail">Kota:</p>
    <p class="detail-content">${resto.city}</p>
    <p class="title-detail">Deskripsi:</p>
    <p>${resto.description} ${resto.city}</p>
    <p class="title-detail">Kategori:</p>
    <p class="detail-content">${resto.categories.map((cat) => `${cat.name} `)}</p>
    <p class="title-detail">Menu Makanan:</p>    
    <p class="detail-content">${resto.menus.foods.map((food) => `${food.name}`)}</p>
    <p class="title-detail">Menu Minuman:</p>
    <p class="detail-content">${resto.menus.drinks.map((drink) => `${drink.name}`)}</p>
    <p class="title-detail">Review:</p>
    <p class="detail-content">${resto.customerReviews.map((review) => `Tanggal: ${review.date}<br>Nama: ${review.name}<br>Review: ${review.review}<br>`)}<br><br></p>
</div>
</div>
`;

const createRestoItemTemplate = (resto) => `


<div id="restaurant-item">
<div class="restaurant-list_header">
    <picture>
      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_URL}images/small/${resto.pictureId}">
      <img loading="lazy" class="restaurant-list_headerimage lazyload" alt="${resto.name}" data-src="${CONFIG.BASE_URL}images/large/${resto.pictureId}" crossorigin="anonymous">
    </picture>
    
    <div class="restaurant-list-rating">
      <h3>Rating: <span class="restaurant-list_headerratingscore">${resto.rating}</span></h3>
    </div>
</div>
<div class="restaurant-list_content">
    <h3><a href="/#/detail/${resto.id}" class="link-detail">${resto.name}</a></h3>
    <p>${resto.description}</p>
</div>
</div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
