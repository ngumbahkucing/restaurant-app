import Restaurant from '../../data/restaurant';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="title-explore">Daftar Restaurant</h2>
    <div class="card-container">
        <div class="cards" id="cards"></div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const listResto = await Restaurant.listRestaurant();
    const restoContainer = document.querySelector('#cards');
    listResto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
