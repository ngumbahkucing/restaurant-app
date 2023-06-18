import UrlParser from '../../routes/url-parser';
import Restaurant from '../../data/restaurant';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteResto from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
      <h2 class="title-explore">Detail Restaurant</h2>
      <div id="resto" class="card"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await Restaurant.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteResto,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        rating: resto.rating,
        pictureId: resto.pictureId,
      },
    });
  },
};

export default Detail;
