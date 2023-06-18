import FavoriteResto from '../../data/favorite-resto';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="title-explore">Your Liked Restaurant</h2>
        <h2 id="not_found" class="resto_not_found">Tidak ada resto untuk ditampilkan</h2>
        <div class="card-container">
        <div id="resto" class="cards"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteResto.getAllResto();
    const restoContainer = document.querySelector('#resto');
    const notFoundContainer = document.querySelector('#not_found');

    resto.forEach((restox) => {
      notFoundContainer.innerHTML = '';
      restoContainer.innerHTML += createRestoItemTemplate(restox);
    });
  },
};

export default Favorite;
